import { motion } from "framer-motion";
import { useAudioPlayer } from "@/context/AudioContext";
import styles from "./TrackList.module.css";

function formatDuration(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export function TrackList() {
  const { tracks, currentTrack, isPlaying, selectTrack, toggle } = useAudioPlayer();

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
              <br />
              {track.mood}
            </span>
            <span className={styles["track-list__duration"]}>
              {isCurrent && isPlaying ? "Playing" : formatDuration(track.duration)}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
