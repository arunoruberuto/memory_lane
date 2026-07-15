import { motion, useReducedMotion } from "framer-motion";
import { easeInOutEditorial } from "./motionPresets";
import styles from "./SectionLabel.module.css";

export function SectionLabel({ eyebrow, title, align = "left", className }) {
  const shouldReduceMotion = useReducedMotion();
  const alignedClassName = align === "center" ? styles["section-label--center"] : "";

  return (
    <div className={className}>
      <motion.p
        className={[styles["section-label__eyebrow"], alignedClassName].filter(Boolean).join(" ")}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeInOutEditorial }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className={[styles["section-label__title"], alignedClassName].filter(Boolean).join(" ")}
        initial={shouldReduceMotion ? false : { y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.82, ease: easeInOutEditorial }}
      >
        <span className={styles["section-label__title-clip"]}>
          <span className={styles["section-label__title-text"]}>{title}</span>
        </span>
      </motion.h2>
    </div>
  );
}
