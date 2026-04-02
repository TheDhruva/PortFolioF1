"use client";

/**
 * MuteButton — floating bottom-right pill.
 * Framer Motion kept here: it's a persistent interactive control
 * where tactile hover/tap feedback matters.
 */

import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useAudio } from "@/context/AudioContext";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function MuteButton() {
  const { muted, toggleMute, play } = useAudio();

  return (
    <motion.button
      aria-label={muted ? "Unmute audio" : "Mute audio"}
      onClick={() => { play("buttonClick"); toggleMute(); }}
      onMouseEnter={() => play("buttonHover")}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5, ease: EASE }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      /*
       * z-[55]: above sections (z-0) and below nav (z-40) / progress (z-60)
       * bg-white/10 without backdrop-blur — keeps GPU cost low
       */
      className="fixed bottom-6 sm:bottom-8 right-5 sm:right-8 z-[55]
                 flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full
                 bg-white/10 border border-white/15
                 hover:bg-white/20 transition-colors duration-200"
    >
      <AnimatePresence mode="wait" initial={false}>
        {muted ? (
          <motion.span key="off"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <VolumeX className="w-3.5 h-3.5 text-white/60" strokeWidth={1.5} />
          </motion.span>
        ) : (
          <motion.span key="on"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Volume2 className="w-3.5 h-3.5 text-white/60" strokeWidth={1.5} />
          </motion.span>
        )}
      </AnimatePresence>
      <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-white/50">
        {muted ? "Off" : "On"}
      </span>
    </motion.button>
  );
}