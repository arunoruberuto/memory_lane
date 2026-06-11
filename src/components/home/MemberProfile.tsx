"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Member } from "@/data/members";
import { MediaFrame } from "@/components/common/MediaFrame";
import { Marquee } from "@/components/common/Marquee";
import { easeOutExpo, revealContainer, revealItem } from "@/components/common/motionPresets";

type MemberProfileProps = {
  member: Member;
  otherMembers: Member[];
};

export function MemberProfile({ member, otherMembers }: MemberProfileProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <section className="relative overflow-hidden px-4 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
        <div className="absolute inset-x-0 top-28 -rotate-2 opacity-70">
          <Marquee text={`${member.name} / ${member.role}`} reverse />
        </div>

        <motion.div
          className="relative z-10 mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
          variants={revealContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
        >
          <motion.div variants={revealItem}>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.42em] text-graphite">
              Member Profile
            </p>
            <h1 className="font-display text-[clamp(5rem,14vw,15rem)] font-black uppercase leading-[0.76] tracking-[-0.1em]">
              {member.name}
            </h1>
            <div className="mt-8 grid gap-6 border-t border-ink/20 pt-6 md:grid-cols-[0.35fr_0.65fr]">
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-graphite">{member.role}</p>
              <p className="text-xl leading-loose md:text-2xl">{member.bio}</p>
            </div>
          </motion.div>

          <motion.div variants={revealItem} className="lg:pl-10">
            <MediaFrame
              src={member.image}
              alt={`${member.name} profile image placeholder`}
              aspect="portrait"
              caption="人物紹介メインビジュアル"
              className="mx-auto max-w-xl rotate-1"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.55fr_0.45fr]">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.82, ease: easeOutExpo }}
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.42em] text-graphite">
              Text Area / Statement
            </p>
            <p className="font-display text-[clamp(2.8rem,7vw,8rem)] font-black uppercase leading-[0.85] tracking-[-0.08em]">
              {member.statement}
            </p>
          </motion.div>

          <motion.div
            className="self-end"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.82, ease: easeOutExpo, delay: 0.08 }}
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.42em] text-graphite">
              個人エリア / Works
            </p>
            <ul className="divide-y divide-ink/15 border-y border-ink/20">
              {member.works.map((work) => (
                <li key={work.title} className="grid gap-4 py-5 md:grid-cols-[1fr_auto]">
                  <div>
                    <p className="font-display text-3xl font-black uppercase leading-none tracking-[-0.06em]">
                      {work.title}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.28em] text-graphite">{work.medium}</p>
                  </div>
                  <p className="text-sm font-bold tabular-nums tracking-[0.24em] text-graphite">{work.year}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              {member.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-ink/20 px-3 py-2 text-xs uppercase tracking-[0.24em] text-graphite"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.42em] text-graphite">
                Other Members
              </p>
              <h2 className="font-display text-[clamp(3rem,8vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.08em]">
                Next Wall
              </h2>
            </div>
            <Link className="focus-ring hidden text-xs font-bold uppercase tracking-[0.32em] underline md:block" href="/">
              Back to Top
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {otherMembers.slice(0, 4).map((otherMember) => (
              <Link
                href={`/members/${otherMember.id}`}
                key={otherMember.id}
                className="focus-ring group border-t border-ink/20 pt-4"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                  <Image
                    src={otherMember.image}
                    alt={`${otherMember.name} portrait placeholder`}
                    fill
                    sizes="(min-width: 768px) 25vw, 100vw"
                    className="object-cover grayscale transition duration-700 group-hover:scale-[1.06] group-hover:grayscale-0"
                  />
                </div>
                <p className="mt-4 font-display text-3xl font-black uppercase leading-none tracking-[-0.06em]">
                  {otherMember.name}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.24em] text-graphite">{otherMember.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
