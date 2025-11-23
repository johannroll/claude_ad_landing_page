import { Variants } from 'framer-motion';

/**
 * Fade in from bottom animation
 */
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

/**
 * Fade in animation
 */
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

/**
 * Scale in animation
 */
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

/**
 * Slide in from right animation
 */
export const slideInRight: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

/**
 * Slide in from left animation
 */
export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

/**
 * Stagger children animation container
 */
export const staggerChildren: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/**
 * Stagger children with faster timing
 */
export const staggerChildrenFast: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

/**
 * Stagger children with slower timing
 */
export const staggerChildrenSlow: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

/**
 * Bounce animation
 */
export const bounce: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
};

/**
 * Pulse animation
 */
export const pulse: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
};

/**
 * Rotate animation
 */
export const rotate: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

/**
 * Default transition settings
 */
export const defaultTransition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};

/**
 * Fast transition settings
 */
export const fastTransition = {
  duration: 0.3,
  ease: [0.43, 0.13, 0.23, 0.96],
};

/**
 * Slow transition settings
 */
export const slowTransition = {
  duration: 0.9,
  ease: [0.43, 0.13, 0.23, 0.96],
};

/**
 * Spring transition settings
 */
export const springTransition = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30,
};

/**
 * Viewport settings for scroll animations
 */
export const defaultViewport = {
  once: true,
  margin: '-100px',
};

/**
 * Animation preset for hero sections
 */
export const heroAnimation: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

/**
 * Animation preset for card hover
 */
export const cardHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    y: -4,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

/**
 * Animation preset for button hover
 */
export const buttonHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.95,
  },
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get animation variants with reduced motion support
 */
export const getAnimationVariants = (variants: Variants): Variants => {
  if (prefersReducedMotion()) {
    return {
      initial: variants.animate,
      animate: variants.animate,
    };
  }
  return variants;
};
