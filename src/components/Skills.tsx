"use client";

import { motion } from "framer-motion";
import { Hexagon, Cpu, Database, Video } from "lucide-react";

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const skillCards = [
    {
      id: 1,
      icon: Hexagon,
      title: "Frameworks",
      desc: "React, Next.js, Vue, Tailwind CSS, Framer Motion.",
      colSpan: "md:col-span-7",
      rowSpan: "md:row-span-1"
    },
    {
      id: 2,
      icon: Cpu,
      title: "Core Logic & AI",
      desc: "Python, Data Structures & Algorithms (DSA), LLM Orchestration, PyTorch, Generative pipelines.",
      colSpan: "md:col-span-5",
      rowSpan: "md:row-span-2"
    },
    {
      id: 3,
      icon: Database,
      title: "Infrastructure",
      desc: "AWS, Vercel, Docker, PostgreSQL.",
      colSpan: "md:col-span-4",
      rowSpan: "md:row-span-1"
    },
    {
      id: 4,
      icon: Video,
      title: "Digital Media",
      desc: "YouTube content strategy, video production, audience building.",
      colSpan: "md:col-span-3",
      rowSpan: "md:row-span-1"
    }
  ];

  return (
    <section id="skills" className="bg-inverse-surface text-inverse-primary px-8 min-h-[calc(100svh-var(--nav-h))] md:h-[calc(100svh-var(--nav-h))] scroll-mt-[var(--nav-h)] snap-start overflow-hidden flex items-center">
      <div className="max-w-[1440px] mx-auto w-full py-8 md:py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 mb-10 md:mb-12"
        >
          <span className="font-label uppercase tracking-widest text-[10px] text-outline-variant">
            Technical Arsenal
          </span>
          <h2 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-inverse-primary">
            Capabilities
          </h2>
        </motion.div>

        {/* Bento Grid - NO BORDERS, pure tonal separation */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6 h-auto md:h-[min(52vh,540px)]"
        >
          {skillCards.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.id}
                variants={item}
                className={`${skill.colSpan} ${skill.rowSpan} relative group overflow-hidden rounded-xl`}
              >
                {/* Tonal Background - NO BORDER */}
                <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-white/[0.06] transition-colors duration-500 -z-10" />

                {/* Ghost Border on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none -z-10"
                  animate={{
                    boxShadow: "inset 0 0 0px rgba(255,255,255,0)"
                  }}
                  whileHover={{
                    boxShadow: "inset 0 0 40px rgba(255,255,255,0.08)"
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Content */}
                <div className="p-10 h-full flex flex-col justify-between relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-auto"
                  >
                    <Icon
                      className="w-14 h-14 text-white/30 group-hover:text-white transition-colors duration-500 font-extralight"
                      strokeWidth={1}
                    />
                  </motion.div>

                  {/* Text Content */}
                  <div className="flex flex-col gap-3">
                    <motion.h4
                      className="font-headline font-medium tracking-tight text-inverse-primary"
                      animate={{ fontSize: ["24px", "24px", "24px"] }}
                    >
                      {skill.title === "Core Logic & AI" ? (
                        <span className="text-2xl md:text-3xl">{skill.title}</span>
                      ) : (
                        <span className="text-xl md:text-2xl">{skill.title}</span>
                      )}
                    </motion.h4>
                    <motion.p
                      className="text-outline-variant text-sm leading-relaxed max-w-md"
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {skill.desc}
                    </motion.p>
                  </div>
                </div>

                {/* Bottom Accent Line on Hover */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-inverse-primary via-inverse-primary to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{ originX: 0 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}