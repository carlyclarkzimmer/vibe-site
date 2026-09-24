"use client";

import { useEffect, useRef, useState } from "react";
import type { DeliveryEpisode } from "@/content/campaigns/beyond-the-bottleneck-delivery";
import { EpisodeLibrary } from "./EpisodeLibrary";
import styles from "../page.module.css";

const BLACK = [18, 18, 18] as const;
const BERRY = [153, 31, 93] as const;
const HOT_PINK = [255, 55, 176] as const;

function mix(from: readonly number[], to: readonly number[], progress: number) {
  const channels = from.map((value, index) => Math.round(value + (to[index] - value) * progress));
  return `rgb(${channels.join(", ")})`;
}

function titleColor(distance: number) {
  if (distance <= 0.1) return mix(HOT_PINK, HOT_PINK, 1);
  if (distance <= 0.34) return mix(HOT_PINK, BERRY, (distance - 0.1) / 0.24);
  if (distance <= 0.78) return mix(BERRY, BLACK, (distance - 0.34) / 0.44);
  return mix(BLACK, BLACK, 1);
}

export function ListeningExperience({ episodes }: { episodes: DeliveryEpisode[] }) {
  const [activeEpisode, setActiveEpisode] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const episodeElements = Array.from(root.querySelectorAll<HTMLElement>("[data-episode-slug]"));
    const titleElements = Array.from(root.querySelectorAll<HTMLElement>("[data-episode-title]"));
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const visibility = new Map<Element, number>();
    let frame = 0;

    const updateTitleColors = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;
      titleElements.forEach((title) => {
        const titleCenter = title.getBoundingClientRect().top + title.offsetHeight / 2;
        const distance = Math.abs(titleCenter - viewportCenter) / viewportCenter;
        title.style.setProperty("--episode-title-color", titleColor(distance));
      });
    };

    const requestTitleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateTitleColors);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visibility.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0));
        const current = [...visibility.entries()].sort((a, b) => b[1] - a[1])[0];
        if (current?.[1] > 0 && current[0] instanceof HTMLElement) {
          setActiveEpisode(current[0].dataset.episodeSlug ?? "intro");
        }
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: [0, 0.01, 0.25, 0.5, 0.75, 1] },
    );

    episodeElements.forEach((episode) => observer.observe(episode));
    if (!motionQuery.matches) {
      window.addEventListener("scroll", requestTitleUpdate, { passive: true });
      window.addEventListener("resize", requestTitleUpdate);
      updateTitleColors();
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestTitleUpdate);
      window.removeEventListener("resize", requestTitleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={rootRef}>
      <nav className={styles.episodeNav} id="episode-list" aria-labelledby="episode-list-title">
        <div className={styles.navHeading}>
          <h2 id="episode-list-title">Table of Contents</h2>
        </div>
        <ol>
          {episodes.map((episode) => (
            <li key={episode.slug}>
              <a
                aria-current={activeEpisode === episode.slug ? "location" : undefined}
                className={activeEpisode === episode.slug ? styles.activeEpisodeLink : undefined}
                href={`#episode-${episode.slug}`}
              >
                <span>{episode.number}</span>{episode.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <EpisodeLibrary activeEpisode={activeEpisode} episodes={episodes} />
    </div>
  );
}
