# Dhruva Portfolio

A cinematic, single-page personal portfolio built with Next.js, Tailwind CSS v4, and Framer Motion.

## What We Are Building

This project is a high-aesthetic portfolio experience with:

1. A cinematic intro gate before entering the site.
2. Full-screen section storytelling (Hero, Projects, Skills, Contact).
3. Smooth motion system using editorial pacing and staggered reveals.
4. A fixed top navbar with layout-safe section sizing.

Layout rule used across main sections:

$$
	ext{section height} = 100svh - \text{navbar height}
$$

This keeps content visible without being hidden behind the header.

## Requirements

1. Node.js 20+
2. npm 10+
3. Modern browser (Chrome, Edge, Firefox, Safari)

## Tech Stack

1. Next.js 16 (App Router)
2. React 19
3. TypeScript 5
4. Tailwind CSS v4
5. Framer Motion
6. Lucide React (icons)
7. ESLint 9

## Quick Start

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

Lint code:

```bash
npm run lint
```

## Project Structure

```text
.
|- public/
|- src/
|  |- app/
|  |  |- globals.css
|  |  |- layout.tsx
|  |  |- page.tsx
|  |- components/
|     |- Contact.tsx
|     |- Hero.tsx
|     |- IntroScreen.tsx
|     |- NavBar.tsx
|     |- Projects.tsx
|     |- ScrollProgress.tsx
|     |- Skills.tsx
|- eslint.config.mjs
|- next.config.ts
|- package.json
|- postcss.config.mjs
|- tailwind.config.ts
|- tsconfig.json
```

## Section-by-Section Walkthrough

### Intro Screen

File: src/components/IntroScreen.tsx

1. Full-screen entry layer shown first.
2. Displays brand title and supporting copy.
3. Click interaction exits intro and reveals the main site.
4. Uses Framer Motion for fade and timing choreography.

### Navigation Bar

File: src/components/NavBar.tsx

1. Fixed header anchored at the top.
2. Desktop links for section anchors.
3. Mobile menu toggle for small screens.
4. Uses motion transitions for mount and hover states.

### Hero Section

File: src/components/Hero.tsx

1. First main panel after intro.
2. Split layout: text/call-to-action on left, visual portrait on right.
3. Staggered reveal animations and smooth button micro-interactions.
4. Height is constrained to viewport minus navbar via CSS variable.

### Projects Section

File: src/components/Projects.tsx

1. Curated project cards with large visual previews.
2. Hover-driven expansion feel and metadata reveal on desktop.
3. Maintains fixed storytelling panel rhythm.
4. Uses responsive card layout with motion transitions.

### Skills Section

File: src/components/Skills.tsx

1. Bento-style capability grid.
2. Skill cards grouped by domain (frameworks, AI/core logic, infra, media).
3. Dark inverse-surface visual mode for contrast in narrative flow.
4. Uses hover interactions and staggered section entrance.

### Contact Section

File: src/components/Contact.tsx

1. Final panel with contact form and social links.
2. Split layout for messaging + form.
3. Includes lightweight footer links and portfolio signature text.
4. Keeps the same viewport-minus-header sizing convention.

### Scroll Progress

File: src/components/ScrollProgress.tsx

1. Thin progress indicator fixed at top.
2. Width reflects current page scroll percentage.
3. Color shifts for better contrast in darker sections.

## App Composition Flow

File: src/app/page.tsx

1. Renders ScrollProgress globally.
2. Shows IntroScreen first using state + AnimatePresence.
3. After intro exit, mounts NavBar + all portfolio sections.
4. Enables snap-based full-panel scrolling and defines navbar height variable.

## Styling System

File: src/app/globals.css

1. Tailwind v4 setup via @import.
2. Design tokens are defined as CSS variables in :root.
3. Includes cinematic background utility and optional grain texture class.
4. Global typography and surface colors are tuned for premium editorial feel.

## Notes for Contributors

1. Keep section IDs aligned with navbar links.
2. Preserve the viewport-minus-navbar layout rule when adding new sections.
3. Reuse existing easing style for motion consistency.
4. Prefer updating tokens in globals.css instead of hardcoding colors.
