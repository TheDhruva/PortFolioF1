"use client";

import { motion } from "framer-motion";
import { Hexagon, Cpu, Database, Play } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const SKILLS = [
  {
    id: 1,
    icon: Hexagon,
    title: "Frameworks",
    tags: ["Next.js", "React 19", "Node.js", "TailwindCSS", "FastAPI", "Streamlit"],
    iconPaths: [
      "/skills/nextjs.svg",
      "/skills/react.svg",
      "/skills/nodejs.svg",
      "/skills/tailwind.svg",
      "/skills/fastapi.svg",
      "/skills/streamlit.svg",
    ],
    /*
     * Explicit grid placement to guarantee the 2-row bento layout:
     * Row 1: Card 1 (col 1-7) + Card 2 (col 8-12, rowspan 2)
     * Row 2: Card 3 (col 1-4) + Card 4 (col 5-7) + Card 2 continues
     */
    gridArea: "md:[grid-area:1/1/2/8]",
  },
  {
    id: 2,
    icon: Cpu,
    title: "Core Logic & AI",
    tags: ["Python", "TypeScript", "C++ (DSA)", "LangChain", "OpenAI API", "RAG", "XGBoost", "Scikit-learn"],
    iconPaths: [
      "/skills/python.svg",
      "/skills/typescript.svg",
      "/skills/cplusplus.svg",
      "/skills/openai.svg",
      "/skills/huggingface.svg",
      "/skills/pandas.svg",
      "/skills/scikitlearn.svg",
    ],
    gridArea: "md:[grid-area:1/8/3/13]",
    large: true,
  },
  {
    id: 3,
    icon: Database,
    title: "Infrastructure",
    tags: ["AWS", "Vercel", "Docker", "PostgreSQL", "MongoDB", "Convex", "Clerk"],
    iconPaths: [
      "/skills/aws.svg",
      "/skills/docker.svg",
      "/skills/postgres.svg",
      "/skills/mongodb.svg",
      "/skills/vercel.svg",
      "/skills/convex.svg",
      "/skills/clerk.svg",
    ],
    gridArea: "md:[grid-area:2/1/3/5]",
  },
  {
    id: 4,
    icon: Play,
    title: "Digital Media",
    tags: ["YouTube Strategy", "Video Production", "10k+ Views"],
    iconPaths: [
      "/skills/youtube.svg",
      "/skills/premiere.svg",
    ],
    gridArea: "md:[grid-area:2/5/3/8]",
  },
];

const containerVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      /*
       * snap-section = h-[100svh] (set in globals.css).
       * flex-col + justify-center vertically centres the inner block.
       * pt-[var(--nav-h)] pushes content below the fixed nav.
       */
      className="snap-section flex flex-col justify-center
                 bg-[var(--color-inverse-surface)]
                 px-8 pt-[var(--nav-h)]"
    >
      <div className="max-w-[1440px] mx-auto w-full flex flex-col h-full pb-6">

        {/* ── Section Header ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="flex flex-col gap-2 mb-6 mt-4"
        >
          <span className="uppercase tracking-[0.22em] text-[10px]
                           text-[var(--color-outline-variant)] font-light">
            Technical Arsenal
          </span>
          <h2 className="font-black tracking-[-0.04em] text-[clamp(1.8rem,4vw,3rem)]
                         text-[var(--color-inverse-primary)]">
            Capabilities
          </h2>
        </motion.div>

        {/* ── Bento Grid ──────────────────────────────────── */}
        {/*
         * 12-column, 2-row explicit grid.
         * Each card uses [grid-area] for deterministic placement.
         * Height is computed to fill the space below nav + header
         * without overflowing the 100svh section boundary.
         */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 flex-1
                     h-auto"
          style={{ maxHeight: "calc(100svh - var(--nav-h) - 9rem)" }}
        >
          {SKILLS.map(skill => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.id}
                variants={cardVariants}
                className={`
                  ${skill.gridArea}
                  relative group overflow-hidden rounded-2xl
                  flex flex-col min-h-[140px]
                `}
              >
                {/* Tonal background — no borders (design-system rule) */}
                <div className="absolute inset-0 rounded-2xl
                                bg-white/[0.03] group-hover:bg-white/[0.06]
                                transition-colors duration-500" />

                {/* Inset glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ boxShadow: "inset 0 0 0px rgba(255,255,255,0)" }}
                  whileHover={{ boxShadow: "inset 0 0 60px rgba(255,255,255,0.06)" }}
                  transition={{ duration: 0.4, ease: EASE }}
                />

                {/* ── Content ─────────────────────────────── */}
                <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between h-full gap-4">

                  {/* Top: Lucide icon + tech icons */}
                  <div className="flex justify-between items-start gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="shrink-0"
                    >
                      <Icon
                        className={`text-white/20 group-hover:text-white/70
                                   transition-colors duration-500
                                   ${skill.large ? "w-11 h-11" : "w-9 h-9"}`}
                        strokeWidth={1}
                      />
                    </motion.div>

                    {/*
                     * Tech icon strip — limited to 5 shown so they don't
                     * overflow small cards. `onError` hides any missing SVGs
                     * gracefully without breaking the layout.
                     */}
                    <div className="flex flex-wrap justify-end gap-2 items-center
                                    opacity-50 group-hover:opacity-100
                                    transition-opacity duration-400
                                    max-w-[60%]">
                      {skill.iconPaths.slice(0, 5).map((path, i) => (
                        <img
                          key={i}
                          src={path}
                          alt=""
                          aria-hidden="true"
                          className="w-5 h-5 object-contain grayscale invert
                                     group-hover:grayscale-0 group-hover:invert-0
                                     transition-all duration-400"
                          onError={e => {
                            (e.currentTarget as HTMLImageElement).style.display = "none";
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Bottom: title + pill tags */}
                  <div className="flex flex-col gap-3">
                    <h4 className={`font-bold tracking-tight leading-tight
                                    text-[var(--color-inverse-primary)]
                                    ${skill.large ? "text-xl md:text-2xl" : "text-lg md:text-xl"}`}>
                      {skill.title}
                    </h4>

                    {/* Skill pills — only show up to 5 in smaller cards to avoid overflow */}
                    <div className="flex flex-wrap gap-1.5">
                      {(skill.large ? skill.tags : skill.tags.slice(0, 5)).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 text-[10px] md:text-[11px] font-medium
                                     tracking-wide rounded-full
                                     bg-white/[0.05] border border-white/[0.08]
                                     text-[var(--color-outline-variant)]
                                     group-hover:text-white/80 group-hover:border-white/15
                                     transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom shimmer line on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[1px] w-full
                              bg-gradient-to-r from-white/50 via-white/20 to-transparent"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5, ease: EASE }}
                />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}