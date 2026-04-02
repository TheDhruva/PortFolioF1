"use client";

/**
 * Hero — First section, mounts immediately after IntroScreen exits.
 *
 * Animation strategy:
 * - Since Hero mounts fresh (after intro dismissal), CSS animations
 *   auto-play on mount without any IntersectionObserver needed.
 * - hero-word: translateY clip reveal (globals.css @keyframes slideUpClip)
 * - hero-fade: opacity + translateY reveal with stagger delays
 * - hero-image: scaleIn + fadeIn reveal
 * - Framer Motion kept ONLY for button whileHover / whileTap (2 nodes)
 *
 * Responsive:
 * - Mobile: single column, profile image hidden, text scales with clamp
 * - Tablet+: two-column grid with profile image
 */

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="snap-section flex items-center
                 px-5 sm:px-8 pt-[var(--nav-h)]
                 max-w-[1440px] mx-auto w-full"
      style={{ maxWidth: "100%" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20
                      items-center w-full max-w-[1440px] mx-auto py-4 md:py-6">

        {/* ── Left: Copy + CTAs ─────────────────────────────── */}
        <div className="flex flex-col gap-6 md:gap-8">

          {/* Overline */}
          <span className="hero-fade hero-fade-d0
                           uppercase tracking-[0.22em] text-[10px]
                           text-[var(--color-on-surface-variant)] font-light">
            Creative Technologist &amp; AI Architect
          </span>

          {/* Word-by-word clip reveal */}
          <div className="flex flex-col">
            {(["Creating", "Scalable", "Impact."] as const).map((word, i) => (
              <div key={word} className="overflow-hidden leading-none">
                <span
                  className={`hero-word hero-word-d${i}
                               font-black tracking-[-0.045em] leading-[1.06]
                               text-[clamp(2.4rem,7vw,6rem)]
                               text-[var(--color-on-surface)]`}
                >
                  {word}
                </span>
              </div>
            ))}
          </div>

          {/* Body copy */}
          <p className="hero-fade hero-fade-d1
                        text-sm sm:text-base md:text-lg
                        text-[var(--color-on-surface-variant)]
                        max-w-sm md:max-w-md leading-relaxed font-light">
            Crafting intelligent digital systems through AI, modern web
            technologies, and clean, performance-driven design.
          </p>

          {/* CTAs */}
          <div className="hero-fade hero-fade-d2 flex flex-wrap gap-3 sm:gap-4">
            {/* Primary */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.28, ease: EASE }}
              className="px-8 sm:px-10 py-3 sm:py-3.5 rounded-full
                         font-medium uppercase tracking-[0.14em] text-[11px]
                         bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dim)]
                         text-[var(--color-on-primary)]
                         shadow-[0_12px_36px_rgba(12,14,16,0.1)] inline-block"
            >
              Resume
            </motion.a>

            {/* Ghost */}
            <motion.a
              href="https://www.linkedin.com/in/thedhruva/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.28, ease: EASE }}
              className="px-8 sm:px-10 py-3 sm:py-3.5 rounded-full
                         font-medium uppercase tracking-[0.14em] text-[11px]
                         border border-[var(--color-outline-variant)]/40
                         text-[var(--color-on-surface)]
                         hover:bg-[var(--color-surface-container-low)]
                         transition-colors duration-300 inline-block"
            >
              LinkedIn
            </motion.a>
          </div>
        </div>

        {/* ── Right: Profile image (hidden on mobile) ────────── */}
        <div className="relative group hidden md:block hero-image">
          {/* Tonal background glow */}
          <div className="absolute -inset-5 lg:-inset-6
                          bg-[var(--color-surface-container-low)] rounded-2xl -z-10
                          group-hover:bg-[var(--color-surface-container-high)]
                          transition-colors duration-500" />
          <Image
            src="/profile.jpg"
            alt="Dhruva — profile"
            width={800}
            height={800}
            priority
            className="w-full aspect-[7/6] object-cover rounded-xl
                       grayscale brightness-105 contrast-105
                       group-hover:grayscale-0 transition-all duration-700"
          />
        </div>

      </div>
    </section>
  );
}