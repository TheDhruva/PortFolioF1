"use client";

import { motion } from "framer-motion";
import { Hexagon, Cpu, Database, Play } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

// 1. Data Restructured for Scannability and Comprehensive Custom Icons
const SKILLS = [
  {
    id: 1,
    icon: Hexagon,
    title: "Frameworks",
    tags: ["Next.js 14/15", "React 19", "Node.js", "TailwindCSS", "FastAPI", "Streamlit"],
    iconPaths: [
      "/skills/nextjs.svg", 
      "/skills/react.svg", 
      "/skills/nodejs.svg", 
      "/skills/tailwind.svg", 
      "/skills/fastapi.svg", 
      "/skills/streamlit.svg"
    ],
    col: "md:col-span-7",
    row: "md:row-span-1",
  },
  {
    id: 2,
    icon: Cpu,
    title: "Core Logic & AI",
    tags: ["Python", "TypeScript", "C++ (DSA)", "LangChain", "OpenAI/Gemini API", "RAG", "XGBoost", "Scikit-learn", "Pandas"],
    iconPaths: [
      "/skills/python.svg", 
      "/skills/typescript.svg", 
      "/skills/cplusplus.svg", 
      "/skills/openai.svg", 
      "/skills/huggingface.svg", 
      "/skills/pandas.svg", 
      "/skills/scikitlearn.svg"
    ],
    col: "md:col-span-5",
    row: "md:row-span-2",
    large: true,
  },
  {
    id: 3,
    icon: Database,
    title: "Infrastructure",
    tags: ["AWS", "Vercel", "Docker", "PostgreSQL", "MongoDB", "Pinecone/Chroma", "Convex", "Clerk"],
    iconPaths: [
      "/skills/aws.svg", 
      "/skills/docker.svg", 
      "/skills/postgres.svg", 
      "/skills/mongodb.svg", 
      "/skills/vercel.svg", 
      "/skills/convex.svg", 
      "/skills/clerk.svg", 
    ],
    col: "md:col-span-4",
    row: "md:row-span-1",
  },
  {
    id: 4,
    icon: Play,
    title: "Digital Media",
    tags: ["YouTube Strategy", "Video Production", "Audience Building (10k+ Views)"],
    iconPaths: [
      "/skills/youtube.svg", 
      "/skills/premiere.svg"
    ],
    col: "md:col-span-3",
    row: "md:row-span-1",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="snap-section flex items-center
                 bg-[var(--color-inverse-surface)] text-[var(--color-inverse-primary)]
                 min-h-[calc(100svh-var(--nav-h))] scroll-mt-[var(--nav-h)]
                 px-8 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto w-full py-10 md:py-14">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: EASE }}
          className="flex flex-col gap-3 mb-10 md:mb-12"
        >
          <span className="uppercase tracking-[0.22em] text-[10px]
                            text-[var(--color-outline-variant)] font-light">
            Technical Arsenal
          </span>
          <h2 className="font-black tracking-[-0.04em] text-[clamp(2rem,5vw,3.5rem)]
                         text-[var(--color-inverse-primary)]">
            Capabilities
          </h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-5
                     h-auto md:h-[min(54vh,560px)]"
        >
          {SKILLS.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.id}
                variants={cardVariants}
                className={`${skill.col} ${skill.row} relative group
                            overflow-hidden rounded-2xl cursor-default flex flex-col`}
              >
                <div
                  className="absolute inset-0 bg-white/[0.025]
                              group-hover:bg-white/[0.055]
                              transition-colors duration-500 rounded-2xl"
                />
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ boxShadow: "inset 0 0 0px rgba(255,255,255,0)" }}
                  whileHover={{ boxShadow: "inset 0 0 50px rgba(255,255,255,0.07)" }}
                  transition={{ duration: 0.4, ease: EASE }}
                />

                {/* Content Container */}
                <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between gap-6">
                  
                  {/* Top Section: Lucide Icon & Custom Folder Icons */}
                  <div className="flex justify-between items-start w-full">
                    <motion.div
                      whileHover={{ scale: 1.12, rotate: 6 }}
                      transition={{ duration: 0.35, ease: EASE }}
                    >
                      <Icon
                        className="w-10 h-10 md:w-12 md:h-12 text-white/25
                                   group-hover:text-white/80 transition-colors duration-500"
                        strokeWidth={1}
                      />
                    </motion.div>

                    {/* 2. Refactored Icon Wrapper: Added flex-wrap, justify-end, and max-w to handle overflow */}
                    <div className="flex flex-wrap justify-end gap-2.5 items-center opacity-60 group-hover:opacity-100 transition-opacity duration-300 max-w-[70%]">
                      {skill.iconPaths.map((path, index) => (
                        <img 
                          key={index} 
                          src={path} 
                          alt="tech-icon" 
                          className="w-6 h-6 md:w-7 md:h-7 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                        />
                      ))}
                    </div>
                  </div>

                  {/* Bottom Section: Title & Skill Pills */}
                  <div className="flex flex-col gap-4">
                    <h4
                      className={`font-bold tracking-tight text-[var(--color-inverse-primary)]
                                  ${skill.large ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}
                    >
                      {skill.title}
                    </h4>
                    
                    {/* 3. Skill Tags mapped dynamically */}
                    <div className="flex flex-wrap gap-2">
                      {skill.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 text-[11px] md:text-xs font-medium tracking-wide
                                     bg-white/5 border border-white/10 rounded-full
                                     text-[var(--color-outline-variant)] group-hover:text-white/90 
                                     transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-[1px]
                              bg-gradient-to-r from-white/60 via-white/30 to-transparent"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.55, ease: EASE }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}