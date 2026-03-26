"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroScreen  from "@/components/IntroScreen";
import NavBar       from "@/components/NavBar";
import Hero         from "@/components/Hero";
import Projects     from "@/components/Projects";
import Skills       from "@/components/Skills";
import Contact      from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="relative">
      {/* Thin scroll-progress bar sits above everything */}
      <ScrollProgress />

      {/* ── Intro gate ───────────────────────────────────────── */}
      <AnimatePresence>
        {showIntro && (
          <IntroScreen key="intro" onEnter={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* ── Main portfolio (mounted after intro exits) ────────── */}
      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          /*
           * --nav-h drives the "100svh − navbar" formula used inside every
           * section so content is never hidden behind the fixed header.
           * snap-y + snap-mandatory give the full-panel scroll rhythm.
           */
          className="[--nav-h:5rem] snap-y snap-mandatory overflow-y-scroll h-[100svh]"
          id="scroll-container"
        >
          <NavBar />
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </motion.div>
      )}
    </main>
  );
}