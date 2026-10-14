"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type Target = {
  element: HTMLElement;
  from: number[];
  originalInlineColor: string;
  progress: number;
};

const editorialText = "h1, h2, h3, h4, h5, h6, p, li, blockquote, dt, dd, figcaption";
const interactive = "a, button, label, input, textarea, select, summary, [role='button'], [contenteditable], [data-no-scroll-berry]";

function rgb(color: string) {
  const hex = color.trim().match(/^#([0-9a-f]{6})$/i);
  if (hex) return [0, 2, 4].map((index) => Number.parseInt(hex[1].slice(index, index + 2), 16));
  const channels = color.match(/^rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/);
  return channels ? channels.slice(1, 4).map(Number) : null;
}

function isDarkNeutral(channels: number[]) {
  return Math.max(...channels) <= 72 && Math.max(...channels) - Math.min(...channels) <= 20;
}

export function ScrollBerryText() {
  const pathname = usePathname();

  useEffect(() => {
    // This campaign already owns its more specific color and reveal timelines.
    if (pathname === "/beyond-the-bottleneck-2026") return;

    const main = document.querySelector("main");
    if (!main) return;

    const berry = rgb(getComputedStyle(document.documentElement).getPropertyValue("--color-accent"));
    if (!berry) return;

    const targets: Target[] = Array.from(main.querySelectorAll<HTMLElement>(editorialText))
      .filter((element) =>
        element.textContent?.trim() &&
        !element.closest(interactive) &&
        !element.querySelector(`${editorialText}, a, button`),
      )
      .map((element) => {
        const from = rgb(getComputedStyle(element).color);
        return from && isDarkNeutral(from)
          ? { element, from, originalInlineColor: element.style.color, progress: -1 }
          : null;
      })
      .filter((target): target is Target => target !== null);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    function restore() {
      for (const target of targets) {
        target.element.style.color = target.originalInlineColor;
        target.progress = -1;
      }
    }

    function update() {
      frame = 0;
      if (reducedMotion.matches) {
        restore();
        return;
      }

      const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
      const scrollTop = window.scrollY;
      const progressByTarget = targets.map((target) => {
        const documentTop = target.element.getBoundingClientRect().top + scrollTop;
        const start = Math.max(0, documentTop - viewportHeight * 0.8);
        const end = start + viewportHeight * 0.48;
        return Math.max(0, Math.min(1, (scrollTop - start) / (end - start)));
      });

      targets.forEach((target, index) => {
        const progress = progressByTarget[index];
        if (progress === target.progress) return;
        target.progress = progress;
        if (progress === 0) {
          target.element.style.color = target.originalInlineColor;
          return;
        }
        const channels = target.from.map((from, channel) =>
          Math.round(from + (berry[channel] - from) * progress),
        );
        target.element.style.color = `rgb(${channels.join(", ")})`;
      });
    }

    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.visualViewport?.addEventListener("resize", schedule);
    reducedMotion.addEventListener("change", schedule);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.visualViewport?.removeEventListener("resize", schedule);
      reducedMotion.removeEventListener("change", schedule);
      restore();
    };
  }, [pathname]);

  return null;
}
