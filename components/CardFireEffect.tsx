import React, { useEffect, useRef, useState } from 'react';

interface CardFireEffectProps {
  isHovered: boolean;
}

const CardFireEffect: React.FC<CardFireEffectProps> = ({ isHovered }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [state, setState] = useState<'idle' | 'burning' | 'cooldown' | 'smoking'>('idle');
  const particlesRef = useRef<any[]>([]);
  const requestRef = useRef<number>(null);
  
  useEffect(() => {
    if (isHovered) {
      setState('burning');
    } else {
      if (state === 'burning') {
        setState('cooldown');
      }
    }
  }, [isHovered]);

  useEffect(() => {
    let timer: number;
    if (state === 'cooldown') {
      timer = window.setTimeout(() => setState('smoking'), 1000);
    } else if (state === 'smoking') {
      timer = window.setTimeout(() => setState('idle'), 1500);
    }
    return () => { if (timer) clearTimeout(timer); };
  }, [state]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      life: number;
      maxLife: number;
      colorBase: string;
      type: 'fire' | 'smoke';
      rotation: number;
      rotationSpeed: number;
      aspectRatio: number;

      constructor(type: 'fire' | 'smoke', canvasWidth: number, canvasHeight: number) {
        this.type = type;
        this.x = canvasWidth - 25 + (Math.random() - 0.5) * 15;
        this.y = canvasHeight - 10;
        
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.1;

        if (type === 'fire') {
          this.size = Math.random() * 10 + 6;
          this.aspectRatio = 1.5 + Math.random() * 1.5; // Elongated like a flame
          this.speedX = (Math.random() - 0.5) * 0.7;
          this.speedY = -Math.random() * 2.2 - 0.8;
          this.maxLife = Math.random() * 40 + 20;
          const r = 255;
          const g = Math.floor(Math.random() * 120 + 80); 
          this.colorBase = `${r}, ${g}, 0`;
        } else {
          this.size = Math.random() * 8 + 6;
          this.aspectRatio = 0.8 + Math.random() * 0.5; // Irregular puffy smoke
          this.speedX = (Math.random() - 0.5) * 0.5;
          this.speedY = -Math.random() * 0.8 - 0.4;
          this.maxLife = Math.random() * 70 + 40; 
          const grey = Math.floor(Math.random() * 40 + 40);
          this.colorBase = `${grey}, ${grey}, ${grey}`;
        }
        this.life = this.maxLife;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;
        this.life--;
        
        // Organic size changes
        if (this.type === 'smoke') {
          this.size += 0.15; 
          this.speedX += (Math.random() - 0.5) * 0.05;
        } else {
          this.size *= 0.95; 
          // Fire flickers horizontally
          this.speedX += (Math.random() - 0.5) * 0.1;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        const opacity = Math.max(0, this.life / this.maxLife);
        
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        
        const gradient = context.createRadialGradient(0, 0, 0, 0, 0, this.size);

        if (this.type === 'fire') {
          // Flame colors: Hot white core to orange outer
          gradient.addColorStop(0, `rgba(255, 255, 220, ${opacity})`);
          gradient.addColorStop(0.2, `rgba(255, 200, 50, ${opacity * 0.9})`);
          gradient.addColorStop(0.5, `rgba(${this.colorBase}, ${opacity * 0.6})`);
          gradient.addColorStop(1, `rgba(${this.colorBase}, 0)`);
          context.globalCompositeOperation = 'lighter';
        } else {
          // Smoke colors: Soft grey puffs
          gradient.addColorStop(0, `rgba(${this.colorBase}, ${opacity * 0.5})`);
          gradient.addColorStop(0.6, `rgba(${this.colorBase}, ${opacity * 0.2})`);
          gradient.addColorStop(1, `rgba(${this.colorBase}, 0)`);
          context.globalCompositeOperation = 'source-over';
        }

        context.fillStyle = gradient;
        context.beginPath();
        // Use ellipse for irregular organic shapes instead of arc
        context.ellipse(0, 0, this.size / this.aspectRatio, this.size, 0, 0, Math.PI * 2);
        context.fill();
        context.restore();
        
        context.globalCompositeOperation = 'source-over';
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (state === 'burning' || state === 'cooldown') {
        for (let i = 0; i < 2; i++) {
          particlesRef.current.push(new Particle('fire', canvas.width, canvas.height));
        }
      } else if (state === 'smoking') {
        if (Math.random() > 0.65) {
          particlesRef.current.push(new Particle('smoke', canvas.width, canvas.height));
        }
      }

      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];
        p.update();
        p.draw(ctx);
        if (p.life <= 0 || p.size <= 0.5) {
          particlesRef.current.splice(i, 1);
          i--;
        }
      }

      if (state !== 'idle' || particlesRef.current.length > 0) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [state]);

  return (
    <canvas 
      ref={canvasRef}
      width={150}
      height={200}
      className="absolute bottom-0 right-0 pointer-events-none z-30"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CardFireEffect;