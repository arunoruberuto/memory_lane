import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { AppImage as Image } from "@/components/common/AppImage";
import { photos } from "@/data/photos";
import { SectionLabel } from "@/components/common/SectionLabel";
import { easeOutExpo } from "@/components/common/motionPresets";
import { useHorizontalCarousel } from "./useHorizontalCarousel";
import styles from "./PhotoHighlights.module.css";

function selectRandomPhotos(photoList, count) {
  const shuffled = [...photoList];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled.slice(0, count);
}

export function PhotoHighlights() {
  const shouldReduceMotion = useReducedMotion();
  const highlightedPhotos = useMemo(() => selectRandomPhotos(photos, 8), []);
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
        {highlightedPhotos.map((photo) => (
          <article
            key={photo.id}
            className={styles["photo-highlights__card"]}
          >
            <div className={styles["photo-highlights__image-frame"]}>
              <Image
                src={photo.image}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 42rem, 78vw"
                className={styles["photo-highlights__image"]}
              />
              <span className={styles["photo-highlights__index"]}>
                {photo.id.replace("photo-", "")}
              </span>
            </div>
            <div className={styles["photo-highlights__caption-grid"]}>
              <h3 className={styles["photo-highlights__title"]}>
                {photo.title}
              </h3>
            </div>
          </article>
        ))}
        <Link
          className={[styles["photo-highlights__card"], styles["photo-highlights__more-link"]].join(" ")}
          to="/photos"
        >
          <span className={styles["photo-highlights__more-arrow"]} aria-hidden="true">→</span>
          <span>PHOTOSページへ。</span>
        </Link>
      </motion.div>
    </section>
  );
}
