"use client";

import { motion } from "framer-motion";
// import { Github, Linkedin, Instagram } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

// 1. Swapped text labels for Lucide icons
const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/thedhruva/", target: "_blank" as const },
  { label: "GitHub", href: "https://github.com/thedhruva", target: "_blank" as const },
  { label: "Instagram", href: "https://www.instagram.com/thedhruva07/", target: "_blank" as const },
];

/* Reusable floating-label input row - Added 'name' prop for data serialization */
function Field({
  label, name, type = "text", placeholder, rows,
}: {
  label: string; name: string; type?: string; placeholder: string; rows?: number;
}) {
  const base = `w-full bg-transparent border-b border-white/15
                focus:border-white/70 outline-none transition-colors duration-300
                py-3 text-white/90 text-base font-light placeholder:text-white/20
                caret-white`;
  return (
    <div className="flex flex-col gap-2">
      <label className="uppercase tracking-[0.2em] text-[10px]
                        text-[var(--color-outline-variant)] font-light">
        {label}
      </label>
      {rows ? (
        <textarea name={name} rows={rows} placeholder={placeholder} className={`${base} resize-none`} required />
      ) : (
        <input name={name} type={type} placeholder={placeholder} className={base} required />
      )}
    </div>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      // 2. Refactored to flex-col to control vertical height distribution
      className="snap-section flex flex-col
                 bg-[var(--color-inverse-surface)]
                 min-h-[calc(100svh-var(--nav-h))] scroll-mt-[var(--nav-h)]
                 px-8 overflow-hidden"
    >
      {/* 3. Added flex-grow and justify-between to push footer to the bottom */}
      <div className="max-w-[1440px] mx-auto w-full flex flex-col flex-grow justify-between pt-10 md:pt-14 pb-6">

        {/* Split row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 mt-auto mb-14 md:mb-16">

          {/* ── Left: headline + socials ──────────────────────── */}
          <div className="flex flex-col justify-between gap-14">

            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: EASE }}
              className="flex flex-col gap-6"
            >
              <span className="uppercase tracking-[0.22em] text-[10px]
                               text-[var(--color-outline-variant)] font-light">
                Inquiries
              </span>
              <h2 className="font-black tracking-[-0.045em] leading-[1.05]
                             text-[clamp(2.5rem,5.5vw,4.5rem)]
                             text-[var(--color-inverse-primary)]">
                Let's build<br />the future.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.35 }}
              className="flex flex-col gap-6"
            >
              <div className="flex gap-8 items-center">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.target}
                    rel="noopener noreferrer"
                    className="text-[11px] md:text-xs uppercase tracking-[0.15em]
                               text-[var(--color-outline-variant)]
                               hover:text-[var(--color-inverse-primary)]
                               hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
              <p className="uppercase tracking-[0.18em] text-[10px]
                            text-[var(--color-outline-variant)]/60">
                Available for select commissions 2026
              </p>
            </motion.div>
          </div>

          {/* ── Right: form ──────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="bg-white/[0.025] backdrop-blur-md border border-white/[0.06]
                       rounded-2xl p-8 md:p-10"
          >
            {/* 4. Formspree Integration. Replace YOUR_FORM_ID with the ID from formspree.io */}
            <form 
              action="https://formspree.io/f/mnngdlzv" 
              method="POST" 
              className="flex flex-col gap-8"
            >
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email Address" name="email" type="email" placeholder="hello@example.com" />
              <Field label="Message" name="message" placeholder="How can we collaborate?" rows={3} />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                transition={{ duration: 0.28, ease: EASE }}
                className="mt-2 py-4 rounded-full font-semibold uppercase
                           tracking-[0.2em] text-[11px]
                           bg-[var(--color-inverse-primary)]
                           text-[var(--color-inverse-surface)]"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* ── Slim footer ──────────────────────────────────────── */}
        <footer className="pt-8 border-t border-white/[0.06] mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="uppercase tracking-[0.18em] text-[9px]
                             font-light text-[var(--color-outline-variant)]/60">
              © 2026 THE DHRUVA — CURATED EXPERIENCE
            </span>
            <div className="flex gap-8">
              {["Archive", "Back to top"].map(lbl => (
                <a
                  key={lbl}
                  href={lbl === "Back to top" ? "#home" : "#"}
                  className="uppercase tracking-[0.18em] text-[9px] font-light
                             text-[var(--color-outline-variant)]/60
                             hover:text-[var(--color-inverse-primary)] transition-colors duration-500"
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