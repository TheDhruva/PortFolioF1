"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

/* Stagger container / child variants */
const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.09, delayChildren: 0.25 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="snap-section flex items-center
                 min-h-[calc(100svh-var(--nav-h))] scroll-mt-[var(--nav-h)]
                 px-8 pt-[var(--nav-h)] max-w-[1440px] mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center w-full py-10 md:py-0">

        {/* ── LEFT: Copy + CTAs ────────────────────────────────── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-10"
        >
          {/* Overline */}
          <motion.span
            variants={item}
            className="uppercase tracking-[0.22em] text-[10px]
                       text-[var(--color-on-surface-variant)] font-light"
          >
            Creative Technologist &amp; AI Architect
          </motion.span>

          {/* Headline — each word clips up independently */}
          <div className="flex flex-col gap-0 overflow-hidden">
            {["Creating", "Scalable", "Impact."].map((word, i) => (
              <div key={word} className="overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: EASE }}
                  className="block font-black tracking-[-0.045em] leading-[1.05]
                             text-[clamp(2.8rem,6.5vw,6.5rem)]
                             text-[var(--color-on-surface)]"
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </div>

          {/* Body */}
          <motion.p
            variants={item}
            className="text-base md:text-lg text-[var(--color-on-surface-variant)]
                       max-w-md leading-relaxed font-light"
          >
            Crafting intelligent digital systems through AI, modern web technologies,
and clean, performance-driven design.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mt-2">
            {/* Primary — metallic pill */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.28, ease: EASE }}
              className="px-10 py-3.5 rounded-full font-medium uppercase tracking-[0.14em] text-[11px]
                         bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dim)]
                         text-[var(--color-on-primary)]
                         shadow-[0_20px_60px_rgba(12,14,16,0.1)] inline-block cursor-pointer text-center"
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
              className="px-10 py-3.5 rounded-full font-medium uppercase tracking-[0.14em] text-[11px]
                         border border-[var(--color-outline-variant)]/40
                         text-[var(--color-on-surface)]
                         hover:bg-[var(--color-surface-container-low)] transition-colors duration-300 inline-block cursor-pointer text-center"
            >
              LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Image ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.4, ease: EASE }}
          className="relative group"
        >
          {/* Tonal backing plate */}
          <motion.div
            className="absolute -inset-6 md:-inset-8 bg-[var(--color-surface-container-low)]
                       rounded-2xl -z-10"
            whileHover={{ backgroundColor: "var(--color-surface-container-high)" }}
            transition={{ duration: 0.5 }}
          />

          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
            alt="Dhruva — profile"
            width={1000}
            height={1200}
            priority
            className="w-full aspect-[7/5] md:aspect-[7/6] object-cover rounded-xl
                       grayscale brightness-105 contrast-105
                       group-hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

      </div>
    </section>
  );
}