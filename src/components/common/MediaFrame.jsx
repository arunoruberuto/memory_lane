import { motion, useReducedMotion } from "framer-motion";
import { AppImage as Image } from "@/components/common/AppImage";
import { imageReveal } from "./motionPresets";
import styles from "./MediaFrame.module.css";

const aspectClasses = {
  portrait: styles["media-frame--portrait"],
  landscape: styles["media-frame--landscape"],
  wide: styles["media-frame--wide"],
  square: styles["media-frame--square"]
};

export function MediaFrame({
  src,
  alt,
  caption,
  aspect = "landscape",
  className,
  imageClassName
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.figure
      className={className}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={imageReveal}
    >
      <div className={[styles["media-frame"], aspectClasses[aspect]].join(" ")}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={[styles["media-frame__image"], imageClassName].filter(Boolean).join(" ")}
        />
        <div className={styles["media-frame__overlay"]} />
      </div>
      {caption ? (
        <figcaption className={styles["media-frame__caption"]}>
          {caption}
        </figcaption>
      ) : null}
    </motion.figure>
  );
}
