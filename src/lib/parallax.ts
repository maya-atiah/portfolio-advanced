import { useEffect, useRef, useState } from 'react';

/**
 * Smooth parallax with requestAnimationFrame + lerp easing.
 */
export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);
  const target = useRef(0);
  const current = useRef(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      target.current = window.scrollY * speed;
    };

    const tick = () => {
      // lerp toward target for buttery scroll
      current.current += (target.current - current.current) * 0.08;
      setOffset(current.current);
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    raf.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [speed]);

  return offset;
};

export const useMousePosition = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);
  return pos;
};

/**
 * Element-level parallax: returns a ref + translateY based on element position
 * relative to viewport. Smoother than scrollY-only approach.
 */
export const useElementParallax = <T extends HTMLElement>(
  speed: number = 0.2,
) => {
  const ref = useRef<T>(null);
  const [y, setY] = useState(0);
  const target = useRef(0);
  const current = useRef(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const compute = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = rect.top + rect.height / 2;
      target.current = (center - vh / 2) * -speed;
    };

    const tick = () => {
      compute();
      current.current += (target.current - current.current) * 0.1;
      setY(current.current);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [speed]);

  return { ref, y };
};
