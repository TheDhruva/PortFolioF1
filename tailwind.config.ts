import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "var(--color-surface)",
        "inverse-surface": "var(--color-inverse-surface)",
        primary: "var(--color-primary)",
        "primary-dim": "var(--color-primary-dim)",
        "surface-container-low": "var(--color-surface-container-low)",
        "surface-container-high": "var(--color-surface-container-high)",
        "on-surface": "var(--color-on-surface)",
        "on-surface-variant": "var(--color-on-surface-variant)",
        "inverse-primary": "var(--color-inverse-primary)",
        "outline-variant": "var(--color-outline-variant)",
      },
      fontFamily: {
        headline: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        tightest: '-0.06em',
        widest: '0.4em',
      }
    },
  },
  plugins: [],
};
export default config;