import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo } from "./motionPresets";

export function Reveal({ children, className, delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();
  const variants = {
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
        ease: easeOutExpo,
        delay
      }
    }
  };

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-12% 0px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
