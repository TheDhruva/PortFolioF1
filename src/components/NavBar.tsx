"use client";

import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const EASE  = [0.16, 1, 0.3, 1] as const;
const ITEMS = [
  { label: "Work",    href: "#work"    },
  { label: "Skills",  href: "#skills"  },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="fixed top-0 inset-x-0 h-[var(--nav-h)] z-40
                   bg-[var(--color-surface)]/90 backdrop-blur-[20px]
                   ghost-shadow"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <div className="flex justify-between items-center h-full px-8 max-w-[1440px] mx-auto">

          {/* Wordmark */}
          <motion.a
            href="#home"
            className="font-black tracking-[-0.055em] text-xl
                       text-[var(--color-on-surface)] hover:opacity-60 transition-opacity"
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            THE DHRUVA
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex gap-12">
            {ITEMS.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative font-medium uppercase tracking-[0.12em] text-[11px]
                           text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]
                           transition-colors duration-300 group"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 + 0.3, duration: 0.6, ease: EASE }}
              >
                {item.label}
                {/* underline grows from left on hover */}
                <motion.span
                  className="absolute -bottom-1.5 left-0 h-px bg-[var(--color-on-surface)]"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: EASE }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile burger */}
          <motion.button
            onClick={() => setOpen(v => !v)}
            className="md:hidden text-[var(--color-on-surface)] hover:opacity-60 transition-opacity"
            whileTap={{ scale: 0.9 }}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed top-[var(--nav-h)] inset-x-0 z-40
                       bg-[var(--color-surface-container-low)]/95 backdrop-blur-xl
                       flex flex-col gap-1 px-8 py-6 md:hidden ghost-shadow"
          >
            {ITEMS.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="uppercase tracking-[0.12em] text-[11px] font-medium py-3
                           text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]
                           transition-colors border-b border-[var(--color-outline-variant)]/10 last:border-0"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}