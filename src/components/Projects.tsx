"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, ExternalLink } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const PROJECTS = [
  {
    id: "01",
    title: "AI Traffic Navigator",
    desc:  "Real-time traffic signal optimization using YOLOv8 computer vision — built for Indian cities, with Arduino hardware control.",
    tech:  ["Python", "OpenCV", "YOLOv8"],
    img:   "/Projects/trafficnav.png",
    github: "https://github.com/TheDhruva/AI-Traffic-Navigator",
    live:   null,
  },
  {
    id: "02",
    title: "AI Agent Builder",
    desc:  "Visual no-code platform for deploying multi-step AI agent workflows with drag-and-drop node editor.",
    tech:  ["Next.js 15", "TypeScript", "OpenAI SDK", "Convex"],
    img:   "/Projects/agentgen.png",
    github: "https://github.com/TheDhruva/AI-Agent-Builder",
    live:   "https://ai-agent-builder-qk66.vercel.app/",
  },
  {
    id: "03",
    title: "AI Resume Builder",
    desc:  "SaaS resume builder where AI generates metric-driven bullet points — live preview, PDF export, shareable links.",
    tech:  ["React 19", "Convex", "Gemini API", "Clerk"],
    img:   "/Projects/resumegen.png",
    github: "https://github.com/TheDhruva/AI-Resume-Builder",
    live:   "https://ai-resume-builder-nu-seven.vercel.app/",
  },
  {
    id: "04",
    title: "Sentiment Analysis",
    desc:  "Production ML app classifying Amazon reviews — single review mode and bulk CSV processing at 100k+ row scale.",
    tech:  ["XGBoost", "Scikit-learn", "Streamlit", "NLTK"],
    img:   "/Projects/sentiment-analysis.jpg",
    github: "https://github.com/TheDhruva/sentiment-analysis-amazon-reviews",
    live:   null,
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="snap-section flex flex-col justify-center
                 px-8 pt-[var(--nav-h)]
                 max-w-[1440px] mx-auto w-full"
      style={{ maxWidth: "100%" }}
    >
      {/* ── Header ──────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: EASE }}
        className="flex flex-col gap-2 mb-8 max-w-[1440px] mx-auto w-full"
      >
        <span className="uppercase tracking-[0.22em] text-[10px]
                         text-[var(--color-on-surface-variant)] font-light">
          Selected Works 23—25
        </span>
        <h2 className="font-black tracking-[-0.04em] text-[clamp(1.8rem,4vw,3rem)]
                       text-[var(--color-on-surface)]">
          Digital Archive
        </h2>
      </motion.div>

      {/* ── Accordion Columns ───────────────────────────────── */}
      <div
        className="flex flex-col md:flex-row gap-3 w-full max-w-[1440px] mx-auto"
        style={{ height: "clamp(220px, calc(100svh - var(--nav-h) - 9rem), 520px)" }}
      >
        {PROJECTS.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: idx * 0.08, ease: EASE }}
            className="relative flex-[1] hover:flex-[4]
                       min-h-[160px] md:min-h-0
                       transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                       bg-[var(--color-surface-container-high)] rounded-2xl
                       overflow-hidden cursor-default group"
          >
            {/* Background image */}
            <img
              src={proj.img}
              alt={proj.title}
              className="absolute inset-0 w-full h-full object-cover
                         grayscale opacity-50 group-hover:opacity-30
                         transition-all duration-700 scale-100 group-hover:scale-105"
            />

            {/* * THE FIX: Clean, two-layer vignette. 
              * Layer 1: Base dimmer to ensure the grayscale image doesn't blow out the text.
              */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 
                            transition-colors duration-700 z-0" />

            {/* * Layer 2: Deep bottom-to-top gradient anchoring the text.
              * Gets slightly darker on hover to push text contrast up.
              */}
            <div className="absolute inset-0 bg-gradient-to-t 
                            from-black/95 via-black/40 to-transparent 
                            opacity-80 group-hover:opacity-100 
                            transition-opacity duration-700 z-0" />

            {/* ── Card Content ──────────────────────────────── */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">

              {/* Top row: index badge + action icons */}
              <div className="flex justify-between items-start">
                <span className="text-white/80 bg-black/40 backdrop-blur-sm
                                 px-2.5 py-1 rounded text-[9px] uppercase tracking-[0.2em] font-medium">
                  {proj.id}
                </span>

                <div className="flex gap-2 items-center
                                opacity-0 translate-y-1
                                group-hover:opacity-100 group-hover:translate-y-0
                                transition-all duration-300 delay-100">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm
                               border border-white/15 flex items-center justify-center
                               hover:bg-white/20 transition-colors duration-200"
                    title="GitHub"
                  >
                    <Globe className="w-3.5 h-3.5 text-white/90" strokeWidth={2.5} />
                  </a>
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="h-8 px-3 rounded-full bg-white/10 backdrop-blur-sm
                                 border border-white/15 flex items-center gap-1.5
                                 hover:bg-white/20 transition-colors duration-200"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-3 h-3 text-white/90" strokeWidth={2.5} />
                      <span className="text-[9px] uppercase tracking-[0.15em] text-white/90 font-medium
                                       hidden group-hover:inline">
                        Live
                      </span>
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom: title + details */}
              <div className="flex flex-col gap-4">
                <div className="flex items-end justify-between">
                  <h3 className="font-black tracking-[-0.03em] leading-tight
                                 text-lg md:text-xl lg:text-2xl
                                 text-white/90 group-hover:text-white
                                 transition-colors duration-300">
                    {proj.title}
                  </h3>
                  <ArrowUpRight
                    className="w-4 h-4 text-white/40 group-hover:text-white
                               group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                               transition-all duration-300 shrink-0 ml-2"
                    strokeWidth={2}
                  />
                </div>

                <div
                  className="flex-col gap-3 opacity-0 translate-y-2
                             group-hover:opacity-100 group-hover:translate-y-0
                             transition-all duration-500 delay-100
                             hidden md:flex"
                >
                  <p className="text-white/80 text-xs leading-relaxed max-w-[28ch]">
                    {proj.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map(t => (
                      <span
                        key={t}
                        className="text-[9px] uppercase tracking-[0.12em] font-medium
                                   text-white/70 border border-white/20 bg-white/5
                                   px-2 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}