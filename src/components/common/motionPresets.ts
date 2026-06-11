import type { Variants } from "framer-motion";

export const easeOutExpo = [0.22, 1, 0.36, 1] as const;
export const easeInOutEditorial = [0.645, 0.045, 0.355, 1] as const;

export const revealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08
    }
  }
};

export const revealItem: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    filter: "blur(8px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.86,
      ease: easeOutExpo
    }
  }
};

export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.08,
    clipPath: "inset(18% 0% 18% 0%)"
  },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 1.08,
      ease: easeOutExpo
    }
  }
};
