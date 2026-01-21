
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROFILE, USER_IMAGE_URL } from '../constants';
import { ArrowRight, Orbit, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(imageWrapperRef.current, 
        { scale: 1.05, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" }
      );

      tl.fromTo(".hero-text-element",
        { y: 15, opacity: 0.5 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power3.out" },
        "-=0.6"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
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
    <section id="home" ref={containerRef} className="relative min-h-[100dvh] flex items-center justify-center pt-40 pb-12 md:pt-48 lg:pt-32 overflow-hidden px-4 md:px-8">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="container mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Text Content */}
        <div ref={textRef} className="order-2 lg:order-1 space-y-6 md:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="hero-text-element flex flex-col md:flex-row items-center gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-card border-blue-500/30 text-blue-400 text-[10px] md:text-sm font-mono tracking-wider opacity-100">
                  <Orbit className="w-3 h-3 md:w-4 md:h-4 animate-spin-slow" />
                  <span>PAKISTAN • FOUNDER • TRADER</span>
              </div>
              <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] md:text-xs font-mono text-green-400 font-bold uppercase tracking-wider">Active for Partnerships</span>
              </div>
            </div>
            
            <h1 className="hero-text-element text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1] tracking-tighter opacity-100">
                HELLO, I'M <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500">
                    {PROFILE.name.toUpperCase()}
                </span>
            </h1>
            
            <div className="hero-text-element pl-0 lg:pl-6 border-l-0 lg:border-l-4 border-blue-500/50 max-w-lg lg:max-w-none opacity-100">
              <p className="text-base sm:text-lg md:text-2xl text-gray-300 font-light leading-relaxed">
                  "I don't just trade the market; I build the tools to master it."
              </p>
              <p className="text-gray-500 mt-2 font-mono text-xs md:text-sm">
                  Founder of VelaCore • 12th Grade Student
              </p>
            </div>
            
            <div className="hero-text-element flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 w-full sm:w-auto opacity-100">
                <button 
                    onClick={() => scrollToSection('projects')}
                    className="group relative px-8 py-4 md:px-10 md:py-5 bg-white text-black font-bold rounded-xl overflow-hidden shadow-xl hover:shadow-white/20 transition-all w-full sm:w-auto active:scale-95"
                >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        View Ecosystem <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                </button>
                <button 
                    onClick={() => scrollToSection('about')}
                    className="px-8 py-4 md:px-10 md:py-5 border border-white/20 rounded-xl text-white hover:bg-white/5 transition-colors font-mono w-full sm:w-auto active:scale-95"
                >
                    My Journey
                </button>
            </div>
        </div>

        {/* Image Content */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative px-4">
            <div ref={imageWrapperRef} className="relative group w-full max-w-[280px] sm:max-w-[320px] md:max-w-md opacity-100">
                
                {/* Glow */}
                <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-[40px] md:blur-[60px] opacity-100 group-hover:bg-blue-500/20 transition-all" />
                
                {/* Main Frame */}
                <div className="relative w-full aspect-[3/4] p-1 md:p-2 bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-sm shadow-2xl overflow-hidden" 
                     style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)' }}>
                    
                    <div className="w-full h-full bg-vela-dark overflow-hidden relative"
                         style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)' }}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-70" />
                        <img 
                            src={USER_IMAGE_URL} 
                            alt="Jhanzeb" 
                            className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700" 
                        />
                    </div>

                    {/* Corner Brackets */}
                    <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-blue-500/60" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-blue-500/60" />

                    <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 glass-card px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-blue-500/30">
                        <span className="text-[10px] md:text-xs font-mono text-blue-400 flex items-center gap-2">
                             <ShieldCheck className="w-3 h-3 md:w-4 md:h-4" /> CEO
                        </span>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 bg-gradient-to-t from-black/95 to-transparent text-center lg:text-left">
                        <p className="text-[10px] md:text-xs font-mono text-blue-500 mb-0.5 md:mb-1 tracking-widest uppercase">Ecosystem Core</p>
                        <p className="text-xl md:text-3xl font-black text-white">
                            Founder @ VelaCore
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      <style>{`
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
