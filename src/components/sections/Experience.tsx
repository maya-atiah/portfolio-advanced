import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    period: 'Sep 2023 - Present',
    company: 'Creative Technology Solution',
    role: 'Software Developer – Frontend-Focused',
    bullets: [
      'Designed scalable React + TypeScript architecture for enterprise systems.',
      'Built AI-powered platforms (AIducator) with node-based workflow UI.',
      'Implemented real-time functionality with Socket.IO.',
      'Developed analytics dashboards with drill-down & query-driven reporting.',
      'Contributed to backend API development in ASP.NET Core.',
    ],
  },
  {
    period: '2022 – 2023',
    company: 'Codi Tech',
    role: 'Full-Stack Web Developer',
    bullets: [
      'Developed full-stack MERN and LAMP applications.',
      'Designed RESTful APIs and authentication systems.',
      'Managed Linux-based deployments and server configurations.',
      'Created reusable frontend components with cross-browser support.',
    ],
  },
];

const education = [
  {
    period: '2022 - 2023',
    company: 'Lebanese University',
    role: 'Master in Statistics',
    bullets: ['Advanced statistical modeling and data analysis methodologies.'],
  },
  {
    period: '2018 - 2021',
    company: 'Lebanese University',
    role: 'Bachelor in Applied Mathematics and Statistics',
    bullets: ['Foundation in mathematical and computational thinking.'],
  },
];
const Experience = () => {
  const [tab, setTab] = useState<'exp' | 'edu'>('exp');
  const items = tab === 'exp' ? experiences : education;

  return (
    <section id='experience' className='section-wrapper scroll-reveal'>
      <div className='max-w-5xl mx-auto'>
        <div className='text-center mb-12'>
          <p className='section-subtitle'>My career so far</p>
          <h2 className='section-title inline-block'>Journey</h2>
        </div>
        <div className='flex justify-center gap-3 mb-12'>
          <button
            onClick={() => setTab('exp')}
            className={cn(
              'flex items-center gap-2 px-6 py-3 rounded-full transition-all text-sm uppercase tracking-wider',
              tab === 'exp'
                ? 'text-primary-foreground shadow-lg'
                : 'glass-card text-muted-foreground hover:text-foreground',
            )}
            style={
              tab === 'exp' ? { background: 'var(--gradient-primary)' } : {}
            }
          >
            <Briefcase className='w-4 h-4' /> Experience
          </button>
          <button
            onClick={() => setTab('edu')}
            className={cn(
              'flex items-center gap-2 px-6 py-3 rounded-full transition-all text-sm uppercase tracking-wider',
              tab === 'edu'
                ? 'text-primary-foreground shadow-lg'
                : 'glass-card text-muted-foreground hover:text-foreground',
            )}
            style={
              tab === 'edu' ? { background: 'var(--gradient-primary)' } : {}
            }
          >
            <GraduationCap className='w-4 h-4' /> Education
          </button>
        </div>

        <div className='relative pl-8 md:pl-12 border-l-2 border-border'>
          {items.map((item, i) => (
            <div key={i} className='mb-12 relative animate-fade-up'>
              <div
                className='absolute -left-[42px] md:-left-[54px] top-1 w-5 h-5 rounded-full ring-4 ring-background'
                style={{ background: 'var(--gradient-primary)' }}
              />
              <div className='glass-card p-6 md:p-8 glow-border'>
                <p className='text-secondary text-sm uppercase tracking-widest mb-2'>
                  {item.period}
                </p>
                <h3 className='text-2xl font-serif text-gradient font-bold mb-1'>
                  {item.company}
                </h3>
                <p className='text-lg text-muted-foreground mb-4'>
                  {item.role}
                </p>
                <ul className='space-y-2'>
                  {item.bullets.map((b, j) => (
                    <li key={j} className='text-muted-foreground flex gap-2'>
                      <span className='text-primary mt-1'>▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
