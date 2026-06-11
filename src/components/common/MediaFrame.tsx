"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { imageReveal } from "./motionPresets";

type MediaFrameProps = {
  src: string;
  alt: string;
  caption?: string;
  aspect?: "portrait" | "landscape" | "wide" | "square";
  className?: string;
  imageClassName?: string;
};

const aspectClasses: Record<NonNullable<MediaFrameProps["aspect"]>, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[14/9]",
  wide: "aspect-[2/1]",
  square: "aspect-square"
};

export function MediaFrame({
  src,
  alt,
  caption,
  aspect = "landscape",
  className,
  imageClassName
}: MediaFrameProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.figure
      className={className}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={imageReveal}
    >
      <div className={`group relative overflow-hidden bg-mist shadow-hairline ${aspectClasses[aspect]}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={`object-cover transition duration-700 ease-exhibition group-hover:scale-[1.055] ${
            imageClassName ?? ""
          }`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-paper/10 opacity-70" />
      </div>
      {caption ? (
        <figcaption className="mt-3 max-w-sm text-xs uppercase leading-relaxed tracking-[0.2em] text-graphite">
          {caption}
        </figcaption>
      ) : null}
    </motion.figure>
  );
}
