"use client";

/**
 * Skills — Bento grid of 4 skill categories.
 *
 * Animation strategy:
 * - ALL Framer Motion removed from this component
 * - Entrance: IntersectionObserver → "is-visible" → .card-reveal CSS stagger
 * - Card hover glow: .skill-inset-glow (CSS box-shadow transition)
 * - Icon hover: .skill-icon-wrap (CSS transform)
 * - Bottom shimmer: .skill-shimmer (CSS scaleX transition)
 * - Background tint: plain CSS group-hover via Tailwind
 *
 * Responsive:
 * - Mobile/sm: 2×2 grid (auto placement, no explicit grid-area)
 * - md+: 12-col / 2-row bento with explicit [grid-area] placement
 */

import { Hexagon, Cpu, Database, Play } from "lucide-react";
import { useAudio } from "@/context/AudioContext";
import { useInView } from "@/hooks/useInView";

const SKILLS = [
  {
    id: 1,
    icon: Hexagon,
    title: "Frameworks",
    tags: ["Next.js", "React 19", "Node.js", "TailwindCSS", "FastAPI", "Streamlit"],
    icons: [
      { path: "/Skills/nextjs.svg",    label: "Next.js"   },
      { path: "/Skills/react.svg",     label: "React"     },
      { path: "/Skills/nodejs.svg",    label: "Node.js"   },
      { path: "/Skills/tailwind.svg",  label: "Tailwind"  },
      { path: "/Skills/fastapi.svg",   label: "FastAPI"   },
      { path: "/Skills/streamlit.svg", label: "Streamlit" },
    ],
    gridArea: "md:[grid-area:1/1/2/8]",
    cols: 6,
    iconSize: "w-7 h-7 sm:w-8 sm:h-8",
    large: false,
  },
  {
    id: 2,
    icon: Cpu,
    title: "Core Logic & AI",
    tags: ["Python", "TypeScript", "C++ (DSA)", "LangChain", "OpenAI API", "RAG", "XGBoost", "Scikit-learn"],
    icons: [
      { path: "/Skills/python.svg",      label: "Python"      },
      { path: "/Skills/typescript.svg",  label: "TypeScript"  },
      { path: "/Skills/cplusplus.svg",   label: "C++"         },
      { path: "/Skills/openai.svg",      label: "OpenAI"      },
      { path: "/Skills/huggingface.svg", label: "HuggingFace" },
      { path: "/Skills/pandas.svg",      label: "Pandas"      },
      { path: "/Skills/scikitlearn.svg", label: "Sklearn"     },
    ],
    gridArea: "md:[grid-area:1/8/3/13]",
    cols: 3,
    iconSize: "w-8 h-8 sm:w-9 sm:h-9",
    large: true,
  },
  {
    id: 3,
    icon: Database,
    title: "Infrastructure",
    tags: ["AWS", "Vercel", "Docker", "PostgreSQL", "MongoDB", "Convex", "Clerk"],
    icons: [
      { path: "/Skills/aws.svg",      label: "AWS"        },
      { path: "/Skills/docker.svg",   label: "Docker"     },
      { path: "/Skills/postgres.svg", label: "PostgreSQL" },
      { path: "/Skills/mongodb.svg",  label: "MongoDB"    },
      { path: "/Skills/vercel.svg",   label: "Vercel"     },
      { path: "/Skills/convex.svg",   label: "Convex"     },
      { path: "/Skills/clerk.svg",    label: "Clerk"      },
    ],
    gridArea: "md:[grid-area:2/1/3/5]",
    cols: 4,
    iconSize: "w-6 h-6 sm:w-7 sm:h-7",
    large: false,
  },
  {
    id: 4,
    icon: Play,
    title: "Digital Media",
    tags: ["YouTube Strategy", "Video Production", "10k+ Views"],
    icons: [
      { path: "/Skills/youtube.svg",  label: "YouTube"  },
      { path: "/Skills/premiere.svg", label: "Premiere" },
    ],
    gridArea: "md:[grid-area:2/5/3/8]",
    cols: 2,
    iconSize: "w-8 h-8 sm:w-10 sm:h-10",
    large: false,
  },
];

