"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeInOutEditorial } from "./motionPresets";

type SectionLabelProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionLabel({
  eyebrow,
  title,
  align = "left",
  className
}: SectionLabelProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={className}>
      <motion.p
        className={`mb-5 text-xs font-semibold uppercase tracking-[0.42em] text-graphite ${
          align === "center" ? "text-center" : ""
        }`}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeInOutEditorial }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className={`font-display text-[clamp(3.4rem,10vw,9.5rem)] font-black uppercase leading-[0.82] tracking-[-0.075em] ${
          align === "center" ? "text-center" : ""
        }`}
        initial={shouldReduceMotion ? false : { y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.82, ease: easeInOutEditorial }}
      >
        <span className="inline-block overflow-hidden pb-3">
          <span className="block">{title}</span>
        </span>
      </motion.h2>
    </div>
  );
}
