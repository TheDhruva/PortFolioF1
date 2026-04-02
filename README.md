# THE DHRUVA — Full Stack & AI/ML Developer

> Building intelligent systems at the intersection of AI and modern web — from computer vision pipelines to production SaaS apps deployed at scale.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=000)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?style=flat-square&logo=vercel)](https://vercel.com/)

---

## 👤 About

Full Stack & AI/ML Developer with hands-on experience shipping production-grade AI applications — from a YOLOv8 computer vision system controlling real hardware to multi-tenant SaaS platforms built on React 19 and deployed on Vercel.

Tech stack: **Next.js · Python · TypeScript · OpenAI API · XGBoost · Convex · Docker · AWS**

---

## 🚀 Live Portfolio

🔗 **[thedhruva.vercel.app](https://the-dhruva-portfolio.vercel.app/)** 

Cinematic single-page experience — snap-section scroll, audio engine, CSS-driven entrance animations, and an intro gate. Optimized for performance with lazy-loaded sections and zero backdrop-filter GPU cost.

---

## 🏗️ Top Projects

### 1. 🚦 AI Traffic Navigator
**Problem:** Indian traffic signals are fixed-timer — they don't respond to actual vehicle flow.  
**Solution:** Real-time signal optimization using YOLOv8 to detect and count vehicles per lane, dynamically adjusting signal durations via Arduino serial control.  
**Tech:** Python · OpenCV · YOLOv8 · Arduino  
**Result:** Dynamic signal timing based on live vehicle density; hardware-integrated prototype.  
[![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?style=flat-square&logo=github)](https://github.com/TheDhruva/AI-Traffic-Navigator)

---

### 2. 🤖 AI Agent Builder
**Problem:** Building multi-step AI agent workflows requires heavy engineering effort.  
**Solution:** Visual no-code platform with a drag-and-drop node editor for deploying multi-step AI agent pipelines — no code required.  
**Tech:** Next.js 15 · TypeScript · OpenAI SDK · Convex  
**Result:** Deployed SaaS app; workflow orchestration without writing agent code.  
[![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?style=flat-square&logo=github)](https://github.com/TheDhruva/AI-Agent-Builder)
[![Live Demo](https://img.shields.io/badge/Live-Demo-00C7B7?style=flat-square&logo=vercel)](https://ai-agent-builder-qk66.vercel.app/)

---

### 3. 📄 AI Resume Builder
**Problem:** Job seekers struggle to write quantified, metric-driven resume bullet points.  
**Solution:** SaaS app where Gemini AI generates role-specific bullet points — with live preview, PDF export, and shareable links.  
**Tech:** React 19 · Convex · Gemini API · Clerk  
**Result:** Full auth, real-time preview, PDF output — live and deployed on Vercel.  
[![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?style=flat-square&logo=github)](https://github.com/TheDhruva/AI-Resume-Builder)
[![Live Demo](https://img.shields.io/badge/Live-Demo-00C7B7?style=flat-square&logo=vercel)](https://ai-resume-builder-nu-seven.vercel.app/)

---

### 4. 📊 Sentiment Analysis — Amazon Reviews
**Problem:** Manual review classification doesn't scale beyond hundreds of rows.  
**Solution:** Production ML pipeline classifying Amazon reviews — single review mode + bulk CSV processing.  
**Tech:** XGBoost · Scikit-learn · NLTK · Streamlit  
**Result:** Handles 100k+ row CSV files; end-to-end ML pipeline from raw text to prediction.  
[![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?style=flat-square&logo=github)](https://github.com/TheDhruva/sentiment-analysis-amazon-reviews)

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion |
| **Backend** | Node.js, FastAPI, Convex, Formspree |
| **AI / ML** | Python, OpenAI API, Gemini API, LangChain, YOLOv8, XGBoost, Scikit-learn, HuggingFace, NLTK |
| **Databases** | PostgreSQL, MongoDB, Convex |
| **Auth** | Clerk |
| **Infrastructure** | Vercel, AWS, Docker |
| **Tools** | Git, Postman, Arduino |
| **Media** | YouTube (10k+ views), Adobe Premiere Pro |

---

## 💼 Skills That Matter

- **AI Pipelines** — end-to-end ML from data preprocessing to deployed inference (XGBoost, Scikit-learn, YOLOv8)
- **Full Stack SaaS** — auth (Clerk), real-time DB (Convex), PDF generation, shareable links
- **API Integration** — OpenAI, Gemini, LangChain RAG pipelines
- **Performance-First Frontend** — CSS animation engines, lazy-loading, zero backdrop-filter GPU cost, SVH snap layouts
- **Hardware Integration** — Python → Arduino serial control for physical signal systems
- **Deployment** — Vercel, AWS, Docker; production-ready CI/CD workflows

---

## 🏆 Achievements

- 🎥 **10k+ YouTube views** — tech content on AI and software development
- 🚀 **3 live SaaS apps** deployed on Vercel — AI Agent Builder, AI Resume Builder, Portfolio
- 🤖 **Computer vision + hardware** — built an AI traffic system controlling physical Arduino signals
- 📦 **100k+ row ML pipeline** — bulk CSV sentiment analysis with Streamlit UI

---

## ⚙️ Local Development

**Requirements:** Node.js 20+ · npm 10+

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Run linter
npm run lint
```

---

## 📁 Project Structure

```
.
├── public/
│   ├── Icons/
│   ├── Projects/          # Project thumbnails
│   ├── Skills/            # Skill icons (SVG)
│   ├── audio/             # SFX + ambient audio
│   ├── profile.jpg        # Hero profile image
│   └── resume.pdf         # Downloadable resume
├── src/
│   ├── app/
│   │   ├── globals.css    # Design tokens + CSS animation engine
│   │   ├── layout.tsx     # Root layout + metadata
│   │   └── page.tsx       # Root page — intro gate + section assembly
│   ├── components/
│   │   ├── Contact.tsx    # Contact form (Formspree) + socials
│   │   ├── Hero.tsx       # Hero section — clip-reveal animation
│   │   ├── IntroScreen.tsx# Cinematic fullscreen intro gate
│   │   ├── MuteButton.tsx # Audio mute toggle
│   │   ├── NavBar.tsx     # Fixed nav + mobile drawer
│   │   ├── Projects.tsx   # CSS flex accordion + mobile scroll
│   │   ├── ScrollProgress.tsx # Scroll progress indicator
│   │   └── Skills.tsx     # Bento grid — 4 skill categories
│   ├── context/
│   │   └── AudioContext.tsx # Audio engine (SFX + ambient)
│   └── hooks/
│       └── useInView.ts   # IntersectionObserver → CSS entrance trigger
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🏛️ Architecture Notes

- **Snap scroll** — `snap-y snap-mandatory` on the scroll container; each section is exactly `100svh`
- **Nav height** — `--nav-h: 5rem` defined in `:root` and applied via `pt-[var(--nav-h)]` on all sections
- **Animations** — CSS `@keyframes` + `IntersectionObserver` for scroll reveals; Framer Motion kept only for intro gate and button tap feedback
- **Audio engine** — Web Audio API via `HTMLAudioElement`; unlocked on first user interaction; mutable globally

---

## 🌐 Deploying to Vercel

1. Push to GitHub
2. Import the repo in [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — no config needed
4. Set environment variables if you fork and add your own Formspree endpoint

> ⚠️ **Note:** If you fork this project, replace the Formspree endpoint in `src/components/Contact.tsx`:
> ```
> https://formspree.io/f/mnngdlzv  →  your own endpoint
> ```

---

## 📬 Let's Connect

| Platform | Link |
|---|---|
| 🔗 LinkedIn | [linkedin.com/in/thedhruva](https://www.linkedin.com/in/thedhruva/) |
| 💻 GitHub | [github.com/thedhruva](https://github.com/thedhruva) |
| 📸 Instagram | [@thedhruva07](https://www.instagram.com/thedhruva07/) |
| 📧 Email | *via the contact form on the portfolio* |

---

*© 2026 THE DHRUVA — Available for select commissions.*
