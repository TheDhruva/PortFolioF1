"use client";

/**
 * ScrollProgress — 2px bar at top of viewport.
 *
 * Performance optimisations vs original:
 * 1. rAF throttle — scroll handler only schedules a rAF tick;
 *    actual DOM/state update runs at most once per frame (60fps cap).
 * 2. useRef for isDark — avoids a React re-render on every scroll event.
 *    The bar DOM node is mutated directly via ref (no style re-calc from React).
 * 3. sectionIndexRef still guards section-snap SFX (fires once per section).
 * 4. Passive event listener (already present in original, kept).
 */

import { useEffect, useRef } from "react";
import { useAudio } from "@/context/AudioContext";

export default function ScrollProgress() {
  const barRef          = useRef<HTMLDivElement>(null);
  const rafRef          = useRef<number | null>(null);
  const sectionIndexRef = useRef(-1);
  const { play }        = useAudio();

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    const bar       = barRef.current;
    if (!container || !bar) return;

    const onScroll = () => {
      /* Debounce to one rAF per frame — never blocks the scroll thread */
      if (rafRef.current !== null) return;

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;

        const { scrollTop, scrollHeight, clientHeight } = container;
        const total = scrollHeight - clientHeight;
        const pct   = total > 0 ? (scrollTop / total) * 100 : 0;

        /* Direct DOM mutation — zero React overhead */
        bar.style.width      = `${pct}%`;
        bar.style.background = pct > 48
          ? "var(--color-inverse-primary)"
          : "var(--color-primary)";

        /* Fire section-snap SFX once per section */
        const idx = Math.round(pct / 25);
        if (idx !== sectionIndexRef.current) {
          sectionIndexRef.current = idx;
          play("sectionSnap");
        }
      });
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [play]);

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="fixed top-0 left-0 h-[2px] z-[60] pointer-events-none"
      style={{
        width:      "0%",
        background: "var(--color-primary)",
        transition: "background 0.4s ease",
        /* width transitions intentionally removed — direct rAF mutation is smoother */
      }}
    />
  );
}