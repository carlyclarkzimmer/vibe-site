"use client";

import { useEffect } from "react";
import styles from "./CampaignSections.module.css";

type RangePoint = { phase: "entry" | "cover" | "exit"; fraction: number };
type Effect = "check" | "arrow" | "question" | "ink" | "berry" | "muted";
type ScrollTarget = { element: HTMLElement; start: RangePoint; end: RangePoint; effect: Effect };

const entry = (fraction: number): RangePoint => ({ phase: "entry", fraction });
const cover = (fraction: number): RangePoint => ({ phase: "cover", fraction });
const exit = (fraction: number): RangePoint => ({ phase: "exit", fraction });

function viewportTop(point: RangePoint, height: number, viewportHeight: number) {
  if (point.phase === "entry") return viewportHeight - point.fraction * height;
  if (point.phase === "cover") return viewportHeight - point.fraction * (viewportHeight + height);
  return -point.fraction * height;
}

function hexToRgb(hex: string) {
  const value = hex.trim().replace("#", "");
  return [0, 2, 4].map((index) => Number.parseInt(value.slice(index, index + 2), 16));
}

function mixColor(from: number[], to: number[], progress: number) {
  const amount = Math.max(0, Math.min(1, progress));
  return `rgb(${from.map((channel, index) => Math.round(channel + (to[index] - channel) * amount)).join(", ")})`;
}

export function ScrollAnimationFallback() {
  useEffect(() => {
    const groups: { selector: string; start: RangePoint; end: RangePoint; effect: Effect }[] = [
      { selector: `.${styles.problemList} p, .${styles.checklistBox}`, start: entry(0.15), end: cover(0.35), effect: "check" },
      { selector: `.${styles.sharingList} p`, start: entry(0), end: cover(0.22), effect: "arrow" },
      { selector: `.${styles.questionIntroCopy} > .${styles.questionReveal}`, start: entry(0.1), end: exit(0.6), effect: "question" },
      { selector: `.${styles.fearCluster} p, .${styles.questionBody} > .${styles.fearConclusion}`, start: entry(0.15), end: exit(0.45), effect: "berry" },
      { selector: `.${styles.reframeCluster} li`, start: entry(0.15), end: exit(0.45), effect: "ink" },
      { selector: `.${styles.moreList} p`, start: entry(0.15), end: exit(0.45), effect: "muted" },
      { selector: `.${styles.insideCopy} p, .${styles.topicList} dt, .${styles.topicList} dd`, start: entry(0), end: cover(0.32), effect: "berry" },
      { selector: `.${styles.evidence} p`, start: entry(0), end: cover(0.4), effect: "berry" },
    ];
    const targets: ScrollTarget[] = groups.flatMap(({ selector, start, end, effect }) =>
      Array.from(document.querySelectorAll<HTMLElement>(selector), (element) => ({ element, start, end, effect })),
    );
    const tokens = getComputedStyle(document.documentElement);
    const colors = {
      ink: hexToRgb(tokens.getPropertyValue("--color-ink")),
      berry: hexToRgb(tokens.getPropertyValue("--color-accent")),
      muted: hexToRgb(tokens.getPropertyValue("--color-text-muted")),
      hotPink: hexToRgb("#ff37b0"),
    };
    const mobile = window.matchMedia("(max-width: 900px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const nativeTimeline = CSS.supports("animation-timeline: view()") && CSS.supports("animation-range: entry 15% cover 35%");
    let frame = 0;

    function update() {
      frame = 0;
      const useFallback = !reducedMotion.matches && (mobile.matches || !nativeTimeline);
      if (!useFallback) {
        document.documentElement.removeAttribute("data-btb-scroll-fallback");
        return;
      }

      const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
      for (const { element, start, end, effect } of targets) {
        const rect = element.getBoundingClientRect();
        const startTop = viewportTop(start, rect.height, viewportHeight);
        const endTop = viewportTop(end, rect.height, viewportHeight);
        const progress = Math.max(0, Math.min(1, (startTop - rect.top) / (startTop - endTop)));
        if (effect === "check") {
          const firstLeg = Math.min(1, progress / 0.65);
          const secondLeg = Math.max(0, (progress - 0.65) / 0.35);
          const rotation = progress <= 0.65 ? -12 + 16 * firstLeg : 4 - 4 * secondLeg;
          const scale = progress <= 0.65 ? 0.25 + 0.93 * firstLeg : 1.18 - 0.18 * secondLeg;
          element.style.setProperty("--btb-scroll-opacity", firstLeg.toFixed(3));
          element.style.setProperty("--btb-scroll-transform", `rotate(${rotation.toFixed(2)}deg) scale(${scale.toFixed(3)})`);
        } else if (effect === "arrow") {
          element.style.setProperty("--btb-scroll-opacity", progress.toFixed(3));
          element.style.setProperty("--btb-scroll-transform", `translateX(${(-34 * (1 - progress)).toFixed(2)}px)`);
        } else if (effect === "question") {
          const reveal = Math.min(1, progress / 0.25);
          element.style.setProperty("--btb-scroll-opacity", reveal.toFixed(3));
          element.style.setProperty("--btb-scroll-transform", `translateY(${(28 * (1 - reveal)).toFixed(2)}px)`);
          element.style.setProperty("--btb-scroll-color", mixColor(colors.ink, colors.berry, (progress - 0.65) / 0.35));
        } else {
          element.style.setProperty("--btb-scroll-color", mixColor(colors[effect], colors.hotPink, (progress - 0.35) / 0.65));
        }
      }
      document.documentElement.setAttribute("data-btb-scroll-fallback", "");
    }

    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.visualViewport?.addEventListener("resize", schedule);
    mobile.addEventListener("change", schedule);
    reducedMotion.addEventListener("change", schedule);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.visualViewport?.removeEventListener("resize", schedule);
      mobile.removeEventListener("change", schedule);
      reducedMotion.removeEventListener("change", schedule);
      document.documentElement.removeAttribute("data-btb-scroll-fallback");
      for (const { element } of targets) {
        element.style.removeProperty("--btb-scroll-opacity");
        element.style.removeProperty("--btb-scroll-transform");
        element.style.removeProperty("--btb-scroll-color");
      }
    };
  }, []);

  return null;
}
