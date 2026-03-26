"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroScreen    from "@/components/IntroScreen";
import NavBar         from "@/components/NavBar";
import Hero           from "@/components/Hero";
import Projects       from "@/components/Projects";
import Skills         from "@/components/Skills";
import Contact        from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="relative w-full h-[100svh] overflow-hidden">
      <ScrollProgress />

      {/* ── Intro gate ───────────────────────────────────────── */}
      <AnimatePresence>
        {showIntro && (
          <IntroScreen key="intro" onEnter={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* ── Main portfolio ───────────────────────────────────── */}
      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          /*
           * --nav-h: the height of the fixed navbar, used in every section
           *   to compute pt-[var(--nav-h)] so content clears the nav.
           *
           * snap-y mandatory + overflow-y-scroll: the snap scroll engine.
           *   All scrolling is contained here; the body stays overflow:hidden
           *   so no browser scrollbar ever appears.
           */
          id="scroll-container"
          className="[--nav-h:5rem]
                     h-[100svh] w-full
                     overflow-y-scroll
                     snap-y snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
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