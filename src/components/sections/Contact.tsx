import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'maya.atiah.99@gmail.com',
    href: 'mailto:maya.atiah.99@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+961 3 096 433',
    href: 'tel:+9613096433',
  },
  { icon: MapPin, label: 'Location', value: 'Beirut, Lebanon', href: '#' },
];

const Contact = () => {
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

  return (
    <section
      id='contact'
      ref={sectionRef}
      className='section-wrapper scroll-reveal'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <p className='section-subtitle'>Let's work together</p>
          <h2 className='section-title inline-block'>Get In Touch</h2>
        </div>
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='glass-card p-8 glow-border'>
            <h3 className='text-2xl font-serif text-gradient font-bold mb-6'>
              Send a message
            </h3>
            <form className='space-y-4'>
              <Input
                placeholder='Your Name'
                required
                className='bg-muted/40 border-border'
              />
              <Input
                placeholder='Your Email'
                type='email'
                required
                className='bg-muted/40 border-border'
              />
              <Input
                placeholder='Subject'
                className='bg-muted/40 border-border'
              />
              <Textarea
                placeholder='Your Message'
                required
                className='bg-muted/40 border-border min-h-[160px]'
              />
              <Button type='submit' className='btn-primary w-full'>
                Send Message
              </Button>
            </form>
          </div>

          <div className='space-y-4'>
            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.href}
                className='glass-card p-6 glow-border flex items-center gap-4 hover:bg-card/60 transition-all group'
              >
                <div
                  className='w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0'
                  style={{ background: 'var(--gradient-primary)' }}
                >
                  <c.icon className='w-5 h-5 text-primary-foreground' />
                </div>
                <div>
                  <p className='text-xs uppercase tracking-widest text-muted-foreground'>
                    {c.label}
                  </p>
                  <p className='text-foreground group-hover:text-gradient transition-all'>
                    {c.value}
                  </p>
                </div>
              </a>
            ))}

            <div className='glass-card p-6 glow-border'>
              <p className='text-xs uppercase tracking-widest text-muted-foreground mb-4'>
                Follow me
              </p>
              <div className='flex gap-3'>
                {[
                  //   { icon: Linkedin, href: '#' },
                  //   { icon: Github, href: '#' },
                  { icon: Mail, href: 'mailto:maya.atiah.99@gmail.com' },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className='w-11 h-11 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform'
                  >
                    <s.icon className='w-5 h-5 text-foreground' />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
