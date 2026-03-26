import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-8 pt-24 max-w-[1440px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
        
        {/* Left: Typography & CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-2">
            <span className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant">
              Creative Technologist & AI Architect
            </span>
            <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tightest leading-[1.1] text-on-surface">
              Designing<br/>Digital<br/>Poetry.
            </h1>
          </div>
          <p className="font-body text-lg text-on-surface-variant max-w-md leading-relaxed">
            A multi-disciplinary developer crafting high-performance digital experiences through the lens of minimalist editorial design and cinematic movement.
          </p>
          <div className="flex gap-6 mt-4">
            <button className="bg-primary text-inverse-primary rounded-full px-10 py-4 font-label uppercase text-[11px] tracking-widest transition-all duration-300 hover:scale-[1.02] shadow-[0_20px_80px_rgba(12,14,16,0.06)]">
              Resume
            </button>
            <button className="bg-transparent text-on-surface border border-outline-variant/30 rounded-full px-10 py-4 font-label uppercase text-[11px] tracking-widest transition-all duration-300 hover:bg-surface-container-low">
              GitHub
            </button>
          </div>
        </motion.div>

        {/* Right: Visual Anchor (Image + Tonal Shift Base) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-surface-container-low rounded-xl -z-10 group-hover:bg-surface-container-high transition-colors duration-700"></div>
          {/* Replace src with your actual portrait image path */}
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
            alt="The Dhruva Profile" 
            className="w-full aspect-[4/5] md:aspect-[5/6] object-cover rounded-lg grayscale brightness-105 contrast-110"
          />
        </motion.div>

      </div>
    </section>
  );
}