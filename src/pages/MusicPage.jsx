import { SectionLabel } from "@/components/common/SectionLabel";
import { TrackList } from "@/components/music/TrackList";
import { useAudioPlayer } from "@/context/AudioContext";
import styles from "./MusicPage.module.css";

export function MusicPage() {
  const { currentTrack, isPlaying } = useAudioPlayer();
  const discClassName = [
    styles["music-page__disc"],
    isPlaying ? styles["music-page__disc--playing"] : ""
  ].filter(Boolean).join(" ");

  return (
    <>
      <section className={styles["music-page__hero-section"]}>
        <div className={styles["music-page__hero-grid"]}>
          <div>
            <SectionLabel eyebrow="音楽 / 卒業コンピレーション" title="卒業に向けて一曲を" />
            <div className={styles["music-page__copy-grid"]}>
              <p className={styles["music-page__copy-label"]}>
                コンセプト
              </p>
              <p className={styles["music-page__copy"]}>
                音楽を通して、<br/>
                卒業に向けたそれぞれの想いを<br/>
                一曲ずつ呼び覚まします。
              </p>
            </div>
          </div>
          <div
            className={styles["music-page__disc-stage"]}
            role="img"
            aria-label={`${currentTrack.title}のアートワークディスク`}
          >
            <div key={currentTrack.id} className={discClassName}>
              <img
                className={styles["music-page__disc-artwork"]}
                src={currentTrack.artwork}
                alt={`${currentTrack.title}のカバーアート`}
              />
              <span className={styles["music-page__disc-hole"]} aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles["music-page__list-section"]}>
        <div className={styles["music-page__list-inner"]}>
          <div className={styles["music-page__list-header"]}>
            <p className={styles["music-page__list-eyebrow"]}>
              トラックリスト
            </p>
            <h2 className={styles["music-page__list-title"]}>
              トラックリスト
            </h2>
          </div>
          <TrackList />
        </div>
      </section>
    </>
  );
}
