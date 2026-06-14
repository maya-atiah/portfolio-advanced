import { useMousePosition, useParallax } from '../../lib/parallax';

const HeroSection = () => {
  const heroOffset = useParallax(0.3);

  const mouse = useMousePosition();

  const tiltX = (mouse.x / window.innerWidth - 0.5) * 10;
  const tiltY = (mouse.y / window.innerHeight - 0.5) * 10;

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-8 lg:px-16 pt-24'
    >
      <div
        className='max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center'
        style={{ transform: `translateY(${heroOffset * 0.4}px)` }}
      >
        <div className='flex flex-col justify-center order-2 md:order-1 '>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 leading-tight text-foreground'>
            Maya Atiah
          </h1>

          <div
            className='inline-block w-fit px-5 py-2 mb-6 rounded-md text-primary-foreground font-semibold tracking-wide'
            style={{ background: 'var(--gradient-primary)' }}
          >
            Software Developer
          </div>

          <p className='text-muted-foreground mb-8 max-w-lg text-base md:text-lg leading-relaxed'>
            Crafting scalable enterprise web applications with React,
            TypeScript, and AI-driven platforms. 3+ years building real-time
            dashboards and workflow systems that move the needle.
          </p>
        </div>

        <div
          className='relative flex justify-center items-center order-1 md:order-2'
          style={{
            transform: `perspective(1000px) rotateY(${tiltX}deg) rotateX(${-tiltY}deg)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <div
            className='absolute w-[420px] h-[420px] md:w-[480px] md:h-[480px] rounded-full opacity-60 blur-3xl animate-pulse-glow'
            style={{ background: 'var(--gradient-primary)' }}
          />

          <div
            className='relative w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full p-[3px]'
            style={{ background: 'var(--gradient-primary)' }}
          >
            <div className='w-full h-full rounded-full overflow-hidden bg-background'>
              <img
                src='images/image.jpeg'
                alt='Maya Atiah'
                className='w-full h-full object-cover object-center'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
