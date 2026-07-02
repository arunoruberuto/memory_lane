import { useEffect, useState } from "react";
import { MediaFrame } from "@/components/common/MediaFrame";
import { SectionLabel } from "@/components/common/SectionLabel";
import { photos } from "@/data/photos";
import styles from "./PhotosPage.module.css";

const base = import.meta.env.BASE_URL;
const galleryAspects = ["landscape", "portrait", "square", "wide", "landscape", "portrait"];

export function PhotosPage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    if (!selectedPhoto) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedPhoto(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPhoto]);

  const handlePhotoKeyDown = (event, photo) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedPhoto(photo);
    }
  };

  return (
    <>
      <section className={styles["photos-page__hero-section"]}>
        <div className={styles["photos-page__hero-grid"]}>
          <div>
            <SectionLabel eyebrow="Photos / Gallery" title="Collected Light" />
            <div className={styles["photos-page__copy"]}>
              <p>
                A photography archive using the images stored in public/images.
              </p>
            </div>
          </div>
          <MediaFrame
            src={`${base}images/photos/007.jpg`}
            alt="Photo 007"
            aspect="wide"
            caption="２年間の記憶をここに"
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
              Images loaded from public/images/photos.
            </p>
          </div>

          <div className={styles["photos-page__gallery-grid"]}>
            {photos.map((photo, index) => (
              <article
                key={photo.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedPhoto(photo)}
                onKeyDown={(event) => handlePhotoKeyDown(event, photo)}
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
                  aspect={galleryAspects[index % galleryAspects.length]}
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

      {selectedPhoto ? (
        <div
          className={styles["photos-page__lightbox"]}
          role="dialog"
          aria-modal="true"
          aria-labelledby="photos-lightbox-title"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className={styles["photos-page__lightbox-panel"]}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles["photos-page__lightbox-close"]}
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close photo preview"
            >
              X
            </button>
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className={styles["photos-page__lightbox-image"]}
            />
            <div className={styles["photos-page__lightbox-text"]}>
              <h2
                id="photos-lightbox-title"
                className={styles["photos-page__lightbox-title"]}
              >
                {selectedPhoto.title}
              </h2>
              <p className={styles["photos-page__lightbox-caption"]}>
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
