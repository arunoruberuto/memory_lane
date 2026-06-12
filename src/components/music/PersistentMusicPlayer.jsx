import { motion } from "framer-motion";
import { useAudioPlayer } from "@/context/AudioContext";
import styles from "./PersistentMusicPlayer.module.css";

function formatTime(seconds) {
  const safeSeconds = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(safeSeconds / 60);
  const remainingSeconds = safeSeconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export function PersistentMusicPlayer() {
  const { currentTrack, isPlaying, progress, toggle, seek } = useAudioPlayer();

  return (
    <motion.aside
      className={styles["music-player"]}
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
      aria-label="Persistent music player"
    >
      <div className={styles["music-player__inner"]}>
        <button
          className={styles["music-player__toggle"]}
          type="button"
          onClick={toggle}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? "Ⅱ" : "▶"}
        </button>

        <div className={styles["music-player__details"]}>
          <div className={styles["music-player__row"]}>
            <div className={styles["music-player__track-meta"]}>
              <p className={styles["music-player__label"]}>
                Now Playing
              </p>
              <p className={styles["music-player__title"]}>
                {currentTrack.title}
              </p>
            </div>
            <p className={styles["music-player__time"]}>
              {formatTime(progress)} / {formatTime(currentTrack.duration)}
            </p>
          </div>

          <label className={styles["music-player__sr-only"]} htmlFor="global-player-progress">
            Music timeline
          </label>
          <input
            id="global-player-progress"
            className={styles["music-player__progress"]}
            type="range"
            min={0}
            max={currentTrack.duration}
            step={0.25}
            value={progress}
            onChange={(event) => seek(Number(event.currentTarget.value))}
          />
        </div>

        <p className={styles["music-player__mood"]}>
          {currentTrack.mood}
        </p>
      </div>
    </motion.aside>
  );
}
