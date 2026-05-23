import React from 'react';

const AboutMe = () => {
  return (
    <section id='about' className='section-wrapper scroll-reveal'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center'>
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
