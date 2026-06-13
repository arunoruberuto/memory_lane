"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { members } from "@/data/members";
import { Marquee } from "@/components/common/Marquee";
import { easeOutExpo, revealContainer, revealItem } from "@/components/common/motionPresets";

const posterPlacements = [
  "left-[-8vw] top-[14vh] rotate-[-7deg]",
  "right-[7vw] top-[10vh] rotate-[5deg]",
  "left-[12vw] bottom-[6vh] rotate-[3deg]",
  "right-[-4vw] bottom-[14vh] rotate-[-9deg]",
  "left-[48vw] top-[18vh] hidden rotate-[10deg] md:block"
] as const;

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.28], ["0%", "18%"]);
  const posterY = useTransform(scrollYProgress, [0, 0.28], ["0%", "-10%"]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden px-4 pt-28 md:px-8 md:pt-32">
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-[18vh] z-0 -rotate-3 md:top-[22vh]"
        initial={shouldReduceMotion ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.35 }}
      >
        <Marquee text="PIPW SATO GRADUATION SHOWCASE" />
      </motion.div>

      <motion.div className="pointer-events-none absolute inset-0 z-0" style={{ y: posterY }}>
        {members.slice(0, 5).map((member, index) => (
          <motion.div
            key={member.id}
            className={`absolute aspect-[3/4] w-[38vw] max-w-[15rem] overflow-hidden bg-mist shadow-hairline md:w-[18vw] md:max-w-[19rem] ${posterPlacements[index]}`}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 80, rotate: -2 }}
            animate={{ opacity: 0.88, y: 0, rotate: 0 }}
            transition={{ duration: 0.92, delay: 0.55 + index * 0.1, ease: easeOutExpo }}
          >
            <Image className="object-cover grayscale" src={member.image} alt="" fill sizes="18vw" />
            <div className="absolute inset-0 mix-blend-multiply" style={{ backgroundColor: member.accent, opacity: 0.52 }} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto flex min-h-[calc(100svh-8rem)] max-w-[1500px] flex-col justify-end pb-16 md:pb-20"
        variants={revealContainer}
        initial={shouldReduceMotion ? false : "hidden"}
        animate="visible"
        style={{ y: titleY }}
      >
        <motion.p
          className="mb-7 max-w-xs text-xs font-bold uppercase leading-relaxed tracking-[0.42em] text-graphite md:max-w-none"
          variants={revealItem}
        >
          Graduation Exhibition / Static Portfolio / 2026
        </motion.p>
        <motion.h1
          className="max-w-[13ch] font-display text-[clamp(4.7rem,15vw,15.5rem)] font-black uppercase leading-[0.78] tracking-[-0.095em]"
          variants={revealItem}
        >
          HAL東京<br />2024年 秋生.
        </motion.h1>
        <motion.div
          className="mt-10 grid max-w-5xl gap-8 border-t border-ink/20 pt-6 md:grid-cols-[0.35fr_0.65fr]"
          variants={revealItem}
        >
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-graphite">Main Visual</p>
          <p className="text-lg leading-loose md:text-2xl">
            A motion-led graduation showcase for nine creators: photography, BGM, member stories,
            and the quiet tension of a final exhibition room.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-4 z-10 hidden items-center gap-3 text-xs font-bold uppercase tracking-[0.34em] text-graphite md:flex md:right-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span>Scroll</span>
        <span className="h-12 w-px origin-top animate-[scrollLine_1.8s_ease-in-out_infinite] bg-ink/50" />
      </motion.div>
    </section>
  );
}
