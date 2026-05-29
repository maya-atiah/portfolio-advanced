import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer className='border-t border-border py-12 px-4 md:px-8 lg:px-16 relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className='text-center md:text-left'>
            <div className='font-serif text-2xl text-gradient font-bold mb-2'>
              MA.
            </div>
            <p className='text-muted-foreground text-sm max-w-md'>
              Building modern, scalable digital experiences.
            </p>
          </div>

          <nav className='flex flex-wrap gap-6 justify-center'>
            {[
              'Home',
              'About',
              'Experience',
              'Skills',
              'Projects',
              'Contact',
            ].map((item) => (
              <ScrollLink
                key={item}
                to={item.toLowerCase()}
                spy
                smooth
                offset={-80}
                duration={500}
                className='nav-link'
              >
                {item}
              </ScrollLink>
            ))}
          </nav>
        </div>
        <div className='mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground'>
          © {new Date().getFullYear()} Maya Atiah. Crafted with passion.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
