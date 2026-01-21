import React, { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CURRENT_VENTURE } from '../constants';
import { CheckCircle2, Timer } from 'lucide-react';
import CardFireEffect from './CardFireEffect';

gsap.registerPlugin(ScrollTrigger);

const AnalyticsTeaser: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(".analytics-content", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 90%", // Snappy trigger
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1
        });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="vision" ref={containerRef} className="py-20 md:py-40 relative overflow-hidden bg-[#020617]">
      <div className="container mx-auto px-4 relative z-10">
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full max-w-5xl mx-auto border border-blue-500/20 bg-black/40 backdrop-blur-2xl rounded-3xl p-6 md:p-20 overflow-hidden shadow-2xl active:scale-[0.99] transition-transform duration-300"
        >
            <CardFireEffect isHovered={isHovered} />
            
            <div className="flex flex-col items-center text-center space-y-6 md:space-y-10">
                <div className="analytics-content inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[10px] md:text-sm tracking-widest uppercase">
                    <CURRENT_VENTURE.icon className="w-3 h-3 md:w-4 md:h-4" />
                    MISSION
                </div>
                
                <h2 className="analytics-content text-2xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">
                    {CURRENT_VENTURE.name}
                </h2>
                
                <p className="analytics-content text-sm sm:text-lg md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light">
                    {CURRENT_VENTURE.description}
                </p>

                <div className="analytics-content grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 w-full pt-6 md:pt-10">
                    {CURRENT_VENTURE.features.map((feature, i) => (
                        <div key={i} className="flex flex-col items-center justify-center gap-2 p-4 md:p-8 rounded-xl bg-white/5 border border-white/5 group">
                            <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-green-500" />
                            <span className="font-bold text-white text-xs md:text-lg">{feature}</span>
                        </div>
                    ))}
                </div>

                <div className="analytics-content pt-8 md:pt-12">
                     <div className="inline-flex items-center gap-3 px-6 py-3 md:px-12 md:py-5 bg-white/5 border border-white/10 text-gray-400 rounded-xl cursor-not-allowed">
                        <Timer className="w-5 h-5 animate-pulse text-blue-500" />
                        <span className="uppercase tracking-widest text-xs md:text-base font-bold">Coming Soon</span>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsTeaser;