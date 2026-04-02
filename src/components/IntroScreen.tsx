"use client";

/**
 * IntroScreen — Fullscreen cinematic gate.
 *
 * Framer Motion is intentionally KEPT here because:
 * 1. This is the ONLY first-frame animation — it must feel premium.
 * 2. The clip-reveal h1 (y: 110% → 0%) requires Framer's spring/spring
 *    interpolation for that exact "falling into place" feel.
 * 3. AnimatePresence exit (opacity 0 over 1.4s) cannot be replicated
 *    cleanly in CSS without React state gymnastics.
 * 4. This component is unmounted after first interaction — zero runtime cost
 *    once the portfolio is visible.
 *
 * Responsive:
 * - Typography: clamp(3rem, 13vw, 13rem) — readable on all screens
 * - Top meta row: responsive px, hidden on very small heights (landscape mobile)
 * - Enter hint: hidden on landscape mobile (overflow concern)
 */

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useAudio } from "@/context/AudioContext";

interface Props { onEnter: () => void; }

const EASE = [0.16, 1, 0.3, 1] as const;

export default function IntroScreen({ onEnter }: Props) {
  const { unlockAudio, play } = useAudio();

  const handleEnter = () => {
    unlockAudio();
    onEnter();
    requestAnimationFrame(() => play("elementAppear"));
  };

  return (
    <motion.div
      key="intro"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.4, ease: EASE } }}
      onClick={handleEnter}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center
                 cinematic-gradient cursor-pointer select-none group"
    >
      {/* ── Top meta ─────────────────────────────────────────── */}
      <div className="absolute top-8 sm:top-10 inset-x-0
                      flex justify-between px-6 sm:px-12 pointer-events-none">
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: EASE }}
          className="text-[9px] sm:text-[10px] tracking-[0.35em] uppercase font-light
                     text-[var(--color-on-surface-variant)]"
        >
          Creative Portfolio
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: EASE }}
          className="text-[9px] sm:text-[10px] tracking-[0.35em] uppercase font-light
                     text-[var(--color-on-surface-variant)]"
        >
          Vol. 2026
        </motion.span>
      </div>

      {/* ── Hero text ─────────────────────────────────────────── */}
      <div className="relative flex flex-col items-center text-center px-4 sm:px-6">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
            className="font-black text-[var(--color-on-surface)] tracking-tightest
                       text-[clamp(3rem,13vw,13rem)] uppercase leading-none"
          >
            THE DHRUVA
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: EASE }}
          className="mt-6 sm:mt-8 flex flex-col items-center gap-3 sm:gap-4"
        >
          <p className="text-[10px] sm:text-[11px] tracking-[0.42em] uppercase font-light
                        text-[var(--color-on-surface-variant)] max-w-[260px] sm:max-w-xs
                        leading-loose">
            Curating high-performance digital environments for the avant-garde
          </p>
          <div className="h-px w-10 bg-[var(--color-outline-variant)]/30" />
        </motion.div>
      </div>

      {/* ── Enter hint — hidden in landscape mobile ───────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2, ease: EASE }}
        className="absolute bottom-12 sm:bottom-16 flex flex-col items-center gap-3 sm:gap-4
                   max-h-screen-safe hidden-on-landscape"
      >
        <span className="text-[9px] tracking-[0.55em] uppercase font-medium
                         text-[var(--color-primary)]">
          Enter Experience
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-primary)]"
                       strokeWidth={1.5} />
        </motion.div>
      </motion.div>

      {/* ── Atmospheric blobs ─────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 -right-24 w-[42vw] h-[42vw]
                        bg-[var(--color-surface-container-low)]
                        rounded-full blur-[130px] opacity-50" />
        <div className="absolute -bottom-24 -left-24 w-[52vw] h-[52vw]
                        bg-[var(--color-surface-container-high)]
                        rounded-full blur-[150px] opacity-35" />
      </div>
    </motion.div>
  );
}