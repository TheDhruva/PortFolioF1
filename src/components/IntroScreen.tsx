"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface IntroScreenProps {
  onEnter: () => void;
}

export default function IntroScreen({ onEnter }: IntroScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } }}
      onClick={onEnter}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center cinematic-gradient cursor-pointer group"
    >
      {/* Top Accessory Info */}
      <div className="absolute top-12 left-0 w-full flex justify-between px-12 pointer-events-none">
        <span className="text-[10px] tracking-widest uppercase font-light text-on-surface-variant opacity-60">
          Creative Portfolio
        </span>
        <span className="text-[10px] tracking-widest uppercase font-light text-on-surface-variant opacity-60">
          Vol. 2024
        </span>
      </div>

      {/* Central Epicenter */}
      <div className="relative flex flex-col items-center text-center px-6">
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-black text-on-surface tracking-tightest text-[clamp(4rem,15vw,14rem)] uppercase leading-none"
          >
            THE DHRUVA
          </motion.h1>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <p className="font-label text-[11px] tracking-widest uppercase font-light text-on-surface-variant max-w-xs leading-loose">
            Curating high-performance digital environments for the avant-garde
          </p>
          <div className="h-px w-12 bg-outline-variant/30 mt-4"></div>
        </motion.div>
      </div>

      {/* Interactive Interaction Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 flex flex-col items-center gap-6 animate-pulse group-hover:opacity-100 transition-opacity duration-700"
      >
        <span className="font-label text-[9px] tracking-[0.5em] uppercase font-medium text-primary">
          Enter Experience
        </span>
        <ChevronDown className="text-primary w-6 h-6" />
      </motion.div>

      {/* Visual Anchor Elements (Bento-style background depth) */}
      <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-[40vw] h-[40vw] bg-surface-container-low rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute -bottom-20 -left-20 w-[50vw] h-[50vw] bg-surface-container-high rounded-full blur-[140px] opacity-30"></div>
      </div>
    </motion.div>
  );
}