"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const PROJECTS = [
  {
    id: "01",
    title: "AI Traffic Navigator",
    desc:  "An intelligent, real-time traffic signal optimization system designed for dynamic traffic conditions, specifically tailored for Indian cities. The system leverages computer vision (YOLOv8) to analyze live video feeds, dynamically computes priority scores for each traffic arm, and physically controls traffic signals via an Arduino.",
    tech:  ["Python", "OpenCV", "Ultralytics YOLOv8"],
    img:   "/Projects/trafficnav.png",
    href:  "https://github.com/TheDhruva/AI-Traffic-Navigator",
  },
  {
    id: "02",
    title: "AI Agent Builder",
    desc:  "Visual no-code platform for building, configuring, and deploying multi-step AI agent workflows — drag-and-drop node editor with realtime backend sync and production-grade security.",
    tech:  ["Next.js 15", "TypeScript", "OpenAI SDK", "React Flow", "Convex", "Clerk", "Arcjet"],
    img:   "/Projects/agentgen.png",
    href:  "https://github.com/TheDhruva/AI-Agent-Builder",
    liveDemoHref: "https://ai-agent-builder-qk66.vercel.app/",
  },
  {
    id: "03",
    title: "AI Resume Builder",
    desc:  "Full-stack SaaS resume builder where AI auto-generates metric-driven bullet points — live preview, PDF export, and shareable public links.",
    tech:  ["React 19", "Convex", "Gemini API", "Clerk Auth", "React Router v7"],
    img:   "/Projects/resumegen.png",
    href:  "https://github.com/TheDhruva/AI-Resume-Builder",
    liveDemoHref: "https://ai-resume-builder-nu-seven.vercel.app/",
  },
  {
    id: "04",
    title: "Sentiment Analysis System",
    desc:  "Production ML app classifying Amazon product reviews as positive/negative — single review mode and bulk CSV processing at 100k+row scale.",
    tech:  ["XGBoost", "Scikit-learn", "Streamlit", "Pandas / NumPy", "NLTK", "Vercel (Python)"],
    img:   "/Projects/sentiment-analysis.jpg",
    href:  "https://github.com/TheDhruva/sentiment-analysis-amazon-reviews",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="snap-section flex items-center
                 min-h-[calc(100svh-var(--nav-h))] scroll-mt-[var(--nav-h)]
                 px-8 max-w-[1440px] mx-auto overflow-hidden"
    >
      <div className="w-full flex flex-col justify-center py-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: EASE }}
          className="flex flex-col gap-3 mb-14"
        >
          <span className="uppercase tracking-[0.22em] text-[10px]
                           text-[var(--color-on-surface-variant)] font-light">
            Selected Works 23—24
          </span>
          <h2 className="font-black tracking-[-0.04em] text-[clamp(2rem,5vw,3.5rem)]
                         text-[var(--color-on-surface)]">
            Digital Archive
          </h2>
        </motion.div>

        {/* Accordion columns */}
        <div className="flex flex-col md:flex-row gap-4 w-full
                        h-auto md:h-[min(54vh,560px)]">
          {PROJECTS.map((proj) => (
            /*
             * flex-[1] at rest.
             * On hover the column expands to flex-[4] via Tailwind's
             * group-hover + custom property trick — pure CSS, no JS.
             * The `transition-all` + cubic-bezier gives the cinema feel.
             */
            <a
              key={proj.id}
              href={proj.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex-[1] hover:flex-[4]
                         min-h-[180px] md:min-h-0
                         transition-all duration-[750ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                         bg-[var(--color-surface-container-low)] rounded-2xl
                         overflow-hidden cursor-pointer group"
            >
              {/* Background image */}
              <img
                src={proj.img}
                alt={proj.title}
                className="absolute inset-0 w-full h-full object-cover
                           opacity-50 group-hover:opacity-35 grayscale
                           transition-opacity duration-700"
              />

              {/* Dark vignette for readability */}
              <div className="absolute inset-0 bg-gradient-to-t
                              from-black/60 via-black/10 to-transparent opacity-0
                              group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-7 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="text-white/90 bg-black/30 backdrop-blur-sm
                                   px-3 py-1 rounded text-[9px] uppercase tracking-[0.2em]">
                    {proj.id}
                  </span>
                  <ArrowUpRight
                    className="text-white/40 group-hover:text-white
                               transition-colors duration-300 w-5 h-5"
                    strokeWidth={1.5}
                  />
                </div>

                <div className="flex flex-col gap-5">
                  <h3 className="font-black tracking-[-0.03em] text-xl md:text-2xl
                                 text-[var(--color-on-surface)] group-hover:text-white
                                 transition-colors duration-300">
                    {proj.title}
                  </h3>

                  {/* Details — visible only when expanded (hover) */}
                  <div
                    className="flex-col gap-4 opacity-0 translate-y-3
                               group-hover:opacity-100 group-hover:translate-y-0
                               transition-all duration-500 delay-150
                               hidden md:flex"
                  >
                    <p className="text-white/75 text-xs leading-relaxed max-w-[22ch]">
                      {proj.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map(t => (
                        <span
                          key={t}
                          className="text-[9px] uppercase tracking-[0.15em]
                                     text-white/55 border border-white/20
                                     px-2 py-1 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}