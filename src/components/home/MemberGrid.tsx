"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { members } from "@/data/members";
import { SectionLabel } from "@/components/common/SectionLabel";
import { easeOutExpo } from "@/components/common/motionPresets";

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.085,
      delayChildren: 0.1
    }
  }
};

const memberVariants = {
  hidden: {
    opacity: 0,
    y: 56,
    clipPath: "inset(18% 0% 0% 0%)"
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.82,
      ease: easeOutExpo
    }
  }
};

export function MemberGrid() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative px-4 py-24 md:px-8 md:py-36" id="members">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 grid gap-10 md:mb-20 md:grid-cols-[0.7fr_0.3fr] md:items-end">
          <SectionLabel eyebrow="Members / 3x3 Gallery" title="Nine Creators" />
          <p className="max-w-md text-sm uppercase leading-loose tracking-[0.22em] text-graphite md:justify-self-end md:text-right">
            The homepage centerpiece is an exhibition wall, not a team-card list.
          </p>
        </div>

        <motion.div
          className="grid gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-20"
          variants={gridVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          {members.map((member, index) => (
            <motion.article key={member.id} variants={memberVariants} className="group">
              <Link
                href={`/members/${member.id}`}
                className="focus-ring block"
                aria-label={`View ${member.name}, ${member.role}`}
              >
                <div className="relative overflow-hidden border-t border-ink/30 pt-4">
                  <div className="mb-3 flex items-center justify-between text-[0.68rem] font-bold uppercase tracking-[0.28em] text-graphite">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{member.role}</span>
                  </div>
                  <div className="relative aspect-[3/4] overflow-hidden bg-mist">
                    <Image
                      src={member.image}
                      alt={`${member.name} portrait placeholder`}
                      fill
                      sizes="(min-width: 768px) 31vw, 100vw"
                      className="object-cover grayscale transition duration-700 ease-exhibition group-hover:scale-[1.07] group-hover:grayscale-0"
                    />
                    <div
                      className="absolute inset-0 opacity-0 mix-blend-multiply transition duration-500 group-hover:opacity-60"
                      style={{ backgroundColor: member.accent }}
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                      <h3 className="font-display text-[clamp(2.4rem,5vw,5rem)] font-black uppercase leading-[0.78] tracking-[-0.08em] text-paper mix-blend-difference">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 max-w-sm text-sm leading-loose text-graphite transition-colors group-hover:text-ink">
                    {member.bio}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
