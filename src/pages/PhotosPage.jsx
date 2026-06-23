import { MediaFrame } from "@/components/common/MediaFrame";
import { SectionLabel } from "@/components/common/SectionLabel";
import { photos } from "@/data/photos";
import styles from "./PhotosPage.module.css";

export function PhotosPage() {
  return (
    <>
      <section className={styles["photos-page__hero-section"]}>
        <div className={styles["photos-page__hero-grid"]}>
          <div>
            <SectionLabel eyebrow="Photos / 写真ページ" title="Collected Light" />
            <div className={styles["photos-page__copy"]}>
              <p>
                This page follows the wireframe as a dedicated photography archive: concept copy,
                a main image, and a full photo area prepared for future documentation.
              </p>
            </div>
          </div>
          <MediaFrame
            src="/images/placeholders/wide.svg"
            alt="Photography page main image placeholder"
            aspect="wide"
            caption="写真ページのコンセプトと紹介テキスト / イメージ画像"
            className={styles["photos-page__media-frame"]}
          />
        </div>
      </section>

      <section className={styles["photos-page__gallery-section"]}>
        <div className={styles["photos-page__gallery-inner"]}>
          <div className={styles["photos-page__gallery-header"]}>
            <h2 className={styles["photos-page__gallery-title"]}>
              All Photos
            </h2>
            <p className={styles["photos-page__gallery-note"]}>
              Replace placeholder image paths in local data when final photography arrives.
            </p>
          </div>

          <div 
            className={styles["photos-page__gallery-grid"]}
            style={{ transform: "translateZ(0)" }}
          >
            {photos.map((photo, index) => (
              <article
                key={photo.id}
                className={
                  index % 3 === 1
                    ? styles["photos-page__gallery-item--offset-small"]
                    : index % 3 === 2
                      ? styles["photos-page__gallery-item--offset-large"]
                      : ""
                }
              >
                <MediaFrame
                  src={photo.image}
                  alt={photo.title}
                  aspect={photo.orientation === "portrait" ? "portrait" : "landscape"}
                  caption={`${String(index + 1).padStart(2, "0")} / ${photo.caption}`}
                />
                <h3 className={styles["photos-page__photo-title"]}>
                  {photo.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
