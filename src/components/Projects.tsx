"use client";

/**
 * Projects — CSS flex accordion.
 *
 * Animation strategy:
 * - Section ref watched by IntersectionObserver → adds "is-visible" class
 * - Header: .reveal .reveal-d0/.d1
 * - Cards:  .card-reveal (stagger via nth-child in globals.css)
 * - Accordion: pure CSS `flex` transition (project-col class, no Framer)
 * - Card content hover: CSS .project-details transition
 * - NO Framer Motion in this file
 *
 * Responsive:
 * - Desktop: horizontal flex accordion (flex-[1] → flex-[4] on hover)
 * - Mobile: horizontal snap scroll (.projects-mobile-scroll)
 *   Each card is 80vw wide, tap to see details
 */

import { Globe, ExternalLink, ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

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
  /*
   * useInView adds "is-visible" to the section element when it enters
   * the viewport. CSS then animates .reveal and .card-reveal children.
   */
  const sectionRef = useInView<HTMLElement>();

  return (
    <section
      id="work"
      ref={sectionRef}
      className="snap-section flex flex-col justify-center
                 px-5 sm:px-8 pt-[var(--nav-h)]"
      style={{ maxWidth: "100%", width: "100%" }}
    >
      <div className="max-w-[1440px] mx-auto w-full flex flex-col
                      gap-4 md:gap-6 h-full justify-center py-4">

        {/* ── Section Header ──────────────────────────────── */}
        <div>
          <span className="reveal reveal-d0
                           block uppercase tracking-[0.22em] text-[10px]
                           text-[var(--color-on-surface-variant)] font-light mb-1">
            Selected Works 23—25
          </span>
          <h2 className="reveal reveal-d1
                         font-black tracking-[-0.04em]
                         text-[clamp(1.7rem,4vw,3rem)]
                         text-[var(--color-on-surface)]">
            Digital Archive
          </h2>
        </div>

        {/* ── Accordion (desktop) / Horizontal scroll (mobile) ── */}
        <div
          /*
           * Desktop: flex row accordion, height is clamped.
           * Mobile: overridden to .projects-mobile-scroll via globals.css
           *         which sets flex-row + overflow-x: auto + snap-x.
           */
          className="projects-mobile-scroll
                     md:flex md:flex-row md:gap-3"
          style={{
            /* Desktop height — clamped so it never overflows snap section */
            height: "clamp(0px, calc(100svh - var(--nav-h) - 9rem), 520px)",
          }}
        >
          {PROJECTS.map(proj => (
            <div
              key={proj.id}
              className="project-col card-reveal
                         flex-[1] hover:flex-[4]
                         relative overflow-hidden rounded-2xl
                         bg-[var(--color-surface-container-high)]
                         cursor-default group"
            >
              {/* Background image */}
              <img
                src={proj.img}
                alt={proj.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover
                           grayscale opacity-50 group-hover:opacity-30
                           transition-all duration-700 scale-100 group-hover:scale-105"
              />

              {/* Vignette layer 1 — base dimmer */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10
                              transition-colors duration-700 z-0" />

              {/* Vignette layer 2 — gradient anchors text */}
              <div className="absolute inset-0 z-0
                              bg-gradient-to-t from-black/95 via-black/40 to-transparent
                              opacity-80 group-hover:opacity-100
                              transition-opacity duration-700" />

              {/* ── Card content ───────────────────────────── */}
              <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between z-10">

                {/* Top row: index badge + action icons */}
                <div className="flex justify-between items-start">
                  <span className="text-white/80 bg-black/40 backdrop-blur-sm
                                   px-2.5 py-1 rounded text-[9px]
                                   uppercase tracking-[0.2em] font-medium">
                    {proj.id}
                  </span>

                  {/* Action pills — fade in on hover */}
                  <div className="flex gap-2 items-center
                                  opacity-0 translate-y-1
                                  group-hover:opacity-100 group-hover:translate-y-0
                                  transition-all duration-300 delay-100">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="w-8 h-8 rounded-full bg-white/10
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
                        className="h-8 px-3 rounded-full bg-white/10
                                   border border-white/15 flex items-center gap-1.5
                                   hover:bg-white/20 transition-colors duration-200"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-3 h-3 text-white/90" strokeWidth={2.5} />
                        <span className="text-[9px] uppercase tracking-[0.15em]
                                         text-white/90 font-medium hidden group-hover:inline">
                          Live
                        </span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Bottom: title + expandable details */}
                <div className="flex flex-col gap-3 md:gap-4">
                  <div className="flex items-end justify-between">
                    <h3 className="font-black tracking-[-0.03em] leading-tight
                                   text-base sm:text-lg md:text-xl lg:text-2xl
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

                  {/* Details — revealed via CSS .project-details on .project-col:hover */}
                  <div className="project-details hidden md:flex flex-col gap-3">
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

                  {/* Mobile tech tags — always visible */}
                  <div className="flex flex-wrap gap-1.5 md:hidden">
                    {proj.tech.slice(0, 2).map(t => (
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
          ))}
        </div>

      </div>
    </section>
  );
}