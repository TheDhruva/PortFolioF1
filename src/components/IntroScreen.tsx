"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Props { onEnter: () => void; }

/* ── Animation helpers ─────────────────────────────────────── */
const EASE = [0.16, 1, 0.3, 1] as const;

export default function IntroScreen({ onEnter }: Props) {
  return (
    <motion.div
      key="intro"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.4, ease: EASE } }}
      onClick={onEnter}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center cinematic-gradient cursor-pointer select-none group"
    >

      {/* ── Top meta row ──────────────────────────────────────── */}
      <div className="absolute top-10 inset-x-0 flex justify-between px-12 pointer-events-none">
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: EASE }}
          className="text-[10px] tracking-[0.35em] uppercase font-light text-[var(--color-on-surface-variant)]"
        >
          Creative Portfolio
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: EASE }}
          className="text-[10px] tracking-[0.35em] uppercase font-light text-[var(--color-on-surface-variant)]"
        >
          Vol. 2026
        </motion.span>
      </div>

      {/* ── Central hero text ─────────────────────────────────── */}
      <div className="relative flex flex-col items-center text-center px-6">
        {/* Clip trick: title slides up from behind overflow:hidden */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
            className="font-black text-[var(--color-on-surface)] tracking-tightest
                       text-[clamp(3.5rem,14vw,13rem)] uppercase leading-none"
          >
            THE DHRUVA
          </motion.h1>
        </div>

        {/* Tagline + rule */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: EASE }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <p className="text-[11px] tracking-[0.42em] uppercase font-light
                        text-[var(--color-on-surface-variant)] max-w-xs leading-loose">
            Curating high-performance digital environments for the avant-garde
          </p>
          <div className="h-px w-10 bg-[var(--color-outline-variant)]/30" />
        </motion.div>
      </div>

      {/* ── Enter hint ────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2, ease: EASE }}
        className="absolute bottom-16 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] tracking-[0.55em] uppercase font-medium
                         text-[var(--color-primary)] group-hover:opacity-100 transition-opacity">
          Enter Experience
        </span>
        {/* Gentle bob */}
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-[var(--color-primary)]" strokeWidth={1.5} />
        </motion.div>
      </motion.div>

      {/* ── Atmospheric blobs ─────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 -right-24 w-[42vw] h-[42vw]
                        bg-[var(--color-surface-container-low)] rounded-full blur-[130px] opacity-50" />
        <div className="absolute -bottom-24 -left-24 w-[52vw] h-[52vw]
                        bg-[var(--color-surface-container-high)] rounded-full blur-[150px] opacity-35" />
      </div>
    </motion.div>
  );
}