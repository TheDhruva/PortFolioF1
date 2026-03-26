import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "NEO-FLOW",
    desc: "A generative motion engine built for luxury brand showcases.",
    tech: ["React", "Three.js"],
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "KINETIC OS",
    desc: "Experimental operating system interface focused on spatial computing.",
    tech: ["Next.js", "Framer"],
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "SYNTH-AI",
    desc: "A custom LLM orchestration layer for high-end creative studios.",
    tech: ["Python", "FastAPI"],
    img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "MONOLITH",
    desc: "An e-commerce framework for architecture firms.",
    tech: ["Vue.js", "Stripe"],
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Projects() {
  return (
    <section id="work" className="px-8 max-w-[1440px] mx-auto py-32 md:py-48">
      <div className="w-full flex flex-col justify-center">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4 mb-16"
        >
          <span className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant">
            Selected Works 23—24
          </span>
          <h2 className="font-headline text-5xl font-bold tracking-tight text-on-surface">
            Digital Archive
          </h2>
        </motion.div>

        {/* Accordion Container */}
        <div className="flex flex-col md:flex-row h-[70vh] md:h-[600px] gap-4 w-full">
          {projects.map((proj) => (
            <div 
              key={proj.id}
              className="relative flex-1 hover:[flex-grow:4] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] bg-surface-container-low rounded-xl overflow-hidden cursor-pointer group"
            >
              {/* Background Image */}
              <img 
                src={proj.img} 
                alt={proj.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 grayscale transition-opacity duration-700"
              />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="font-label text-inverse-primary bg-inverse-surface/40 backdrop-blur px-3 py-1 rounded text-[9px]">
                    {proj.id}
                  </span>
                  <ArrowUpRight className="text-inverse-primary/50 group-hover:text-inverse-primary transition-colors w-5 h-5" />
                </div>
                
                <div className="flex flex-col gap-6">
                  <h3 className="font-headline text-2xl font-bold text-inverse-primary transition-colors mix-blend-difference">
                    {proj.title}
                  </h3>
                  
                  {/* Hidden Details (Revealed on Hover) */}
                  <div className="flex flex-col gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 ease-out hidden md:flex h-0 group-hover:h-auto overflow-hidden">
                    <p className="text-inverse-primary/80 text-xs max-w-xs leading-relaxed mix-blend-difference">
                      {proj.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map(t => (
                        <span key={t} className="text-[9px] uppercase tracking-tighter text-inverse-primary/60 border border-inverse-primary/20 px-2 py-1 rounded mix-blend-difference">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}