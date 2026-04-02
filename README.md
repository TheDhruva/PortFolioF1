# Dhruva Portfolio

Cinematic single-page portfolio built with Next.js (App Router), React 19, Tailwind CSS v4, and Framer Motion.

## Overview

This project focuses on visual storytelling and smooth transitions:

1. Intro gate before the main page is revealed.
2. Full-screen snap sections for Hero, Projects, Skills, and Contact.
3. Fixed navbar with section-safe spacing.
4. Scroll progress indicator tied to the snap container.

Core layout rule:

```text
section height = 100svh
top padding = --nav-h (fixed navbar height)
```

## Tech Stack

1. Next.js 16.2.1
2. React 19.2.4
3. TypeScript 5
4. Tailwind CSS v4
5. Framer Motion
6. Lucide React
7. ESLint 9

## Requirements

1. Node.js 20+
2. npm 10+

## Local Development

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build production bundle:

```bash
npm run build
```

Run production server:

```bash
npm run start
```

Run lint:

```bash
npm run lint
```

## Project Structure

```text
.
|- public/
|  |- Icons/
|  |- Projects/
|  |- Skills/
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

## Runtime Flow

In `src/app/page.tsx`:

1. Render `ScrollProgress`.
2. Show `IntroScreen` first.
3. On enter, fade into main portfolio content.
4. Use one internal scroll container with `snap-y snap-mandatory`.
5. Define `--nav-h` once and reuse it in each section.

## Section Map

1. `Hero` -> `#home`
2. `Projects` -> `#work`
3. `Skills` -> `#skills`
4. `Contact` -> `#contact`

Keep navbar links and section IDs synchronized.

## Content and Assets

1. Hero image: `public/profile.jpg`
2. Resume CTA: `public/resume.pdf`
3. Project thumbnails: `public/Projects/*`
4. Skill icons: `public/Skills/*`

## Contact Form

`src/components/Contact.tsx` posts to Formspree:

```text
https://formspree.io/f/mnngdlzv
```

If you fork this project, replace that endpoint with your own.

## Notes for Contributors

1. Preserve snap-section behavior (`100svh`) for consistent pacing.
2. Keep `pt-[var(--nav-h)]` on full-screen sections so content clears the fixed nav.
3. Prefer updating design tokens in `src/app/globals.css` instead of hardcoded colors.
4. Keep motion timing and easing consistent across sections.

## Next.js Version Note

This project uses Next.js 16, which includes changes from older versions. If you modify framework-level behavior, check docs under `node_modules/next/dist/docs/` first.
