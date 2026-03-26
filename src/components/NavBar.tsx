"use client";

import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 h-20 z-40 backdrop-blur-[20px] shadow-[0_20px_80px_rgba(12,14,16,0.06)] bg-surface/95"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex justify-between items-center h-full px-8 max-w-[1440px] mx-auto w-full">
        {/* Logo */}
        <motion.div
          className="font-headline font-black tracking-tighter text-xl text-on-surface hover:opacity-70 transition-opacity cursor-pointer"
          whileHover={{ scale: 0.98 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#home">THE DHRUVA</a>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12">
          {navItems.map((item, idx) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="relative font-label tracking-widest font-medium uppercase text-[11px] text-on-surface-variant hover:text-on-surface transition-colors duration-300 group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
              <motion.div
                className="absolute -bottom-2 left-0 h-px bg-on-surface"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 0 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-on-surface cursor-pointer hover:opacity-70 transition-opacity"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, height: mobileMenuOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="md:hidden overflow-hidden bg-surface-container-low"
      >
        <div className="flex flex-col gap-4 px-8 py-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-label tracking-widest uppercase text-[11px] text-on-surface-variant hover:text-on-surface transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}