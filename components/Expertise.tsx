
import React from 'react';
import { EXPERTISE } from '../constants';

const Expertise: React.FC = () => {
  return (
    <section className="py-20 bg-[#020617] border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {EXPERTISE.map((item, idx) => (
            <div key={idx} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-3 uppercase tracking-tight">{item.title}</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
