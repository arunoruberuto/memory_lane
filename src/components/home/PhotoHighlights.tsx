"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { photos } from "@/data/photos";
import { SectionLabel } from "@/components/common/SectionLabel";
import { easeOutExpo } from "@/components/common/motionPresets";
import { useHorizontalCarousel } from "./useHorizontalCarousel";

export function PhotoHighlights() {
  const shouldReduceMotion = useReducedMotion();
  const {
    containerRef,
    canScrollPrevious,
    canScrollNext,
    scrollPrevious,
    scrollNext
  } = useHorizontalCarousel();

  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8 md:py-36" id="photo-highlights">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <SectionLabel eyebrow="Photo Highlights / 写真ハイライト" title="Image Drift" />
          <div className="flex gap-3">
            <button
              className="focus-ring h-12 w-12 border border-ink/30 text-lg transition hover:bg-ink hover:text-paper disabled:pointer-events-none disabled:opacity-30"
              type="button"
              onClick={scrollPrevious}
              disabled={!canScrollPrevious}
              aria-label="Scroll photo highlights backward"
            >
              ←
            </button>
            <button
              className="focus-ring h-12 w-12 border border-ink/30 text-lg transition hover:bg-ink hover:text-paper disabled:pointer-events-none disabled:opacity-30"
              type="button"
              onClick={scrollNext}
              disabled={!canScrollNext}
              aria-label="Scroll photo highlights forward"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <motion.div
        ref={containerRef}
        className="scrollbar-none flex snap-x gap-5 overflow-x-auto pl-4 pr-4 md:gap-8 md:pl-[calc((100vw-1500px)/2+2rem)] md:pr-8"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 44 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-12% 0px" }}
        transition={{ duration: 0.82, ease: easeOutExpo }}
      >
        {photos.map((photo, index) => (
          <article
            key={photo.id}
            className={`group min-w-[78vw] snap-start md:min-w-[42rem] ${
              photo.orientation === "portrait" ? "md:min-w-[28rem]" : ""
            }`}
          >
            <div
              className={`relative overflow-hidden bg-mist shadow-hairline ${
                photo.orientation === "portrait"
                  ? "aspect-[3/4]"
                  : photo.orientation === "wide"
                    ? "aspect-[2/1]"
                    : "aspect-[14/9]"
              }`}
            >
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                sizes="(min-width: 768px) 42rem, 78vw"
                className="object-cover transition duration-700 ease-exhibition group-hover:scale-[1.055]"
              />
              <span className="absolute left-4 top-4 text-xs font-black uppercase tracking-[0.32em] mix-blend-difference text-paper">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-5 grid gap-3 border-t border-ink/20 pt-4 md:grid-cols-[0.4fr_0.6fr]">
              <h3 className="font-display text-3xl font-black uppercase leading-none tracking-[-0.06em]">
                {photo.title}
              </h3>
              <p className="text-sm leading-loose text-graphite">{photo.caption}</p>
            </div>
          </article>
        ))}
      </motion.div>
    </section>
  );
}
