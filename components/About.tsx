
import React, { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SKILLS, STATS, TIMELINE } from '../constants';
import CardFireEffect from './CardFireEffect';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Simple Y-axis reveal only, NO OPACITY to ensure 100% visibility
      gsap.from(".stat-item", {
        scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 95%", 
        },
        y: 20,
        stagger: 0.05,
        duration: 0.5,
        ease: "power2.out",
        clearProps: "all" // Resets GSAP styles after animation
      });

      gsap.from(".timeline-item", {
        scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 95%",
        },
        y: 20,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "all"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-[#050b1d] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* STATS CARDS - PURE WHITE AND HIGH CONTRAST */}
        <div className="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20 md:mb-32">
            {STATS.map((stat, idx) => (
                <div 
                  key={idx} 
                  onMouseEnter={() => setHoveredIndex(`stat-${idx}`)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="stat-item relative overflow-hidden p-6 md:p-10 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 transition-all text-center group opacity-100 flex flex-col items-center justify-center min-h-[180px] md:min-h-[220px]"
                >
                    <CardFireEffect isHovered={hoveredIndex === `stat-${idx}`} />
                    <stat.icon className="w-6 h-6 md:w-8 md:h-8 mb-3 md:mb-4 text-blue-500" />
                    
                    <p className="text-[10px] md:text-xs text-blue-400 font-mono uppercase tracking-[0.1em] mb-1 font-bold">
                        {stat.label}
                    </p>

                    <h3 className="text-3xl md:text-6xl font-black text-white mb-1 tracking-tighter !opacity-100">
                        {stat.value}
                    </h3>
                    
                    <p className="text-[9px] md:text-sm text-gray-400 font-mono uppercase tracking-[0.1em] font-medium max-w-[120px] md:max-w-none">
                        {stat.suffix}
                    </p>
                </div>
            ))}
        </div>

        <div className="flex flex-col xl:flex-row gap-16 md:gap-24 items-start">
          
          <div className="w-full xl:w-7/12">
             <h2 className="text-3xl md:text-5xl font-black font-mono mb-12 flex items-center gap-4 uppercase tracking-tighter text-white !opacity-100">
                <span className="text-blue-500">01.</span> THE ORIGIN
                <div className="h-[1px] bg-white/10 flex-grow"></div>
             </h2>
             
             <div className="timeline-container relative space-y-10 pl-6 md:pl-12 border-l border-white/10 ml-2">
                {TIMELINE.map((item, idx) => (
                    <div key={idx} className="timeline-item relative opacity-100">
                        <div className={`absolute -left-[33px] md:-left-[58px] top-1 w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#050b1d] border-2 z-10 
                            ${item.title.includes("Dark Side") ? "border-red-500" : 
                              item.title.includes("Vow") ? "border-yellow-400" : 
                              "border-blue-500"}`} 
                        />
                        
                        <div className={`relative p-6 md:p-10 rounded-2xl border border-white/10 bg-white/[0.02] shadow-2xl transition-all duration-300
                            ${item.title.includes("Dark Side") ? "border-red-500/30 bg-red-900/10" : 
                              item.title.includes("Vow") ? "border-yellow-500/30 bg-yellow-900/10" : ""}`}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 rounded-full text-[10px] md:text-xs font-mono bg-blue-500/20 text-blue-400 font-bold uppercase tracking-widest">
                                    {item.year}
                                </span>
                                <item.icon className={`w-5 h-5 md:w-8 md:h-8 ${item.color}`} />
                            </div>
                            <h3 className="text-2xl md:text-4xl font-black mb-3 text-white tracking-tight !opacity-100">
                                {item.title}
                            </h3>
                            <p className="text-gray-300 text-sm md:text-xl leading-relaxed font-normal">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
             </div>
          </div>

          <div className="w-full xl:w-5/12 xl:sticky xl:top-32 space-y-12">
            <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-black flex items-center gap-3 tracking-tight text-white !opacity-100">
                    <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                    PHILOSOPHY
                </h3>
                <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10">
                    <p className="text-lg md:text-2xl text-white italic leading-relaxed font-light">
                       "Being a student founder in Pakistan isn't about finding time; it's about making time. I'm building VelaCore to prove that innovation has no age limit."
                    </p>
                </div>
            </div>

            <div className="skills-grid-container space-y-8">
                <h3 className="text-2xl md:text-3xl font-black flex items-center gap-3 tracking-tight text-white !opacity-100">
                    <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                    TECH STACK
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
                    {SKILLS.map((skill, idx) => (
                    <div 
                      key={idx} 
                      className="skill-card p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-5 hover:bg-white/[0.08] transition-all group opacity-100"
                    >
                        <div className="p-4 bg-blue-500/20 rounded-xl text-blue-400">
                            <skill.icon className="w-6 h-6 md:w-7 md:h-7" />
                        </div>
                        <div>
                            <h4 className="font-black text-white text-xl md:text-2xl tracking-tight !opacity-100">{skill.name}</h4>
                            <p className="text-[10px] md:text-xs text-gray-400 font-mono tracking-widest uppercase mt-1 font-bold">{skill.level}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
