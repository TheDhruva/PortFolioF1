"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress]       = useState(0);
  const [isDarkSection, setIsDark]    = useState(false);

  useEffect(() => {
    // Listen on the snap scroll container, not window
    const container = document.getElementById("scroll-container");
    if (!container) return;

    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const total = scrollHeight - clientHeight;
      const pct   = total > 0 ? (scrollTop / total) * 100 : 0;
      setProgress(pct);
      // Skills + Contact sections are roughly the last 50 % of scroll
      setIsDark(pct > 48);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 h-[2px] z-[60] pointer-events-none"
      style={{
        width: `${progress}%`,
        background: isDarkSection
          ? "var(--color-inverse-primary)"
          : "var(--color-primary)",
        transition: "width 0.1s linear, background 0.4s ease",
      }}
    />
  );
}