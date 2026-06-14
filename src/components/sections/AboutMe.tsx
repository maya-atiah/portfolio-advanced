import {
  BarChart3,
  Cloud,
  Code2,
  Gauge,
  Layout,
  Smartphone,
} from 'lucide-react';
import React, { Activity, useEffect, useRef } from 'react';

const AboutMe = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) =>
        entry.isIntersecting && sectionRef.current?.classList.add('revealed'),
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    { icon: Code2, title: 'Frontend Architecture & UI Engineering' },
    { icon: Layout, title: 'UI/UX Implementation (Figma to Code)' },
    { icon: BarChart3, title: 'Dashboards & Data Visualization' },
    { icon: Cloud, title: 'API Integration & Backend Systems' },
    { icon: Gauge, title: 'Performance Optimization' },
  ];

  return (
    <section
      id='about'
      ref={sectionRef}
      className='section-wrapper scroll-reveal'
    >
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center'>
        <div className='relative pl-10'>
          <div className='absolute left-3 top-4 bottom-4 w-px bg-primary/60' />

          <ul className='space-y-16'>
            {services.map(({ icon: Icon, title }, i) => (
              <li key={i} className='relative flex items-center gap-6'>
                {/* dot */}
                <span className='absolute -left-[33px] w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]' />
                <div className='w-14 h-14 rounded-xl glass-card flex items-center justify-center shrink-0'>
                  <Icon className='w-7 h-7 text-primary' strokeWidth={1.5} />
                </div>
                <h3 className='font-serif text-xl md:text-2xl text-foreground font-medium'>
                  {title}
                </h3>
              </li>
            ))}
          </ul>
        </div>
        <div className='space-y-10'>
          <div>
            <h2 className='text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground'>
              About me
            </h2>
            <p className='text-muted-foreground text-base md:text-lg leading-relaxed max-w-md'>
              I'm a Software Developer with 3+ years building scalable
              enterprise web apps, real-time dashboards, and AI-driven platforms
              with React, TypeScript, and .NET. Backed by a Master's in
              Statistics — I love turning complex problems into clean,
              performant interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
