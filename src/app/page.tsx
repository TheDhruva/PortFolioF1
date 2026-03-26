"use client";

import { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import IntroScreen from "@/components/IntroScreen";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  
  // Signature Component: Cinematic Scroll-Progress
  const { scrollYProgress } = useScroll();
  // Shifts from primary (charcoal) to inverse_primary (white) seamlessly as user scrolls
  const scrollBarColor = useTransform(scrollYProgress, [0, 0.5], ["#5f5e60", "#ffffff"]);

  return (
    <main className="relative min-h-screen">
      <AnimatePresence>
        {showIntro && <IntroScreen key="intro" onEnter={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Scroll Progress Bar */}
          <motion.div 
            className="fixed top-0 left-0 h-[2px] z-[100] origin-left"
            style={{ scaleX: scrollYProgress, backgroundColor: scrollBarColor }}
          />
          
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