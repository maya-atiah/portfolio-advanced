import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, CheckCircle, XCircle } from 'lucide-react';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';
import { toast } from 'sonner';

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
  {
    icon: MapPin,
    label: 'Location',
    value: 'Beirut, Lebanon',
    href: '#',
  },
];

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('revealed');
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      formRef.current.reset();

      toast.success('Message sent successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id='contact'
      ref={sectionRef}
      className='section-wrapper scroll-reveal relative'
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

            <form ref={formRef} onSubmit={handleSubmit} className='space-y-4'>
              <Input
                name='from_name'
                placeholder='Your Name'
                required
                className='bg-muted/40 border-border'
              />

              <Input
                name='reply_to'
                type='email'
                placeholder='Your Email'
                required
                className='bg-muted/40 border-border'
              />

              <Input
                name='subject'
                placeholder='Subject'
                className='bg-muted/40 border-border'
              />

              <Textarea
                name='message'
                placeholder='Your Message'
                required
                className='bg-muted/40 border-border min-h-[160px]'
              />

              <Button
                type='submit'
                className='btn-primary w-full'
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          <div className='space-y-4'>
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className='glass-card p-6 glow-border flex items-center gap-4 hover:bg-card/60 transition-all group'
              >
                <div
                  className='w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0'
                  style={{ background: 'var(--gradient-primary)' }}
                >
                  <contact.icon className='w-5 h-5 text-primary-foreground' />
                </div>

                <div>
                  <p className='text-xs uppercase tracking-widest text-muted-foreground'>
                    {contact.label}
                  </p>
                  <p className='text-foreground transition-all group-hover:opacity-90'>
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
