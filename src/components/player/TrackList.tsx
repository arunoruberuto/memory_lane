"use client";

import { motion } from "framer-motion";
import { useAudioPlayer } from "@/context/AudioContext";

function formatDuration(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export function TrackList() {
  const { tracks, currentTrack, isPlaying, selectTrack, toggle } = useAudioPlayer();

  return (
    <div className="divide-y divide-ink/15 border-y border-ink/20">
      {tracks.map((track, index) => {
        const isCurrent = track.id === currentTrack.id;

        return (
          <motion.button
            key={track.id}
            className="focus-ring group grid w-full gap-5 py-7 text-left transition hover:bg-ink hover:px-5 hover:text-paper md:grid-cols-[0.12fr_0.48fr_0.28fr_0.12fr]"
            type="button"
            onClick={() => (isCurrent ? toggle() : selectTrack(track.id))}
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.99 }}
            aria-label={`${isCurrent && isPlaying ? "Pause" : "Play"} ${track.title}`}
          >
            <span className="text-xs font-black uppercase tracking-[0.32em] text-graphite group-hover:text-paper/70">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-[clamp(2.2rem,5vw,5rem)] font-black uppercase leading-[0.8] tracking-[-0.075em]">
              {track.title}
            </span>
            <span className="self-end text-sm uppercase leading-relaxed tracking-[0.2em] text-graphite group-hover:text-paper/70">
              {track.artist}
              <br />
              {track.mood}
            </span>
            <span className="self-end justify-self-start text-sm font-bold tabular-nums tracking-[0.2em] md:justify-self-end">
              {isCurrent && isPlaying ? "Playing" : formatDuration(track.duration)}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
