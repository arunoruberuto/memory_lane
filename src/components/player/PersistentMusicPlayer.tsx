"use client";

import { motion } from "framer-motion";
import { useAudioPlayer } from "@/context/AudioContext";

function formatTime(seconds: number) {
  const safeSeconds = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(safeSeconds / 60);
  const remainingSeconds = safeSeconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export function PersistentMusicPlayer() {
  const { currentTrack, isPlaying, progress, toggle, seek } = useAudioPlayer();

  return (
    <motion.aside
      className="fixed bottom-0 left-0 z-50 w-full border-t border-ink/15 bg-paper/88 px-4 py-4 backdrop-blur-xl md:px-8"
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
      aria-label="Persistent music player"
    >
      <div className="mx-auto grid max-w-[1500px] gap-4 md:grid-cols-[auto_1fr_auto] md:items-center">
        <button
          className="focus-ring flex h-12 w-12 items-center justify-center border border-ink text-sm font-black transition hover:bg-ink hover:text-paper"
          type="button"
          onClick={toggle}
          aria-label={isPlaying ? "Pause BGM" : "Play BGM"}
        >
          {isPlaying ? "Ⅱ" : "▶"}
        </button>

        <div className="min-w-0">
          <div className="mb-3 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="truncate text-xs font-bold uppercase tracking-[0.3em] text-graphite">
                Now Playing
              </p>
              <p className="truncate font-display text-2xl font-black uppercase leading-none tracking-[-0.05em]">
                {currentTrack.title}
              </p>
            </div>
            <p className="shrink-0 text-xs font-bold tabular-nums tracking-[0.18em] text-graphite">
              {formatTime(progress)} / {formatTime(currentTrack.duration)}
            </p>
          </div>

          <label className="sr-only" htmlFor="global-player-progress">
            Music timeline
          </label>
          <input
            id="global-player-progress"
            className="h-1 w-full cursor-pointer appearance-none bg-ink/15 accent-ink"
            type="range"
            min={0}
            max={currentTrack.duration}
            step={0.25}
            value={progress}
            onChange={(event) => seek(Number(event.currentTarget.value))}
          />
        </div>

        <p className="hidden max-w-[18rem] text-right text-xs uppercase leading-relaxed tracking-[0.24em] text-graphite md:block">
          {currentTrack.mood}
        </p>
      </div>
    </motion.aside>
  );
}
