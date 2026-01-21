import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Orbit, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { SOCIAL_LINKS } from '../constants';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'Journey', id: 'about' },
  { name: 'Ecosystem', id: 'projects' },
  { name: 'Vision', id: 'vision' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 0.5
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(menuRef.current, 
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(".mobile-link", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, delay: 0.1 }
      );
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav 
        ref={navRef}
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[92%] md:w-auto md:min-w-[600px] z-50"
      >
        <div className="glass-card rounded-full px-5 py-2.5 md:px-6 md:py-3 flex items-center justify-between border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-black/40 backdrop-blur-xl">
          
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/30 group-hover:bg-blue-500/20 transition-all duration-300 group-hover:rotate-180">
              <Orbit className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
            </div>
            <span className="font-bold text-white tracking-tight text-base md:text-lg uppercase">JHANZEB<span className="text-blue-500">.</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <a 
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="px-5 py-2 rounded-full bg-white text-black text-xs font-bold hover:bg-blue-50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Let's Talk <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <button 
            className="md:hidden text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center p-6">
          <div ref={menuRef} className="flex flex-col gap-8 items-center text-center w-full">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="mobile-link text-4xl font-black text-white hover:text-blue-500 transition-colors uppercase tracking-tighter"
              >
                {link.name}
              </button>
            ))}
            
            <div className="mobile-link w-20 h-[2px] bg-blue-500/50 my-2" />
            
            <a 
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="mobile-link px-10 py-5 rounded-2xl bg-white text-black font-bold flex items-center gap-2 hover:bg-gray-200 transition-all active:scale-95 shadow-xl shadow-white/10"
            >
              Let's Talk <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;