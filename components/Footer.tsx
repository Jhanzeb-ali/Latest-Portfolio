
import React, { useState, useEffect } from 'react';
import { Mail, Github, Twitter, Linkedin, ArrowUpRight, Clock, MapPin } from 'lucide-react';
import { USER_IMAGE_URL, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const [pakTime, setPakTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const time = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(new Date());
      setPakTime(time);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative bg-[#020617] pt-24 pb-12 overflow-hidden border-t border-white/5">
        {/* Background glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-blue-900/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20 gap-12 lg:gap-20">
                <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase">
                        Get In Touch
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-[0.85]">
                        LET'S WORK <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">TOGETHER.</span>
                    </h2>
                    <p className="text-gray-400 max-w-md mx-auto lg:mx-0 text-base md:text-xl font-light leading-relaxed">
                        Building the future of DeFi and Web3. Whether it's a partnership or a project, let's turn vision into reality.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
                    <SocialButton href={SOCIAL_LINKS.github} icon={Github} label="GitHub" />
                    <SocialButton href={SOCIAL_LINKS.linkedin} icon={Linkedin} label="LinkedIn" />
                    <SocialButton href={SOCIAL_LINKS.twitter} icon={Twitter} label="X (Twitter)" />
                    <SocialButton href={`mailto:${SOCIAL_LINKS.email}`} icon={Mail} label="Email" />
                </div>
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
                    <div className="flex items-center gap-5">
                        <div className="relative group">
                            <img src={USER_IMAGE_URL} alt="Jhanzeb" className="w-14 h-14 rounded-full border border-white/10 object-cover group-hover:border-blue-500/50 transition-colors" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-[3px] border-[#020617]" />
                        </div>
                        <div>
                            <p className="text-white font-black leading-none tracking-tight text-xl uppercase">JHANZEB<span className="text-blue-500">.</span></p>
                            <p className="text-[10px] text-gray-500 font-mono mt-1.5 tracking-widest uppercase flex items-center gap-2">
                                <MapPin className="w-3 h-3" /> Pakistan • {pakTime}
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    </footer>
  );
};

interface SocialButtonProps {
    href: string;
    icon: React.ElementType;
    label: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, icon: Icon, label }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex items-center gap-4 px-6 py-4 md:px-8 md:py-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-blue-500/30 hover:scale-[1.03] transition-all duration-300 w-full lg:w-60 justify-between active:scale-95"
    >
        <div className="flex items-center gap-4">
            <Icon className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
            <span className="font-black text-white text-sm md:text-base tracking-tight">{label}</span>
        </div>
        <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </a>
)

export default Footer;
