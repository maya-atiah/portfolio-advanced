import { useEffect, useRef } from 'react';

type Skill = { name: string; slug: string; color?: string };

const skills: Skill[] = [
  { name: 'React', slug: 'react', color: '61DAFB' },
  { name: 'Next.js', slug: 'nextdotjs', color: 'FFFFFF' },
  { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
  { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
  { name: 'React Native', slug: 'react', color: '61DAFB' },
  { name: 'Redux', slug: 'redux', color: '764ABC' },
  { name: 'Tailwind', slug: 'tailwindcss', color: '06B6D4' },
  { name: 'Sass', slug: 'sass', color: 'CC6699' },
  { name: '.NET', slug: 'dotnet', color: '512BD4' },
  { name: 'C#', slug: 'csharp', color: '239120' },
  { name: 'Node.js', slug: 'nodedotjs', color: '5FA04E' },
  { name: 'Express', slug: 'express', color: 'FFFFFF' },
  { name: 'Socket.IO', slug: 'socketdotio', color: 'FFFFFF' },
  { name: 'MongoDB', slug: 'mongodb', color: '47A248' },
  { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1' },
  { name: 'MySQL', slug: 'mysql', color: '4479A1' },
  { name: 'Git', slug: 'git', color: 'F05032' },
  { name: 'GitHub', slug: 'github', color: 'FFFFFF' },
  { name: 'GitLab', slug: 'gitlab', color: 'FC6D26' },
  { name: 'Linux', slug: 'linux', color: 'FCC624' },
  { name: 'Postman', slug: 'postman', color: 'FF6C37' },
  { name: 'Vite', slug: 'vite', color: '646CFF' },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('revealed');
          gridRef.current?.classList.add('revealed');
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id='skills'
      ref={sectionRef}
      className='section-wrapper scroll-reveal'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <p className='section-subtitle'>What I work with</p>
          <h2 className='section-title inline-block'>Tech Stack</h2>
        </div>

        <div
          ref={gridRef}
          className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5 staggered-children'
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className='group glass-card glow-border p-5 flex flex-col items-center justify-center gap-3 aspect-square hover:-translate-y-1 transition-all duration-300'
            >
              <div className='relative w-12 h-12 flex items-center justify-center'>
                <div
                  className='absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500'
                  style={{ background: `#${skill.color}` }}
                />
                <img
                  src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
                  alt={`${skill.name} logo`}
                  loading='lazy'
                  className='relative w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110'
                />
              </div>
              <span className='text-xs uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors text-center'>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
