import { Menu } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-40 bg-surface/80 backdrop-blur-[20px] shadow-[0_20px_80px_rgba(12,14,16,0.06)]">
      <div className="flex justify-between items-center px-8 py-6 max-w-[1440px] mx-auto w-full">
        <div className="font-headline font-black tracking-tighter text-xl text-on-surface">
          THE DHRUVA
        </div>
        <div className="hidden md:flex gap-12">
          <a href="#work" className="font-label tracking-widest font-medium uppercase text-[11px] text-on-surface border-b border-on-surface pb-1">
            Work
          </a>
          <a href="#skills" className="font-label tracking-widest font-medium uppercase text-[11px] text-on-surface-variant hover:text-on-surface transition-colors">
            Skills
          </a>
          <a href="#about" className="font-label tracking-widest font-medium uppercase text-[11px] text-on-surface-variant hover:text-on-surface transition-colors">
            About
          </a>
          <a href="#contact" className="font-label tracking-widest font-medium uppercase text-[11px] text-on-surface-variant hover:text-on-surface transition-colors">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Menu className="text-on-surface cursor-pointer hover:opacity-70 transition-opacity duration-300 w-6 h-6" />
        </div>
      </div>
    </nav>
  );
}