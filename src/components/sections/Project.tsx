import { ArrowUpRight } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export const projects = [
  {
    id: 'aiducator',
    title: 'AIducator',
    tag: 'AI Workflow Platform',
    categories: ['AI / Web'],
    company: 'CTS',
    description:
      'AIducator is an AI-powered educational workflow platform designed to enhance personalized learning and intelligent tutoring experiences. It provides a node-based interface where complex learning workflows can be visually designed and executed, enabling adaptive educational journeys based on student needs.The platform combines AI-driven logic, real-time processing, and interactive interfaces to help educators and learners build structured learning paths, automate feedback, and improve engagement through dynamic decision flows. AIducator focuses on making learning more personalized, scalable, and efficient by integrating AI into the core of educational workflows.',
    tech: ['React', 'TypeScript', 'AI', 'Bot'],
    images: [
      '/images/projects/aiducator.png',
      '/images/projects/aiducator2.png',
    ],
  },
  {
    id: 'edulytics',
    title: 'Edulytics',
    tag: 'Data Analytics',
    categories: ['AI / Web', 'Dashboards'],
    company: 'CTS',
    description:
      'Edulytics is a powerful all-in-one educational analytics platform that transforms how institutions manage and understand their data. It enables seamless data ingestion, validation, and relationship mapping while delivering advanced analytics, real-time processing, and AI-powered insights. With features like predictive analytics, collaborative workflows, and enterprise-grade security, Edulytics helps schools and organizations make smarter, data-driven decisions efficiently and at scale.Dynamic dashboards with drill-down analytics, query-driven reporting and reusable visualization components for large datasets.',
    tech: ['React', 'Apex Charts', 'Query Engine'],
    images: [
      '/images/projects/edulyitics.png',
      '/images/projects/edulytics2.png',
    ],
  },
  {
    id: 'aud-crm',
    title: 'AUD Online & CRM',
    tag: 'Application Platform',
    categories: ['Frontend'],
    company: 'CTS',
    description:
      'Multi-step application system with status tracking, CRM campaign modules, email integration and analytics dashboards.',
    tech: ['React', 'Email', 'Analytics'],
    images: ['/images/projects/aud.png', '/images/projects/aud2.png'],
  },
  {
    id: 'data-analyzer',
    title: 'DataAnalyzer',
    tag: 'Enterprise',
    categories: ['Full Stack'],
    company: 'CTS',
    description:
      'Enterprise management platform for attendance, IT/finance device workflows, and a Clockify-like project management system.',
    tech: ['React', '.Net', 'SQL'],
    images: ['/images/projects/dataanalyzer.png'],
  },
  {
    id: 'nce-dashboard',
    title: 'NCE Dashboard',
    tag: 'Analytics Platform',
    categories: ['Dashboards'],
    company: 'CTS',
    description:
      'Modern dashboard with secure authentication, KPI tracking, interactive charts, and role-based access for monitoring organizational performance.',
    tech: ['React', 'TypeScript', 'Apex Charts'],
  },
  {
    id: 'taaleem-dashboard',
    title: 'Taaleem Dashboard',
    tag: 'Education Platform',
    categories: ['Dashboards'],
    company: 'CTS',
    description:
      'Education management dashboard featuring login, analytics, student insights, and administrative tools with a responsive user experience.',
    tech: ['React', 'TypeScript', 'Apex Charts'],
  },
  {
    id: 'dpa-cms',
    title: 'DPA CMS',
    tag: 'Content Management',
    categories: ['Frontend'],
    company: 'CTS',
    description:
      'Content management system for creating, organizing, and publishing dynamic content with reusable components, media management, and role-based permissions.',
    tech: ['React', 'Javascript.js'],
  },

  // CODI TECH

  {
    id: 'footstep',
    title: 'FootStep Ecommerce',
    tag: 'Bootcamp Project',
    categories: ['Full Stack'],
    company: 'CODI Tech',
    description:
      'StepUp is a dynamic e-commerce website developed using the MERN stack. It offers a diverse selection of categories, each housing a wide range of products with various sizes, colors, and quantities. Customers can easily browse and search for their preferred shoes, adding them to their cart. To complete the order, a simple registration process is required. The admin, accessible through authorized login, manages the platform. This includes overseeing orders, updating product details, and enhancing site descriptions. StepUp ensures a user-friendly shopping experience and efficient order management, making it a seamless hub for online shopping.',
    tech: ['React', 'Node.js', 'MongoDB'],
    images: ['/images/projects/stepUp.png', '/images/projects/cart.png'],
  },
  {
    id: 'learning-management-system',
    title: 'Learning Management System',
    tag: 'Bootcamp Project',
    categories: ['Full Stack'],
    company: 'CODI Tech',
    description:
      'Learning platform with course management, student enrollment, quizzes and progress tracking.',
    tech: ['React', 'Laravel', 'MongoDB'],
    images: ['/images/projects/lms.png'],
  },
  {
    id: 'vital-blood',
    title: 'Vital Blood',
    tag: 'Graduation Project',
    categories: ['Full Stack'],
    company: 'CODI Tech',
    description:
      'Vital Blood is a blood donation website built with MERN Stack. Users can request blood donations by submitting a form. Once submitted, the system automatically sends out emails and notifications to potential donors. To facilitate the donation process, I have implemented a "Feed" page where donors can browse and find requests. They can then express their willingness to donate and patiently wait for acceptance or rejection from the requester. This seamless communication is made possible through the user profile feature, which requires users to log in and manage their donation journey. As well the website includes authentication, and authorization where the user should sign in or sign up to make a request, donation, accept or reject from the users profile',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://vitalblood.netlify.app/',
    images: [
      '/images/projects/vitalBLood.png',
      '/images/projects/volunteers.png',
    ],
  },
];

