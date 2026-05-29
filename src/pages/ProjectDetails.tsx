import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '../components/sections/Project';
import { Button } from '../components/ui/Button';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center glass-card p-10'>
          <h2 className='font-serif text-3xl text-gradient mb-4'>
            Project not found
          </h2>
          <Link to='/'>
            <Button className='btn-primary'>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='pt-32 pb-16 px-4 md:px-8 min-h-screen relative'>
      <div className='max-w-5xl mx-auto'>
        <Link
          to='/#projects'
          className='inline-flex items-center text-muted-foreground mb-8 hover:text-foreground transition-colors'
        >
          <ArrowLeft className='h-5 w-5 mr-2' /> Back to Projects
        </Link>

        <div className='mb-10'>
          <p className='text-secondary uppercase tracking-widest text-sm mb-3'>
            {project.tag}
          </p>
          <h1 className='font-serif text-5xl md:text-7xl font-bold text-gradient mb-4'>
            {project.title}
          </h1>
        </div>

        <div className='glass-card p-8 md:p-10 glow-border mb-8'>
          <p className='text-lg text-muted-foreground leading-relaxed mb-6'>
            {project.description}
          </p>
          <div className='flex flex-wrap gap-2 mb-8'>
            {project.tech.map((t) => (
              <span
                key={t}
                className='px-3 py-1 rounded-full bg-muted/40 border border-border text-sm text-muted-foreground'
              >
                {t}
              </span>
            ))}
          </div>
          <div className='flex flex-wrap gap-3'>
            <Button className='btn-primary'>
              <ExternalLink className='w-4 h-4 mr-2' /> Live Demo
            </Button>
            <Button
              variant='outline'
              className='border-border bg-card/40 backdrop-blur-sm hover:bg-card text-foreground rounded-full px-6'
            >
              View Code
            </Button>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-6'>
          <div className='glass-card p-8 glow-border'>
            <h3 className='text-xl font-serif text-gradient mb-3'>
              Highlights
            </h3>
            <ul className='space-y-2 text-muted-foreground'>
              <li>▸ Modern, scalable architecture</li>
              <li>▸ Production-grade performance</li>
              <li>▸ Real-time interactive UI</li>
            </ul>
          </div>
          <div className='glass-card p-8 glow-border'>
            <h3 className='text-xl font-serif text-gradient mb-3'>My Role</h3>
            <p className='text-muted-foreground'>
              Owned end-to-end frontend implementation, system architecture
              decisions, and contributed to backend API design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
