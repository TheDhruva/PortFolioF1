"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [shouldShowWhite, setShouldShowWhite] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrollPercent);

      // Determine if we're in the dark section (Skills or Contact)
      // Dark sections typically start around 60-70% scroll
      setShouldShowWhite(scrollPercent > 55);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 h-[2px] z-40 transition-colors duration-300 ${
        shouldShowWhite ? "bg-inverse-primary" : "bg-primary"
      }`}
      style={{ width: `${scrollProgress}%` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    />
  );
}
