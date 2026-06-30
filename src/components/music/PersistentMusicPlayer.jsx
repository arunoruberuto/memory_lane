import { motion } from "framer-motion";
import { useAudioPlayer } from "@/context/AudioContext";
import { members } from "@/data/members";
import styles from "./PersistentMusicPlayer.module.css";

const thsTrackNames = {
  ths1: "Sachiko M.",
  ths2: "Kazuki D.",
  ths3: "Takahiro M.",
  ths4: "Shoko S."
};

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return "--:--";
  }

  const safeSeconds = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(safeSeconds / 60);
  const remainingSeconds = safeSeconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function getMemberLabel(trackId) {
  const trackMemberId = trackId.replace(/m$/, "");
  const member = members.find(({ id }) => id === trackMemberId);

  if (thsTrackNames[trackMemberId]) {
    return `THS - ${thsTrackNames[trackMemberId]}`;
  }

  if (!member) {
    return trackMemberId.toUpperCase();
  }

  return `${member.id}`;
}

export function PersistentMusicPlayer() {
  const {
    currentTrack,
    currentTrackDuration,
    isPlaying,
    progress,
    toggle,
    seek,
    isRepeatOne,
    toggleRepeatOne,
    playPrevious,
    playNext
  } = useAudioPlayer();
  const hasDuration = currentTrackDuration > 0;
  const memberLabel = getMemberLabel(currentTrack.id);

  return (
    <motion.aside
      className={styles["music-player"]}
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
      aria-label="固定ミュージックプレイヤー"
    >
      {isPlaying && (
        <div
          className={styles["music-player__artwork-bg"]}
          style={{ backgroundImage: `url(${currentTrack.artwork})` }}
          aria-hidden="true"
        />
      )}
      <div className={styles["music-player__inner"]}>
        <button
          className={styles["music-player__toggle"]}
          type="button"
          onClick={toggle}
          aria-label={isPlaying ? "音楽を一時停止" : "音楽を再生"}
        >
          {isPlaying ? "Ⅱ" : "▶"}
        </button>

        <div className={styles["music-player__details"]}>
          <div className={styles["music-player__row"]}>
            <div className={styles["music-player__track-meta"]}>
              <p className={styles["music-player__label"]}>
                {memberLabel}
              </p>
              <div className={styles["music-player__title-row"]}>
                <p className={styles["music-player__title"]}>
                  {currentTrack.title}
                </p>
                <p className={styles["music-player__artist"]}>
                  {currentTrack.artist}
                </p>
              </div>
            </div>
            <p className={styles["music-player__time"]}>
              {formatTime(progress)} / {formatTime(currentTrackDuration)}
            </p>
          </div>

          <label className={styles["music-player__sr-only"]} htmlFor="global-player-progress">
            タイムライン
          </label>
          <input
            id="global-player-progress"
            className={styles["music-player__progress"]}
            type="range"
            min={0}
            max={hasDuration ? currentTrackDuration : 1}
            step={0.25}
            value={progress}
            disabled={!hasDuration}
            onChange={(event) => seek(Number(event.currentTarget.value))}
          />
        </div>

        <div className={styles["music-player__skip-controls"]}>
          <button
            className={[
              styles["music-player__toggle"],
              isRepeatOne ? styles["music-player__toggle--active"] : ""
            ].filter(Boolean).join(" ")}
            type="button"
            onClick={toggleRepeatOne}
            aria-pressed={isRepeatOne}
            aria-label="現在の曲をリピート"
          >
            ↻
          </button>
          <button
            className={styles["music-player__toggle"]}
            type="button"
            onClick={playPrevious}
            aria-label="前の曲を再生"
          >
            ⏮
          </button>
          <button
            className={styles["music-player__toggle"]}
            type="button"
            onClick={playNext}
            aria-label="次の曲を再生"
          >
            ⏭
          </button>
        </div>
      </div>
    </motion.aside>
  );
}
