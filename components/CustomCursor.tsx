import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const container = containerRef.current;

    if (!cursor || !follower || !container) return;

    // Center the cursor elements initially
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    // High-performance mouse tracking using quickTo
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });
    
    const xToFollower = gsap.quickTo(follower, "x", { duration: 0.6, ease: "power3" });
    const yToFollower = gsap.quickTo(follower, "y", { duration: 0.6, ease: "power3" });

    // Particle/Flame Logic
    let lastX = 0;
    let lastY = 0;
    const createParticle = (x: number, y: number) => {
      const particle = document.createElement('div');
      particle.className = "fixed pointer-events-none rounded-full z-[9997]";
      
      // Slightly increased size for better visibility
      const size = Math.random() * 8 + 3;
      const offsetX = (Math.random() - 0.5) * 12;
      const offsetY = (Math.random() - 0.5) * 12;
      
      // Increased opacity values for more pronounced flame
      const colors = [
        'rgba(251, 146, 60, 0.85)', // Orange
        'rgba(251, 191, 36, 0.85)', // Gold/Amber
        'rgba(248, 113, 113, 0.7)',  // Soft Red
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      Object.assign(particle.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: '0px',
        top: '0px',
        backgroundColor: randomColor,
        // Increased glow intensity
        boxShadow: `0 0 16px ${randomColor.replace('0.85', '1').replace('0.7', '0.9')}`,
        mixBlendMode: 'screen',
        transform: `translate(${x + offsetX}px, ${y + offsetY}px)`
      });

      container.appendChild(particle);

      // Animate the "smoke" drifting up and fading
      gsap.to(particle, {
        y: "-=60", // Slightly longer drift
        x: `+=${(Math.random() - 0.5) * 45}`, 
        opacity: 0,
        scale: 0.05,
        duration: 0.7 + Math.random() * 0.5,
        ease: "power1.out",
        onComplete: () => {
          if (container.contains(particle)) {
            container.removeChild(particle);
          }
        }
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToFollower(e.clientX);
      yToFollower(e.clientY);

      // Reduced distance threshold (6 -> 4) for more frequent particles
      const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      if (dist > 4) {
        createParticle(e.clientX, e.clientY);
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    // Click Animation
    const onMouseDown = () => {
      gsap.to(cursor, { scale: 0.5, duration: 0.1 });
      gsap.to(follower, { scale: 0.8, duration: 0.1 });
    };

    const onMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.1 });
      gsap.to(follower, { scale: 1, duration: 0.1 });
    };

    // Hover Animation Logic
    const onHoverEnter = () => {
      gsap.to(follower, { 
        scale: 3.5, 
        backgroundColor: "rgba(255, 255, 255, 1)", 
        borderColor: "transparent",
        mixBlendMode: "difference",
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(cursor, { opacity: 0, duration: 0.1 });
    };

    const onHoverLeave = () => {
      gsap.to(follower, { 
        scale: 1, 
        backgroundColor: "transparent",
        borderColor: "rgba(255, 255, 255, 0.3)",
        mixBlendMode: "difference",
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(cursor, { opacity: 1, duration: 0.1 });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const handleLinkHover = () => {
      const links = document.querySelectorAll('a, button, .project-card, .stat-item, .glass-card');
      links.forEach(link => {
        link.addEventListener('mouseenter', onHoverEnter);
        link.addEventListener('mouseleave', onHoverLeave);
      });
      return () => {
        links.forEach(link => {
          link.removeEventListener('mouseenter', onHoverEnter);
          link.removeEventListener('mouseleave', onHoverLeave);
        });
      };
    };

    const cleanupLinks = handleLinkHover();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cleanupLinks();
    };
  }, []);

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          body, a, button {
            cursor: none;
          }
        }
      `}</style>
      
      {/* Particle Container */}
      <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[9997]" />
      
      {/* Main Small Dot */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      />
      
      {/* Larger Follower Ring */}
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[9998] mix-blend-difference hidden md:block transition-colors duration-300"
      />
    </>
  );
};

export default CustomCursor;