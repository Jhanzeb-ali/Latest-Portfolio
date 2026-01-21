
import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ROADMAP } from '../constants';
import { CheckCircle2, Circle, Milestone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Roadmap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Use a more robust animation that ensures visibility even if ScrollTrigger is missed
      gsap.from(".roadmap-card", {
        scrollTrigger: {
          trigger: ".roadmap-grid",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "all"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 md:py-40 bg-[#020617] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-xs font-mono mb-4 tracking-widest uppercase">
            <Milestone className="w-3 h-3" /> STRATEGY
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
             <span className="text-blue-500">03.</span> ECOSYSTEM ROADMAP
          </h2>
          <p className="text-gray-400 max-w-xl text-sm md:text-lg font-light leading-relaxed">
            The strategic path of VelaCore. From identity to global AI-powered transparency.
          </p>
        </div>

        <div ref={containerRef} className="roadmap-grid grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {ROADMAP.map((item, idx) => (
            <div key={idx} className="roadmap-card p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-blue-500/40 transition-all flex flex-col h-full relative group shadow-2xl overflow-hidden min-h-[400px]">
              
              {/* Decorative Phase Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[40px] pointer-events-none" />

              <div className="flex justify-between items-start mb-10 relative z-10">
                 <span className="text-xs font-mono text-blue-400 font-bold tracking-widest uppercase">
                   {item.phase}
                 </span>
                 <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase ${item.status === 'Completed' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : item.status === 'In Progress' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-white/5 text-gray-500 border border-white/10'}`}>
                   {item.status}
                 </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black text-white mb-8 tracking-tight group-hover:text-blue-400 transition-colors relative z-10">
                {item.title}
              </h3>

              <ul className="space-y-5 flex-grow relative z-10">
                {item.tasks.map((task, tidx) => (
                  <li key={tidx} className="flex items-start gap-4 text-sm md:text-base text-gray-400 group/item transition-colors">
                    {item.status === 'Completed' ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    ) : item.status === 'In Progress' ? (
                      <Circle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-700 shrink-0 mt-0.5" />
                    )}
                    <span className="group-hover/item:text-gray-200 transition-colors">{task}</span>
                  </li>
                ))}
              </ul>
              
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
