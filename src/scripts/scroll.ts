import Lenis from 'lenis';

/**
 * Site-wide scroll experience:
 *  1. Lenis momentum smooth-scroll (the "Marathon" buttery feel).
 *  2. Layered parallax on [data-parallax] elements (depth on the giant numerals,
 *     tactical grid, headings, etc.).
 *  3. Reveal-on-scroll animations on [data-reveal] elements.
 *
 * All motion is disabled for users who prefer reduced motion.
 */

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Expose so other scripts (e.g. the section-jump nav) can drive smooth scrolling.
declare global {
  interface Window {
    lenis?: Lenis;
  }
}

/* ------------------------------------------------------------------ *
 * 1. Lenis smooth scroll
 * ------------------------------------------------------------------ */
let lenis: Lenis | null = null;

if (!prefersReduced) {
  lenis = new Lenis({
    duration: 1.15,
    // easeOutExpo — long, weighty glide that settles softly
    easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.6,
  });

  window.lenis = lenis;

  const raf = (time: number) => {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

/* ------------------------------------------------------------------ *
 * 2. Parallax
 *    data-parallax        = speed factor for in-flow elements (drift is
 *                           measured from the element's own viewport position).
 *    data-parallax-fixed  = speed factor for position:fixed / full-bleed layers
 *                           (driven by the raw scroll offset instead).
 *    Positive drifts slower than scroll (recedes); negative moves against it.
 * ------------------------------------------------------------------ */
const parallaxEls = Array.from(
  document.querySelectorAll<HTMLElement>('[data-parallax]')
);
const parallaxFixedEls = Array.from(
  document.querySelectorAll<HTMLElement>('[data-parallax-fixed]')
);

function updateParallax() {
  const vh = window.innerHeight;
  for (const el of parallaxEls) {
    const speed = parseFloat(el.dataset.parallax || '0');
    const rect = el.getBoundingClientRect();
    // -1 (element centered above viewport) .. 1 (centered below)
    const center = rect.top + rect.height / 2;
    const progress = (center - vh / 2) / vh;
    const shift = -progress * speed * 100;
    el.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0)`;
  }

  const scrollY = window.scrollY;
  for (const el of parallaxFixedEls) {
    const speed = parseFloat(el.dataset.parallaxFixed || '0');
    const shift = scrollY * speed;
    el.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0)`;
  }
}

const hasParallax = parallaxEls.length > 0 || parallaxFixedEls.length > 0;

if (!prefersReduced && hasParallax) {
  [...parallaxEls, ...parallaxFixedEls].forEach((el) => {
    el.style.willChange = 'transform';
  });
  if (lenis) {
    lenis.on('scroll', updateParallax);
  } else {
    window.addEventListener('scroll', updateParallax, { passive: true });
  }
  window.addEventListener('resize', updateParallax);
  updateParallax();
}

/* ------------------------------------------------------------------ *
 * 3. Reveal on scroll
 * ------------------------------------------------------------------ */
const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');

if (revealEls.length) {
  if (prefersReduced) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = el.dataset.revealDelay;
          if (delay) el.style.transitionDelay = `${delay}ms`;
          el.classList.add('is-visible');
          io.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  }
}
