"use client";

import { motion, cubicBezier } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  // Stagger container for text animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: cubicBezier(0.16, 1, 0.3, 1),
      },
    },
  };

  return (
    <section id="home" className="min-h-[calc(100svh-var(--nav-h))] md:h-[calc(100svh-var(--nav-h))] scroll-mt-[var(--nav-h)] snap-start flex items-center px-8 max-w-[1440px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-24 items-center w-full">
        {/* Left: Typography & CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-12"
        >
          {/* Section Label */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <motion.span
              className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant"
              variants={itemVariants}
            >
              Creative Technologist & AI Architect
            </motion.span>

            {/* Hero Title */}
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black tracking-tightest leading-[1.1] text-on-surface">
              <motion.span variants={itemVariants} className="block">
                Designing
              </motion.span>
              <motion.span variants={itemVariants} className="block">
                Digital
              </motion.span>
              <motion.span variants={itemVariants} className="block">
                Poetry.
              </motion.span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="font-body text-lg text-on-surface-variant max-w-md leading-relaxed font-light"
          >
            A multi-disciplinary developer crafting high-performance digital experiences through the lens of minimalist editorial design and cinematic movement.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 mt-4">
            {/* Primary Button */}
            <motion.button
              className="relative px-12 py-4 font-label uppercase text-[11px] tracking-widest rounded-full bg-gradient-to-r from-primary to-primary-dim text-inverse-primary font-semibold shadow-[0_20px_80px_rgba(12,14,16,0.06)] overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: cubicBezier(0.16, 1, 0.3, 1) }}
            >
              <span className="relative z-10">Resume</span>
              <motion.div
                className="absolute inset-0 bg-primary-dim opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3, ease: cubicBezier(0.16, 1, 0.3, 1) }}
              />
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              className="px-12 py-4 font-label uppercase text-[11px] tracking-widest rounded-full text-on-surface bg-surface-container-low hover:bg-surface-container-high transition-colors duration-300 relative group overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: cubicBezier(0.16, 1, 0.3, 1) }}
            >
              GitHub
              <motion.div
                className="absolute bottom-0 left-0 h-[1px] bg-on-surface w-0 group-hover:w-full transition-all duration-300"
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right: Visual Anchor (Image + Tonal Base) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          {/* Tonal Background Layer */}
          <motion.div
            className="absolute -inset-6 md:-inset-8 bg-surface-container-low rounded-2xl -z-10"
            whileHover={{ backgroundColor: "#e4e9ee" }}
            transition={{ duration: 0.5, ease: cubicBezier(0.16, 1, 0.3, 1) }}
          />

          {/* Image */}
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
            alt="The Dhruva Profile"
            width={1000}
            height={1200}
            className="w-full aspect-[4/5] md:aspect-[5/6] object-cover rounded-xl grayscale brightness-105 contrast-110 group-hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
}