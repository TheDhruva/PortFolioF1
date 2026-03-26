import { motion } from "framer-motion";
import { Hexagon, Cpu, Database, Video } from "lucide-react";

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1]as const } }
  };

  return (
    <section id="skills" className="bg-inverse-surface text-surface py-32 md:py-48 px-8 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto w-full">
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-20">
          <span className="font-label uppercase tracking-widest text-[10px] text-outline-variant">
            Technical Arsenal
          </span>
          <h2 className="font-headline text-5xl font-bold tracking-tight text-inverse-primary">
            Capabilities
          </h2>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6 h-auto md:h-[600px]"
        >
          {/* Frameworks */}
          <motion.div variants={item} className="md:col-span-7 md:row-span-1 bg-white/[0.03] border border-white/[0.05] p-10 rounded-xl hover:bg-white/[0.08] transition-colors duration-500 flex items-center gap-12 group">
            <Hexagon className="w-16 h-16 text-white/30 group-hover:text-white transition-colors font-extralight" strokeWidth={1} />
            <div className="flex flex-col gap-3">
              <h4 className="font-headline text-2xl font-medium tracking-tight text-inverse-primary">Frameworks</h4>
              <p className="text-outline-variant text-sm leading-relaxed max-w-md">React, Next.js, Vue, Tailwind CSS, Framer Motion.</p>
            </div>
          </motion.div>

          {/* Core Logic & AI */}
          <motion.div variants={item} className="md:col-span-5 md:row-span-2 bg-white/[0.03] border border-white/[0.05] p-10 rounded-xl hover:bg-white/[0.08] transition-colors duration-500 flex flex-col justify-between group">
            <Cpu className="w-20 h-20 text-white/30 group-hover:text-white transition-colors font-extralight self-end" strokeWidth={1} />
            <div className="flex flex-col gap-4">
              <h4 className="font-headline text-3xl font-medium tracking-tight text-inverse-primary">Core Logic & AI</h4>
              <p className="text-outline-variant text-sm leading-relaxed">Python, Data Structures & Algorithms (DSA), LLM Orchestration, PyTorch, Generative pipelines.</p>
            </div>
          </motion.div>

          {/* Infrastructure */}
          <motion.div variants={item} className="md:col-span-4 md:row-span-1 bg-white/[0.03] border border-white/[0.05] p-10 rounded-xl hover:bg-white/[0.08] transition-colors duration-500 flex flex-col justify-center gap-4 group">
            <Database className="w-12 h-12 text-white/30 group-hover:text-white transition-colors font-extralight" strokeWidth={1} />
            <div className="flex flex-col gap-2">
              <h4 className="font-headline text-xl font-medium tracking-tight text-inverse-primary">Infrastructure</h4>
              <p className="text-outline-variant text-sm leading-relaxed">AWS, Vercel, Docker, PostgreSQL.</p>
            </div>
          </motion.div>

          {/* Digital Media */}
          <motion.div variants={item} className="md:col-span-3 md:row-span-1 bg-white/[0.03] border border-white/[0.05] p-10 rounded-xl hover:bg-white/[0.08] transition-colors duration-500 flex flex-col justify-center gap-4 group">
            <Video className="w-12 h-12 text-white/30 group-hover:text-white transition-colors font-extralight" strokeWidth={1} />
            <div className="flex flex-col gap-2">
              <h4 className="font-headline text-xl font-medium tracking-tight text-inverse-primary">Digital Media</h4>
              <p className="text-outline-variant text-sm leading-relaxed">YouTube content strategy, video production, audience building.</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}