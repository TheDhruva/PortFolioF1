"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";

import { AudioProvider } from "@/context/AudioContext";
import IntroScreen    from "@/components/IntroScreen";
import NavBar         from "@/components/NavBar";
import Hero           from "@/components/Hero";
import ScrollProgress from "@/components/ScrollProgress";
import MuteButton     from "@/components/MuteButton";

/*
 * Lazy-load heavy sections so the initial JS bundle stays small.
 * ssr: false → these sections are client-only (audio, IntersectionObserver).
 * No loading fallback needed — they're below the fold and snap-hidden.
 */
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Skills   = dynamic(() => import("@/components/Skills"),   { ssr: false });
const Contact  = dynamic(() => import("@/components/Contact"),  { ssr: false });

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <AudioProvider>
      <main className="relative w-full h-[100svh] overflow-hidden">
        <ScrollProgress />

        {/* ── Intro gate ─────────────────────────────────────── */}
        <AnimatePresence>
          {showIntro && (
            <IntroScreen key="intro" onEnter={() => setShowIntro(false)} />
          )}
        </AnimatePresence>

        {/* ── Main portfolio ──────────────────────────────────── */}
        {!showIntro && (
          <>
            <MuteButton />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              id="scroll-container"
              className="[--nav-h:5rem]
                         h-[100svh] w-full
                         overflow-y-scroll
                         snap-y snap-mandatory"
              /*
               * translateZ(0): promotes scroll container to its own compositor
               * layer. willChange on scroll-position avoids compositing overhead
               * on individual children.
               */
              style={{ transform: "translateZ(0)", willChange: "scroll-position" }}
            >
              <NavBar />
              <Hero />
              <Projects />
              <Skills />
              <Contact />
            </motion.div>
          </>
        )}
      </main>
    </AudioProvider>
  );
}