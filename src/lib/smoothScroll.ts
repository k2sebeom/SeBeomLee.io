import Lenis from 'lenis';

let lenis: Lenis | null = null;

export const initSmoothScroll = (): (() => void) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => undefined;
  }
  lenis = new Lenis({ autoRaf: true, lerp: 0.1 });
  return () => {
    lenis?.destroy();
    lenis = null;
  };
};

export const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: id === 'hero' ? 0 : -24 });
  else el.scrollIntoView({ behavior: 'smooth' });
};
