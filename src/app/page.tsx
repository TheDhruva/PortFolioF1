"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroScreen from "@/components/IntroScreen";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="relative min-h-screen">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      <AnimatePresence>
        {showIntro && <IntroScreen key="intro" onEnter={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <motion.div
          className="snap-y snap-mandatory [--nav-h:5rem] pt-[var(--nav-h)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
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