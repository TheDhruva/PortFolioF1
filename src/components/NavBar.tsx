"use client";

/**
 * NavBar — Fixed top nav.
 *
 * Performance decisions:
 * - NO backdrop-filter/blur (was the #1 GPU paint cost on this site)
 * - Solid bg-[var(--color-surface)] with a subtle border-b separator
 * - CSS animation for entrance (navDrop keyframe in globals.css)
 * - CSS :hover for link underlines (nav-link-underline class)
 * - Framer Motion kept ONLY for wordmark whileTap (single node, negligible)
 * - Mobile drawer: CSS transition, no Framer AnimatePresence overhead
 */

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useAudio } from "@/context/AudioContext";

const EASE  = [0.16, 1, 0.3, 1] as const;
const ITEMS = [
  { label: "Work",    href: "#work"    },
  { label: "Skills",  href: "#skills"  },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [open, setOpen]   = useState(false);
  const drawerRef         = useRef<HTMLDivElement>(null);
  const { play }          = useAudio();

  /* Close drawer when clicking outside */
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <>
      {/*
       * nav — solid surface background, subtle bottom border.
       * nav-animate CSS class: plays navDrop keyframe on mount.
       */}
      <nav
        className="nav-animate fixed top-0 inset-x-0 h-[var(--nav-h)] z-40
                   bg-[var(--color-surface)]
                   border-b border-[var(--color-outline-variant)]/10
                   ghost-shadow"
      >
        <div className="flex justify-between items-center h-full
                        px-5 sm:px-8 max-w-[1440px] mx-auto">

          {/* Wordmark */}
          <motion.a
            href="#home"
            onMouseEnter={() => play("cursorHover")}
            onClick={() => play("buttonClick")}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="font-black tracking-[-0.055em] text-lg sm:text-xl
                       text-[var(--color-on-surface)] hover:opacity-60
                       transition-opacity duration-200 select-none"
          >
            THE DHRUVA
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex gap-10 lg:gap-12">
            {ITEMS.map(item => (
              <a
                key={item.href}
                href={item.href}
                onMouseEnter={() => play("buttonHover")}
                onClick={() => play("buttonClick")}
                className="nav-link-underline
                           font-medium uppercase tracking-[0.12em] text-[11px]
                           text-[var(--color-on-surface-variant)]
                           hover:text-[var(--color-on-surface)]
                           transition-colors duration-250"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile burger */}
          <button
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => { setOpen(v => !v); play("buttonClick"); }}
            className="md:hidden p-1.5 -mr-1
                       text-[var(--color-on-surface)] hover:opacity-60
                       transition-opacity duration-200"
          >
            {open
              ? <X    className="w-5 h-5" />
              : <Menu className="w-5 h-5" />
            }
          </button>
        </div>
      </nav>

      {/*
       * Mobile drawer — CSS transition only (no Framer overhead).
       * Translate Y from -8px → 0 via transition.
       */}
      <div
        ref={drawerRef}
        className={`
          fixed top-[var(--nav-h)] inset-x-0 z-40 md:hidden
          bg-[var(--color-surface-container-low)]
          border-b border-[var(--color-outline-variant)]/10
          flex flex-col gap-1 px-5 sm:px-8 py-5
          ghost-shadow
          transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
          }
        `}
      >
        {ITEMS.map(item => (
          <a
            key={item.href}
            href={item.href}
            onMouseEnter={() => play("buttonHover")}
            onClick={() => { setOpen(false); play("buttonClick"); }}
            className="uppercase tracking-[0.12em] text-[11px] font-medium
                       py-3 text-[var(--color-on-surface-variant)]
                       hover:text-[var(--color-on-surface)]
                       transition-colors duration-200
                       border-b border-[var(--color-outline-variant)]/10 last:border-0"
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}