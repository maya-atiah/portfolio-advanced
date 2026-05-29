import React from 'react';
import { useParallax } from '../lib/parallax';

const ParallaxBackground = () => {
  const offset1 = useParallax(0.3);
  const offset2 = useParallax(0.5);
  const offset3 = useParallax(0.2);

  return (
    <div className='fixed inset-0 -z-10 overflow-hidden pointer-events-none'>
      <div
        className='absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full opacity-30 animate-float-orb blur-3xl'
        style={{
          background:
            'radial-gradient(circle, hsl(270 95% 60%), transparent 70%)',
          transform: `translateY(${offset1}px)`,
        }}
      />
      <div
        className='absolute top-[40%] right-[5%] w-[600px] h-[600px] rounded-full opacity-20 animate-float-orb blur-3xl'
        style={{
          background:
            'radial-gradient(circle, hsl(190 95% 55%), transparent 70%)',
          transform: `translateY(${-offset2}px)`,
          animationDelay: '5s',
        }}
      />
      <div
        className='absolute top-[80%] left-[30%] w-[400px] h-[400px] rounded-full opacity-25 animate-float-orb blur-3xl'
        style={{
          background:
            'radial-gradient(circle, hsl(320 85% 60%), transparent 70%)',
          transform: `translateY(${offset3}px)`,
          animationDelay: '10s',
        }}
      />
      {/* Grid overlay */}
      <div
        className='absolute inset-0 opacity-[0.03]'
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
