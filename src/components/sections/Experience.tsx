import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const [tab, setTab] = useState<'exp' | 'edu'>('exp');

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
      </div>
    </section>
  );
};

export default Experience;