export default function Skills() {
  const { play }     = useAudio();
  const sectionRef   = useInView<HTMLElement>();

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="snap-section flex flex-col justify-center
                 bg-[var(--color-inverse-surface)]
                 px-5 sm:px-8 pt-[var(--nav-h)]"
      style={{ transform: "translateZ(0)" }}
    >
      <div className="max-w-[1440px] mx-auto w-full flex flex-col h-full pb-4 md:pb-6">

        {/* ── Section Header ──────────────────────────────── */}
        <div className="flex flex-col gap-1.5 mb-4 md:mb-5 mt-3 md:mt-4">
          <span className="reveal reveal-d0
                           uppercase tracking-[0.22em] text-[10px]
                           text-[var(--color-outline-variant)] font-light">
            Technical Arsenal
          </span>
          <h2 className="reveal reveal-d1
                         font-black tracking-[-0.04em]
                         text-[clamp(1.7rem,4vw,3rem)]
                         text-[var(--color-inverse-primary)]">
            Capabilities
          </h2>
        </div>

        {/* ── Bento Grid ──────────────────────────────────── */}
        <div
          className="grid grid-cols-2 md:grid-cols-12 md:grid-rows-2
                     gap-2 md:gap-3 flex-1"
          style={{ maxHeight: "calc(100svh - var(--nav-h) - 8rem)" }}
        >
          {SKILLS.map(skill => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.id}
                onMouseEnter={() => play("cursorHover")}
                className={`
                  ${skill.gridArea}
                  card-reveal
                  relative group overflow-hidden rounded-xl md:rounded-2xl
                  flex flex-col min-h-[120px] md:min-h-0
                  cursor-default
                `}
              >
                {/* Card background tint */}
                <div className="absolute inset-0 rounded-xl md:rounded-2xl
                                bg-white/[0.035] group-hover:bg-white/[0.065]
                                transition-colors duration-500" />

                {/* Inset glow — CSS-only, see skill-inset-glow in globals.css */}
                <div className="skill-inset-glow absolute inset-0 rounded-xl md:rounded-2xl pointer-events-none" />

                {/* ── Card body ───────────────────────────── */}
                <div className="relative z-10 p-4 md:p-5 lg:p-6
                                flex flex-col justify-between h-full gap-2 md:gap-3">

                  {/* Header row: icon + title */}
                  <div className="flex justify-between items-start">
                    {/* skill-icon-wrap: CSS rotate/scale on hover */}
                    <div className="skill-icon-wrap">
                      <Icon
                        className={`text-white/20 group-hover:text-white/60
                                    transition-colors duration-500
                                    ${skill.large ? "w-8 h-8 md:w-10 md:h-10" : "w-6 h-6 md:w-8 md:h-8"}`}
                        strokeWidth={1}
                      />
                    </div>
                    <h4 className={`font-bold tracking-tight leading-tight
                                    text-right
                                    text-[var(--color-inverse-primary)]
                                    ${skill.large
                                      ? "text-sm md:text-base lg:text-xl"
                                      : "text-xs md:text-sm lg:text-lg"
                                    }`}>
                      {skill.title}
                    </h4>
                  </div>

                  {/* Icon grid */}
                  <div
                    className="grid gap-x-1.5 md:gap-x-2 gap-y-2 md:gap-y-3
                                flex-1 content-center py-0.5"
                    style={{
                      gridTemplateColumns: `repeat(${
                        /* On mobile, cap at 4 columns for readability */
                        Math.min(skill.cols, 4)
                      }, minmax(0, 1fr))`
                    }}
                  >
                    {skill.icons.map((ic, i) => (
                      <div key={i} className="flex flex-col items-center gap-1 group/icon">
                        <div className="p-1.5 md:p-2 rounded-lg md:rounded-xl bg-white/[0.04]
                                        group-hover/icon:bg-white/[0.09]
                                        transition-colors duration-300">
                          <img
                            src={ic.path}
                            alt={ic.label}
                            loading="lazy"
                            decoding="async"
                            className={`${skill.iconSize} object-contain
                                        grayscale invert opacity-60
                                        group-hover:grayscale-0 group-hover:invert-0
                                        group-hover:opacity-100
                                        transition-all duration-400`}
                            onError={e => {
                              (e.currentTarget as HTMLImageElement)
                                .parentElement!.style.display = "none";
                            }}
                          />
                        </div>
                        <span className="text-[7px] md:text-[8px] uppercase tracking-[0.1em] md:tracking-[0.12em]
                                         text-white/30 group-hover:text-white/60
                                         transition-colors duration-300
                                         text-center leading-none hidden sm:block">
                          {ic.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tag pills */}
                  <div className="flex flex-wrap gap-1">
                    {(skill.large ? skill.tags : skill.tags.slice(0, 3)).map((tag, i) => (
                      <span
                        key={i}
                        className="px-1.5 md:px-2 py-0.5 text-[8px] md:text-[9px] font-medium
                                   tracking-wide rounded-full
                                   bg-white/[0.04] border border-white/[0.07]
                                   text-[var(--color-outline-variant)]
                                   group-hover:text-white/70 group-hover:border-white/12
                                   transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom shimmer — CSS only, see .skill-shimmer in globals.css */}
                <div className="skill-shimmer absolute bottom-0 left-0 h-[1px] w-full
                                bg-gradient-to-r from-white/50 via-white/20 to-transparent" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
