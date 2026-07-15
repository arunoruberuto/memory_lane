import { SectionLabel } from "@/components/common/SectionLabel";
import { TrackList } from "@/components/music/TrackList";
import { useAudioPlayer } from "@/context/AudioContext";
import styles from "./MusicPage.module.css";

export function MusicPage() {
  // 共有プレイヤーから現在の曲と再生状態を受け取ります。
  const { currentTrack, isPlaying } = useAudioPlayer();

  // 再生中だけディスク回転用のクラスを追加します。
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
          {/* 現在の曲のアートワークをCD風ディスクとして表示します。 */}
          <div
            className={styles["music-page__disc-stage"]}
            role="img"
            aria-label={`${currentTrack.title}のアートワークディスク`}
          >
            {/* 曲IDをkeyにして、曲が切り替わるたびにディスク表示を更新します。 */}
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
          {/* 下のTrackListで曲の一覧と曲切り替え操作を表示します。 */}
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
