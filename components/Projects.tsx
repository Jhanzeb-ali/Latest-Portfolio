
import React, { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';
import CardFireEffect from './CardFireEffect';

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card-item", {
        scrollTrigger: {
          trigger: ".projects-grid-list",
          start: "top 95%",
        },
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "all"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-40 relative overflow-hidden bg-[#020617]">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-16 md:mb-32 text-center">
            <h2 className="text-4xl md:text-8xl font-black font-mono mb-6 tracking-tighter uppercase text-white !opacity-100">
                <span className="text-purple-500">02.</span> VELACORE
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-2xl leading-relaxed font-light">
                The Ecosystem I built. Bridging AI, Web3, and practical utilities to solve real-world problems.
            </p>
        </div>

        <div className="projects-grid-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {PROJECTS.map((project, idx) => (
                <a 
                    key={idx} 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="project-card-item group relative p-10 md:p-12 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-blue-500/40 transition-all duration-300 flex flex-col min-h-[350px] overflow-hidden shadow-2xl active:scale-95 opacity-100"
                >
                    {/* Background Watermark Logo */}
                    <div className="absolute -bottom-8 -right-8 w-60 h-60 pointer-events-none opacity-[0.04] group-hover:opacity-[0.1] group-hover:scale-110 group-hover:rotate-[-6deg] transition-all duration-700 ease-in-out">
                        <img 
                            src={(project as any).logoUrl} 
                            alt="" 
                            className="w-full h-full object-contain mix-blend-screen"
                        />
                    </div>

                    <CardFireEffect isHovered={hoveredIdx === idx} />
                    
                    <div className="absolute top-8 right-8 p-3 bg-white/5 rounded-full border border-white/10 group-hover:bg-blue-500/30 group-hover:border-blue-500/50 transition-all">
                        <ExternalLink className="w-5 h-5 text-white" />
                    </div>

                    <div className={`w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-white/5 flex items-center justify-center mb-10 md:mb-12 ${project.color} group-hover:scale-110 transition-transform shadow-2xl relative z-10`}>
                        <project.icon className="w-10 h-10 md:w-12 md:h-12" />
                    </div>

                    <h3 className="text-3xl md:text-5xl font-black mb-5 group-hover:text-blue-400 transition-colors tracking-tight text-white !opacity-100 relative z-10">
                        {project.name}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-8 flex-grow text-sm md:text-xl font-normal relative z-10">
                        {project.description}
                    </p>

                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-blue-500/50 transition-all duration-500 mt-auto relative z-10" />
                </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
