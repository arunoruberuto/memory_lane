import { motion } from "framer-motion";
import { useAudioPlayer } from "@/context/AudioContext";
import styles from "./TrackList.module.css";

function formatDuration(seconds) {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return "--:--";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export function TrackList() {
  const { tracks, trackDurations, currentTrack, isPlaying, selectTrack, toggle } = useAudioPlayer();

  return (
    <div className={styles["track-list"]}>
      {tracks.map((track, index) => {
        const isCurrent = track.id === currentTrack.id;

        return (
          <motion.button
            key={track.id}
            className={styles["track-list__track"]}
            type="button"
            onClick={() => (isCurrent ? toggle() : selectTrack(track.id))}
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.99 }}
            aria-label={`${isCurrent && isPlaying ? "Pause" : "Play"} ${track.title}`}
          >
            <span className={styles["track-list__index"]}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={styles["track-list__title"]}>
              {track.title}
            </span>
            <span className={styles["track-list__meta"]}>
              {track.artist}
            </span>
            <span className={styles["track-list__duration"]}>
              {formatDuration(trackDurations[track.id])}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