const Project = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState('All');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) =>
        entry.isIntersecting && sectionRef.current?.classList.add('revealed'),
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const categories = useMemo(
    () => [
      'All',
      ...Array.from(new Set(projects.flatMap((project) => project.categories))),
    ],
    [],
  );

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((project) => project.categories.includes(active));

  return (
    <section
      id='projects'
      ref={sectionRef}
      className='section-wrapper scroll-reveal'
    >
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
                          style={{
                            background: 'var(--gradient-primary)',
                          }}
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

                {p.images?.length ? (
                  <div className='w-full h-40 mb-4 rounded-lg overflow-hidden border border-border'>
                    <img
                      src={p.images[0]}
                      alt={p.title}
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                  </div>
                ) : (
                  <div className='w-full h-40 mb-4 rounded-lg border border-border bg-muted/20 flex items-center justify-center relative overflow-hidden'>
                    <div
                      className='absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-30 blur-2xl'
                      style={{ background: 'var(--gradient-primary)' }}
                    />

                    <span className='text-xs uppercase tracking-widest text-muted-foreground'>
                      No Preview
                    </span>
                  </div>
                )}
                <div className='relative flex justify-between items-start'>
                  <div>
                    <span className='text-xs uppercase tracking-widest text-secondary'>
                      {p.tag}
                    </span>

                    <p className='text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1'>
                      {p.company}
                    </p>
                  </div>

                  <ArrowUpRight className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all' />
                </div>

                <div className='relative'>
                  <h3 className='text-xl font-serif font-bold mb-2 text-foreground group-hover:text-gradient transition-all'>
                    {p.title}
                  </h3>

                  <p className='text-xs text-muted-foreground line-clamp-3 mb-4'>
                    {p.description}
                  </p>

                  <div className='flex flex-wrap gap-1.5'>
                    {p.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className='text-[10px] px-2 py-0.5 rounded-md bg-muted/40 border border-border text-muted-foreground'
                      >
                        {tech}
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
