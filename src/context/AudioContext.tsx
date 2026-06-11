"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { tracks } from "@/data/tracks";
import type { Track } from "@/data/tracks";

type StoredAudioState = {
  currentTrackId: string;
  progress: number;
};

type AudioContextValue = {
  tracks: Track[];
  currentTrack: Track;
  currentTrackIndex: number;
  isPlaying: boolean;
  progress: number;
  play: () => void;
  pause: () => void;
  toggle: () => void;
  seek: (value: number) => void;
  selectTrack: (trackId: string) => void;
};

const STORAGE_KEY = "pipw-sato-audio-state";
const AudioPlayerContext = createContext<AudioContextValue | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [currentTrackId, setCurrentTrackId] = useState(tracks[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const currentTrackIndex = Math.max(
    0,
    tracks.findIndex((track) => track.id === currentTrackId)
  );
  const currentTrack = tracks[currentTrackIndex] ?? tracks[0];

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return;
    }

    try {
      const parsed = JSON.parse(stored) as StoredAudioState;
      if (tracks.some((track) => track.id === parsed.currentTrackId)) {
        setCurrentTrackId(parsed.currentTrackId);
      }
      if (Number.isFinite(parsed.progress)) {
        setProgress(Math.max(0, parsed.progress));
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ currentTrackId, progress } satisfies StoredAudioState)
    );
  }, [currentTrackId, progress]);

  useEffect(() => {
    if (!isPlaying) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setProgress((current) => {
        if (current >= currentTrack.duration) {
          return 0;
        }

        return Math.min(currentTrack.duration, current + 0.25);
      });
    }, 250);

    return () => window.clearInterval(interval);
  }, [currentTrack.duration, isPlaying]);

  const play = useCallback(() => setIsPlaying(true), []);
  const pause = useCallback(() => setIsPlaying(false), []);
  const toggle = useCallback(() => setIsPlaying((current) => !current), []);

  const seek = useCallback(
    (value: number) => {
      setProgress(Math.min(Math.max(value, 0), currentTrack.duration));
    },
    [currentTrack.duration]
  );

  const selectTrack = useCallback((trackId: string) => {
    if (!tracks.some((track) => track.id === trackId)) {
      return;
    }

    setCurrentTrackId(trackId);
    setProgress(0);
    setIsPlaying(true);
  }, []);

  const value = useMemo<AudioContextValue>(
    () => ({
      tracks,
      currentTrack,
      currentTrackIndex,
      isPlaying,
      progress,
      play,
      pause,
      toggle,
      seek,
      selectTrack
    }),
    [currentTrack, currentTrackIndex, isPlaying, pause, play, progress, seek, selectTrack, toggle]
  );

  return <AudioPlayerContext.Provider value={value}>{children}</AudioPlayerContext.Provider>;
}

export function useAudioPlayer() {
  const context = useContext(AudioPlayerContext);

  if (!context) {
    throw new Error("useAudioPlayer must be used within AudioProvider");
  }

  return context;
}
