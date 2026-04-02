"use client";

/**
 * Contact — Split layout: social links + contact form.
 *
 * Animation strategy:
 * - IntersectionObserver → "is-visible" → CSS reveals
 * - Left column: .reveal with stagger delays
 * - Right form card: .reveal-fade-d2
 * - Framer Motion kept ONLY for submit button hover/tap (1 node)
 *
 * Performance:
 * - backdrop-blur REMOVED from form card → replaced with solid bg-white/[0.04]
 * - backdrop-blur REMOVED from mobile drawer (done in NavBar)
 *
 * Responsive:
 * - Mobile: single column, form stacks below socials
 * - md+: two-column grid
 * - Footer: flex-col on mobile, flex-row on md+
 */

import { motion } from "framer-motion";
import { useAudio } from "@/context/AudioContext";
import { useInView } from "@/hooks/useInView";
import { useRef } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

const SOCIALS = [
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/thedhruva/" },
  { label: "GitHub",    href: "https://github.com/thedhruva"           },
  { label: "Instagram", href: "https://www.instagram.com/thedhruva07/" },
];

/* ── Reusable form field ───────────────────────────────────── */
function Field({
  label, name, type = "text", placeholder, rows, onFocusSfx,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  rows?: number;
  onFocusSfx: () => void;
}) {
  const base =
    `w-full bg-transparent border-b border-white/15
     focus:border-white/60 outline-none
     transition-colors duration-300
     py-2.5 text-white/90 text-sm font-light
     placeholder:text-white/20 caret-white`;

  return (
    <div className="flex flex-col gap-1.5">
      <label className="uppercase tracking-[0.2em] text-[10px]
                        text-[var(--color-outline-variant)] font-light">
        {label}
      </label>
      {rows
        ? <textarea name={name} rows={rows} placeholder={placeholder}
                    onFocus={onFocusSfx} className={`${base} resize-none`} required />
        : <input    name={name} type={type} placeholder={placeholder}
                    onFocus={onFocusSfx} className={base} required />
      }
    </div>
  );
}

export default function Contact() {
  const { play }   = useAudio();
  const formRef    = useRef<HTMLFormElement | null>(null);
  const sectionRef = useInView<HTMLElement>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    play("submitSuccess");
    window.setTimeout(() => formRef.current?.submit(), 250);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="snap-section flex flex-col
                 bg-[var(--color-inverse-surface)]
                 px-5 sm:px-8 pt-[var(--nav-h)]"
      style={{ transform: "translateZ(0)" }}
    >
      <div className="max-w-[1440px] mx-auto w-full flex flex-col flex-1
                      py-6 md:py-8 lg:py-10 h-full">

        {/* ── Main split row ─────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2
                        gap-8 md:gap-12 lg:gap-16 flex-1 content-center">

          {/* ── Left: headline + socials ───────────────────── */}
          <div className="flex flex-col justify-between gap-8 md:gap-10">

            <div className="flex flex-col gap-4 md:gap-5">
              <span className="reveal reveal-d0
                               uppercase tracking-[0.22em] text-[10px]
                               text-[var(--color-outline-variant)] font-light">
                Inquiries
              </span>
              <h2 className="reveal reveal-d1
                             font-black tracking-[-0.045em] leading-[1.05]
                             text-[clamp(2rem,5vw,4rem)]
                             text-[var(--color-inverse-primary)]">
                Let's build<br />the future.
              </h2>
            </div>

            <div className="reveal reveal-d2 flex flex-col gap-4 md:gap-5">
              <div className="flex gap-6 sm:gap-8 flex-wrap">
                {SOCIALS.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => play("buttonHover")}
                    onClick={() => play("buttonClick")}
                    className="underline-reveal uppercase tracking-[0.15em] text-[11px]
                               text-[var(--color-outline-variant)]
                               hover:text-[var(--color-inverse-primary)]
                               transition-colors duration-300"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
              <p className="uppercase tracking-[0.18em] text-[10px]
                            text-[var(--color-outline-variant)]/50">
                Available for select commissions 2026
              </p>
            </div>
          </div>

          {/* ── Right: form card ───────────────────────────── */}
          {/*
           * backdrop-blur REMOVED — replaced with opaque bg.
           * Was: bg-white/[0.025] backdrop-blur-md
           * Now: bg-white/[0.04] (solid enough, zero GPU cost)
           */}
          <div className="reveal-fade reveal-fade-d2
                          bg-white/[0.04] border border-white/[0.07]
                          rounded-2xl p-6 sm:p-7 md:p-8 lg:p-9">
            <form
              ref={formRef}
              action="https://formspree.io/f/mnngdlzv"
              method="POST"
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 md:gap-6"
            >
              <Field label="Name"          name="name"
                     placeholder="Your name"
                     onFocusSfx={() => play("inputFocus")} />
              <Field label="Email Address" name="email" type="email"
                     placeholder="hello@example.com"
                     onFocusSfx={() => play("inputFocus")} />
              <Field label="Message"       name="message"
                     placeholder="How can we collaborate?" rows={3}
                     onFocusSfx={() => play("inputFocus")} />

              {/* Submit — keep Framer for tactile hover/tap feedback */}
              <motion.button
                type="submit"
                onMouseEnter={() => play("buttonHover")}
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                transition={{ duration: 0.28, ease: EASE }}
                className="mt-1 py-3.5 rounded-full font-semibold uppercase
                           tracking-[0.2em] text-[11px]
                           bg-[var(--color-inverse-primary)]
                           text-[var(--color-inverse-surface)]
                           hover:opacity-90 transition-opacity duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>

        {/* ── Footer — pinned to bottom via mt-auto ───────── */}
        <footer className="mt-auto pt-5 md:pt-6 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <span className="uppercase tracking-[0.18em] text-[9px]
                             font-light text-[var(--color-outline-variant)]/50">
              © 2026 THE DHRUVA — CURATED EXPERIENCE
            </span>
            <div className="flex gap-6 sm:gap-8">
              {["Archive", "Back to top"].map(lbl => (
                <a
                  key={lbl}
                  href={lbl === "Back to top" ? "#home" : "#"}
                  onMouseEnter={() => play("buttonHover")}
                  onClick={() => play("buttonClick")}
                  className="uppercase tracking-[0.18em] text-[9px] font-light
                             text-[var(--color-outline-variant)]/50
                             hover:text-[var(--color-inverse-primary)]
                             transition-colors duration-500"
                >
                  {lbl}
                </a>
              ))}
            </div>
          </div>
        </footer>

      </div>
    </section>
  );
}