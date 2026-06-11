"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MediaFrame } from "@/components/common/MediaFrame";
import { SectionLabel } from "@/components/common/SectionLabel";
import { easeOutExpo } from "@/components/common/motionPresets";

export function ConceptSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative px-4 py-24 md:px-8 md:py-36" id="concept">
      <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div className="order-2 lg:order-1">
          <MediaFrame
            src="/images/placeholders/wide.svg"
            alt="Placeholder image representing the graduation exhibition concept"
            aspect="wide"
            caption="Concept image area defined by the wireframe. Replace with exhibition photography."
            className="lg:-rotate-2"
          />
        </div>
        <motion.div
          className="order-1 lg:order-2"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.9, ease: easeOutExpo }}
        >
          <SectionLabel eyebrow="Concept / 画像とテキスト" title="A Last Room Before The Next." />
          <div className="mt-10 grid gap-8 border-t border-ink/20 pt-8 md:grid-cols-[0.35fr_0.65fr]">
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-graphite">Curatorial Note</p>
            <div className="space-y-7 text-lg leading-loose md:text-2xl">
              <p>
                This site treats the graduation project as an exhibition wall: names, photographs,
                music, and fragments of process are arranged with enough silence to feel intentional.
              </p>
              <p>
                The wireframe hierarchy stays intact, but each section is paced like a gallery walk:
                a large visual opening, a conceptual pause, then member discovery and photographic highlights.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
