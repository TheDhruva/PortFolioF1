"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const SOCIALS = [
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/thedhruva/" },
  { label: "GitHub",    href: "https://github.com/thedhruva" },
  { label: "Instagram", href: "https://www.instagram.com/thedhruva07/" },
];

/* Reusable labelled input field */
function Field({
  label, name, type = "text", placeholder, rows,
}: {
  label: string; name: string; type?: string; placeholder: string; rows?: number;
}) {
  const base = `w-full bg-transparent border-b border-white/15
                focus:border-white/60 outline-none transition-colors duration-300
                py-2.5 text-white/90 text-sm font-light
                placeholder:text-white/20 caret-white`;
  return (
    <div className="flex flex-col gap-1.5">
      <label className="uppercase tracking-[0.2em] text-[10px]
                        text-[var(--color-outline-variant)] font-light">
        {label}
      </label>
      {rows
        ? <textarea name={name} rows={rows} placeholder={placeholder} className={`${base} resize-none`} required />
        : <input    name={name} type={type}  placeholder={placeholder} className={base} required />
      }
    </div>
  );
}

export default function Contact() {
  return (
    /*
     * snap-section enforces h-[100svh] via globals.css.
     * flex-col lets us push the footer to the bottom with mt-auto.
     * pt-[var(--nav-h)] clears the fixed navbar.
     */
    <section
      id="contact"
      className="snap-section flex flex-col
                 bg-[var(--color-inverse-surface)]
                 px-8 pt-[var(--nav-h)]"
    >
      {/*
       * Inner wrapper fills all remaining height after nav clearance.
       * flex-col + justify-between = content block centred, footer pinned bottom.
       */}
      <div className="max-w-[1440px] mx-auto w-full flex flex-col flex-1
                      py-8 md:py-10 h-full">

        {/* ── Main split row (fills available space) ────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 flex-1 content-center">

          {/* Left: headline + socials */}
          <div className="flex flex-col justify-between gap-10">

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: EASE }}
              className="flex flex-col gap-5"
            >
              <span className="uppercase tracking-[0.22em] text-[10px]
                               text-[var(--color-outline-variant)] font-light">
                Inquiries
              </span>
              <h2 className="font-black tracking-[-0.045em] leading-[1.05]
                             text-[clamp(2.2rem,5vw,4rem)]
                             text-[var(--color-inverse-primary)]">
                Let's build<br />the future.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-col gap-5"
            >
              <div className="flex gap-8 flex-wrap">
                {SOCIALS.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
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
            </motion.div>
          </div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="bg-white/[0.025] backdrop-blur-md border border-white/[0.06]
                       rounded-2xl p-7 md:p-9"
          >
            <form
              action="https://formspree.io/f/mnngdlzv"
              method="POST"
              className="flex flex-col gap-6"
            >
              <Field label="Name"          name="name"    placeholder="Your name" />
              <Field label="Email Address" name="email"   type="email" placeholder="hello@example.com" />
              <Field label="Message"       name="message" placeholder="How can we collaborate?" rows={3} />

              <motion.button
                type="submit"
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
          </motion.div>
        </div>

        {/* ── Footer — pinned to the bottom of the section ── */}
        {/*
         * mt-auto pushes the footer down to sit flush with the
         * bottom of the 100svh section. No extra empty space above or below.
         */}
        <footer className="mt-auto pt-6 border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <span className="uppercase tracking-[0.18em] text-[9px]
                             font-light text-[var(--color-outline-variant)]/50">
              © 2026 THE DHRUVA — CURATED EXPERIENCE
            </span>
            <div className="flex gap-8">
              {["Archive", "Back to top"].map(lbl => (
                <a
                  key={lbl}
                  href={lbl === "Back to top" ? "#home" : "#"}
                  className="uppercase tracking-[0.18em] text-[9px] font-light
                             text-[var(--color-outline-variant)]/50
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