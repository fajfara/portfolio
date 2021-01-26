const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = (delay = 0) => ({
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
      delay,
    },
  },
});

const stagger = {
  animate: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

export { fadeInUp, stagger };
