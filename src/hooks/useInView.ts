"use client";

/**
 * useInView — Adds `is-visible` to the referenced element when it enters
 * the viewport. Disconnects after first trigger (fire-once).
 *
 * Usage:
 *   const ref = useInView<HTMLElement>();
 *   <section ref={ref} className="is-visible-target">…</section>
 *
 * Pair with CSS classes from globals.css:
 *   .reveal, .card-reveal, .reveal-fade
 */

import { useEffect, useRef } from "react";

export function useInView<T extends HTMLElement = HTMLElement>(
  threshold = 0.1
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Already visible (e.g. fast navigation back to section)
    if (el.classList.contains("is-visible")) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}