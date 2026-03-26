import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-inverse-surface text-surface py-32 md:py-48 px-8 flex flex-col justify-between relative">
      <div className="max-w-[1440px] mx-auto w-full">
        
        {/* Split Layout Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full mb-32">
          
          {/* Left: Typography & Socials */}
          <div className="flex flex-col justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-8"
            >
              <span className="font-label uppercase tracking-widest text-[10px] text-outline-variant">
                Inquiries
              </span>
              <h2 className="font-headline text-6xl font-bold tracking-tight text-inverse-primary leading-tight">
                Let's build<br/>the future.
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-col gap-8 mt-16 md:mt-0"
            >
              <div className="flex gap-12">
                <a href="#" className="relative font-label uppercase tracking-widest text-sm text-outline-variant hover:text-inverse-primary transition-colors group">
                  LinkedIn
                  <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-inverse-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
                <a href="#" className="relative font-label uppercase tracking-widest text-sm text-outline-variant hover:text-inverse-primary transition-colors group">
                  GitHub
                  <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-inverse-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
                <a href="#" className="relative font-label uppercase tracking-widest text-sm text-outline-variant hover:text-inverse-primary transition-colors group">
                  YouTube
                  <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-inverse-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
              </div>
              <p className="text-outline-variant text-[11px] font-label uppercase tracking-widest">
                Available for select commissions 2024
              </p>
            </motion.div>
          </div>

          {/* Right: Glassmorphic Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/[0.02] p-10 rounded-2xl backdrop-blur-md border border-white/[0.05]"
          >
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="font-label text-[10px] uppercase tracking-widest text-outline-variant">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-transparent border-b border-white/20 focus:border-white transition-colors duration-300 py-3 outline-none text-inverse-primary text-base font-light placeholder:text-white/20"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-[10px] uppercase tracking-widest text-outline-variant">Email Address</label>
                <input 
                  type="email" 
                  placeholder="hello@example.com" 
                  className="bg-transparent border-b border-white/20 focus:border-white transition-colors duration-300 py-3 outline-none text-inverse-primary text-base font-light placeholder:text-white/20"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-[10px] uppercase tracking-widest text-outline-variant">Message</label>
                <textarea 
                  rows={3} 
                  placeholder="How can we collaborate?" 
                  className="bg-transparent border-b border-white/20 focus:border-white transition-colors duration-300 py-3 outline-none text-inverse-primary text-base font-light placeholder:text-white/20 resize-none"
                ></textarea>
              </div>
              <button className="bg-inverse-primary text-inverse-surface rounded-full py-4 font-label uppercase text-[11px] tracking-widest font-bold mt-4 transition-transform duration-300 hover:scale-[1.02]">
                Send Message
              </button>
            </form>
          </motion.div>
          
        </div>

        {/* Integrated Slim Footer */}
        <footer className="w-full pt-12 border-t border-white/[0.05]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-label text-[9px] tracking-widest uppercase font-light text-outline-variant">
              © 2024 THE DHRUVA — CURATED EXPERIENCE
            </div>
            <div className="flex gap-8">
              <a href="#" className="font-label text-[9px] tracking-widest uppercase font-light text-outline-variant hover:text-inverse-primary transition-all duration-500">Archive</a>
              <a href="#home" className="font-label text-[9px] tracking-widest uppercase font-light text-outline-variant hover:text-inverse-primary transition-all duration-500">Back to Top</a>
            </div>
          </div>
        </footer>

      </div>
    </section>
  );
}