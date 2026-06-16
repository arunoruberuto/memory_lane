import { MediaFrame } from "@/components/common/MediaFrame";
import { SectionLabel } from "@/components/common/SectionLabel";
import { TrackList } from "@/components/music/TrackList";
import styles from "./MusicPage.module.css";

export function MusicPage() {
  return (
    <>
      <section className={styles["music-page__hero-section"]}>
        <div className={styles["music-page__hero-grid"]}>
          <div>
            <SectionLabel eyebrow="Music / 音のページ" title="Room Tone" />
            <div className={styles["music-page__copy-grid"]}>
              <p className={styles["music-page__copy-label"]}>
                Concept
              </p>
              <p className={styles["music-page__copy"]}>
                Placeholder tracks define the persistent player architecture now; final audio can
                later be dropped into <span className={styles["music-page__path"]}>/public/music</span>
                and wired through the local track data.
              </p>
            </div>
          </div>
          <MediaFrame
            src={`${import.meta.env.BASE_URL}images/placeholders/landscape.svg`}
            alt="Music page image placeholder"
            aspect="landscape"
            caption="Musicのコンセプトと紹介テキスト / イメージ画像"
            className={styles["music-page__media-frame"]}
          />
        </div>
      </section>

      <section className={styles["music-page__list-section"]}>
        <div className={styles["music-page__list-inner"]}>
          <div className={styles["music-page__list-header"]}>
            <p className={styles["music-page__list-eyebrow"]}>
              Music List
            </p>
            <h2 className={styles["music-page__list-title"]}>
              Music Index
            </h2>
          </div>
          <TrackList />
        </div>
      </section>
    </>
  );
}
