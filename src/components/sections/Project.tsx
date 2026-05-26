import { ArrowUpRight } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

export const projects = [
  {
    id: 'aiducator',
    title: 'AIducator',
    tag: 'AI Workflow Platform',
    category: 'AI / Web',
    description:
      'Node-based workflow UI with React Flow visualizing AI-driven educational workflows. Bot interfaces handling conditional logic and dynamic execution.',
    tech: ['React Flow', 'TypeScript', 'Socket.IO', 'AI'],
  },
  {
    id: 'edulytics',
    title: 'Edulytics',
    tag: 'Data Analytics',
    category: 'Dashboards',
    description:
      'Dynamic dashboards with drill-down analytics, query-driven reporting and reusable visualization components for large datasets.',
    tech: ['React', 'Recharts', 'Query Engine'],
  },
  {
    id: 'hr-system',
    title: 'HR Management System',
    tag: 'Full Stack',
    category: 'Full Stack',
    description:
      'Full-stack HR platform with leave workflows, RBAC, protected routes and dynamic permission-based UI rendering.',
    tech: ['React', '.NET', 'RBAC', 'JWT'],
  },
  {
    id: 'aud-crm',
    title: 'AUD Online & CRM',
    tag: 'Application Platform',
    category: 'Full Stack',
    description:
      'Multi-step application system with status tracking, plus CRM campaign modules with email integration and analytics dashboards.',
    tech: ['React', 'Email', 'Analytics'],
  },
  {
    id: 'data-analyzer',
    title: 'DataAnalyzer',
    tag: 'Enterprise',
    category: 'Dashboards',
    description:
      'Enterprise management for attendance, IT/finance device workflows, and a Clockify-like project management system.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'real-time-dash',
    title: 'Real-Time Dashboards',
    tag: 'Internal Tools',
    category: 'Dashboards',
    description:
      'Live dashboards using Socket.IO for real-time data updates, interactive charts and operational visibility.',
    tech: ['Socket.IO', 'ApexCharts', 'TS'],
  },
];
const Project = () => {
  const [active, setActive] = useState<string>('All');

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  );

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id='projects' className='section-wrapper scroll-reveal'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <p className='section-subtitle'>Selected work</p>
          <h2 className='section-title inline-block'>Projects</h2>
        </div>

        <div className='grid md:grid-cols-[200px_1fr] gap-10 lg:gap-16'>
          <aside className='md:border-r md:border-border md:pr-8'>
            <ul className='flex md:flex-col gap-3 md:gap-5 overflow-x-auto md:overflow-visible'>
              {categories.map((cat) => {
                const isActive = active === cat;
                return (
                  <li key={cat}>
                    <button
                      onClick={() => setActive(cat)}
                      className={`relative whitespace-nowrap text-left text-base md:text-lg font-medium transition-all duration-300 ${
                        isActive
                          ? 'text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <span
                        className={
                          isActive ? 'text-gradient font-semibold' : ''
                        }
                      >
                        {cat}
                      </span>
                      {isActive && (
                        <span
                          className='block h-[2px] mt-1 rounded-full'
                          style={{ background: 'var(--gradient-primary)' }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 staggered-children revealed'>
            {filtered.map((p) => (
              <Link
                key={p.id}
                to={`/project/${p.id}`}
                className='glass-card p-6 glow-border group hover:bg-card/60 transition-all block relative overflow-hidden aspect-square flex flex-col justify-between'
              >
                <div
                  className='absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20 blur-3xl group-hover:opacity-50 transition-opacity'
                  style={{ background: 'var(--gradient-primary)' }}
                />
                <div className='relative flex justify-between items-start'>
                  <span className='text-xs uppercase tracking-widest text-secondary'>
                    {p.tag}
                  </span>
                  <ArrowUpRight className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all' />
                </div>
                <div className='relative'>
                  <h3 className='text-xl font-serif font-bold mb-2 text-foreground group-hover:text-gradient transition-all'>
                    {p.title}
                  </h3>
                  <p className='text-xs text-muted-foreground line-clamp-3 mb-3'>
                    {p.description}
                  </p>
                  <div className='flex flex-wrap gap-1.5'>
                    {p.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className='text-[10px] px-2 py-0.5 rounded-md bg-muted/40 border border-border text-muted-foreground'
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
