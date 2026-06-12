import { motion, useReducedMotion } from "framer-motion";
import { AppImage as Image } from "@/components/common/AppImage";
import { photos } from "@/data/photos";
import { SectionLabel } from "@/components/common/SectionLabel";
import { easeOutExpo } from "@/components/common/motionPresets";
import { useHorizontalCarousel } from "./useHorizontalCarousel";
import styles from "./PhotoHighlights.module.css";

const orientationClasses = {
  landscape: styles["photo-highlights__image-frame--landscape"],
  portrait: styles["photo-highlights__image-frame--portrait"],
  wide: styles["photo-highlights__image-frame--wide"]
};

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
    <section className={styles["photo-highlights"]} id="photo-highlights">
      <div className={styles["photo-highlights__inner"]}>
        <div className={styles["photo-highlights__header"]}>
          <SectionLabel eyebrow="Photo Highlights / 写真ハイライト" title="Image Drift" />
          <div className={styles["photo-highlights__controls"]}>
            <button
              className={styles["photo-highlights__control"]}
              type="button"
              onClick={scrollPrevious}
              disabled={!canScrollPrevious}
              aria-label="Scroll photo highlights backward"
            >
              ←
            </button>
            <button
              className={styles["photo-highlights__control"]}
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
        className={styles["photo-highlights__carousel"]}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 44 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-12% 0px" }}
        transition={{ duration: 0.82, ease: easeOutExpo }}
      >
        {photos.map((photo, index) => (
          <article
            key={photo.id}
            className={[
              styles["photo-highlights__card"],
              photo.orientation === "portrait" ? styles["photo-highlights__card--portrait"] : ""
            ].filter(Boolean).join(" ")}
          >
            <div className={[styles["photo-highlights__image-frame"], orientationClasses[photo.orientation]].join(" ")}>
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                sizes="(min-width: 768px) 42rem, 78vw"
                className={styles["photo-highlights__image"]}
              />
              <span className={styles["photo-highlights__index"]}>
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className={styles["photo-highlights__caption-grid"]}>
              <h3 className={styles["photo-highlights__title"]}>
                {photo.title}
              </h3>
              <p className={styles["photo-highlights__caption"]}>{photo.caption}</p>
            </div>
          </article>
        ))}
      </motion.div>
    </section>
  );
}
