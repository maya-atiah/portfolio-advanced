import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import ThemeToggle from '../ThemeToggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Experience', href: 'experience' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12',
        scrolled
          ? 'backdrop-blur-xl bg-background/60 border-b border-border'
          : 'bg-transparent',
      )}
    >
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <div className='font-serif text-2xl tracking-wider font-bold text-foreground'>
          Maya A <span className='text-primary'>.</span>
        </div>

        <div className='flex items-center gap-3 md:hidden'>
          <ThemeToggle />
          <button
            className='text-foreground'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle menu'
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className='hidden md:flex items-center space-x-8'>
          {navLinks.map((link) => (
            <ScrollLink
              key={link.href}
              to={link.href}
              spy
              smooth
              offset={-80}
              duration={500}
              className='nav-link'
              activeClass='text-foreground'
            >
              {link.name}
            </ScrollLink>
          ))}
          <ThemeToggle />
        </nav>
      </div>

      <div
        className={cn(
          'fixed inset-0 backdrop-blur-2xl bg-background/95 z-40 flex flex-col justify-center items-center transition-all duration-500 md:hidden',
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none',
        )}
      >
        <nav className='flex flex-col items-center space-y-8'>
          {navLinks.map((link) => (
            <ScrollLink
              key={link.href}
              to={link.href}
              spy
              smooth
              offset={-80}
              duration={500}
              className='nav-link text-2xl'
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </ScrollLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
