import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { tracks } from "@/data/tracks";

const STORAGE_KEY = "pipw-sato-audio-state";
const AudioPlayerContext = createContext(undefined);

function getFiniteDuration(duration) {
  return Number.isFinite(duration) && duration > 0 ? duration : 0;
}

function clampTime(value, duration) {
  const safeValue = Number.isFinite(value) ? value : 0;
  const max = getFiniteDuration(duration);

  if (max <= 0) {
    return Math.max(0, safeValue);
  }

  return Math.min(Math.max(0, safeValue), max);
}

function readStoredAudioState() {
  if (typeof window === "undefined") {
    return {};
  }

  let stored;

  try {
    stored = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return {};
  }

  if (!stored) {
    return {};
  }

  try {
    const parsed = JSON.parse(stored);
    const nextState = {};

    if (tracks.some((track) => track.id === parsed.currentTrackId)) {
      nextState.currentTrackId = parsed.currentTrackId;
    }

    if (Number.isFinite(parsed.progress)) {
      nextState.progress = Math.max(0, parsed.progress);
    }

    return nextState;
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    return {};
  }
}

export function AudioProvider({ children }) {
  const audioRef = useRef(null);
  const currentTrackIdRef = useRef(tracks[0].id);
  const progressRef = useRef(0);
  const isRepeatOneRef = useRef(false);
  const [currentTrackId, setCurrentTrackId] = useState(tracks[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeatOne, setIsRepeatOne] = useState(false);
  const [progress, setProgress] = useState(0);
  const [trackDurations, setTrackDurations] = useState({});

  const currentTrackIndex = Math.max(
    0,
    tracks.findIndex((track) => track.id === currentTrackId),
  );
  const currentTrack = tracks[currentTrackIndex] ?? tracks[0];
  const currentTrackDuration = trackDurations[currentTrack.id] ?? 0;

  useEffect(() => {
    currentTrackIdRef.current = currentTrack.id;
  }, [currentTrack.id]);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    isRepeatOneRef.current = isRepeatOne;
  }, [isRepeatOne]);

  const startTrack = useCallback(
    (track, startProgress = 0) => {
      const audio = audioRef.current;

      if (!audio) {
        return;
      }

      const nextSrc = new URL(track.src, window.location.href).href;

      if (audio.src !== nextSrc) {
        audio.pause();
        audio.src = track.src;
      }

      currentTrackIdRef.current = track.id;
      progressRef.current = startProgress;
      setCurrentTrackId(track.id);
      setProgress(startProgress);
      audio.currentTime = startProgress;

      const playPromise = audio.play();
      setIsPlaying(true);

      if (playPromise) {
        playPromise.catch(() => {
          setIsPlaying(false);
        });
      }
    },
    [],
  );

  useEffect(() => {
    const audio = new Audio();
    audio.preload = "metadata";
    audioRef.current = audio;

    const handleLoadedMetadata = () => {
      if (!Number.isFinite(audio.duration)) {
        return;
      }

      setTrackDurations((current) => ({
        ...current,
        [currentTrackIdRef.current]: audio.duration,
      }));
      setProgress((current) => Math.min(current, audio.duration));
    };

    const handleTimeUpdate = () => {
      setProgress(audio.currentTime);
    };

    const handleEnded = () => {
      const currentIndex = tracks.findIndex(
        (track) => track.id === currentTrackIdRef.current,
      );
      const nextTrack = isRepeatOneRef.current
        ? tracks[currentIndex] ?? tracks[0]
        : tracks[(currentIndex + 1) % tracks.length];

      startTrack(nextTrack, 0);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.removeAttribute("src");
      audio.load();
      audioRef.current = null;
    };
  }, [startTrack]);

  useEffect(() => {
    let isMounted = true;
    const audioElements = tracks.map((track) => {
      const audio = new Audio();
      audio.preload = "metadata";
      audio.src = track.src;

      audio.addEventListener("loadedmetadata", () => {
        if (!isMounted || !Number.isFinite(audio.duration)) {
          return;
        }

        setTrackDurations((current) => ({
          ...current,
          [track.id]: audio.duration,
        }));
      });

      return audio;
    });

    return () => {
      isMounted = false;
      audioElements.forEach((audio) => {
        audio.removeAttribute("src");
        audio.load();
      });
    };
  }, []);

  useEffect(() => {
    currentTrackRef.current = currentTrack;
  }, [currentTrack]);

  useEffect(() => {
    const audio = new Audio();
    audio.preload = "metadata";
    audioRef.current = audio;

    const updateDuration = () => {
      const track = currentTrackRef.current;
      const duration = getFiniteDuration(audio.duration);

      if (!track || duration <= 0) {
        return;
      }

      setTrackDurations((current) => {
        if (current[track.id] === duration) {
          return current;
        }

        return {
          ...current,
          [track.id]: duration
        };
      });
    };

    const applyPendingSeek = () => {
      const duration = getFiniteDuration(audio.duration);
      const nextTime = clampTime(pendingSeekRef.current, duration);

      if (Number.isFinite(nextTime)) {
        audio.currentTime = nextTime;
      }

      setProgress(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      updateDuration();
      applyPendingSeek();
    };

    const handleDurationChange = () => {
      updateDuration();
      setProgress((current) => clampTime(current, audio.duration));
    };

    const handleTimeUpdate = () => {
      setProgress(audio.currentTime);
      pendingSeekRef.current = audio.currentTime;
    };

    const handleEnded = () => {
      audio.currentTime = 0;
      pendingSeekRef.current = 0;
      setProgress(0);
      setIsPlaying(false);
    };

    const handleError = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("durationchange", handleDurationChange);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    return () => {
      audio.pause();
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("durationchange", handleDurationChange);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
      audio.removeAttribute("src");
      audio.load();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ currentTrackId, progress }),
    );
  }, [currentTrackId, progress]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const nextSrc = new URL(currentTrack.src, window.location.href).href;

    if (audio.src !== nextSrc) {
      audio.pause();
      audio.src = currentTrack.src;
      audio.load();
    }

    audio.currentTime = progressRef.current;
  }, [currentTrack.src]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (!isPlaying) {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (currentTrackDuration <= 0) {
      return;
    }

    setProgress((current) => Math.min(current, currentTrackDuration));
  }, [currentTrackDuration]);

  const playTrack = useCallback(
    (track = currentTrack, startProgress = progressRef.current) => {
      startTrack(track, startProgress);
    },
    [currentTrack, startTrack],
  );

  const play = useCallback(() => {
    playTrack();
  }, [playTrack]);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
      return;
    }

    playTrack();
  }, [isPlaying, playTrack]);

  const toggleRepeatOne = useCallback(() => {
    setIsRepeatOne((current) => !current);
  }, []);

  const seek = useCallback(
    (value) => {
      const nextProgress = Math.min(Math.max(value, 0), currentTrackDuration);
      const audio = audioRef.current;

      if (audio) {
        audio.currentTime = nextProgress;
      }

      progressRef.current = nextProgress;
      setProgress(nextProgress);
    },
    [currentTrackDuration],
  );

  const selectTrack = useCallback(
    (trackId) => {
      const nextTrack = tracks.find((track) => track.id === trackId);

      if (!nextTrack) {
        return;
      }

      startTrack(nextTrack, 0);
    },
    [startTrack],
  );

  const playPrevious = useCallback(() => {
    const previousTrack =
      tracks[(currentTrackIndex - 1 + tracks.length) % tracks.length];

    startTrack(previousTrack, 0);
  }, [currentTrackIndex, startTrack]);

  const playNext = useCallback(() => {
    const nextTrack = tracks[(currentTrackIndex + 1) % tracks.length];

    startTrack(nextTrack, 0);
  }, [currentTrackIndex, startTrack]);

  const value = useMemo(
    () => ({
      tracks,
      trackDurations,
      currentTrack,
      currentTrackIndex,
      currentTrackDuration,
      isPlaying,
      isRepeatOne,
      progress,
      play,
      pause,
      toggle,
      toggleRepeatOne,
      seek,
      selectTrack,
      playPrevious,
      playNext,
    }),
    [
      currentTrack,
      currentTrackDuration,
      currentTrackIndex,
      isPlaying,
      isRepeatOne,
      pause,
      play,
      playNext,
      playPrevious,
      progress,
      seek,
      selectTrack,
      toggle,
      toggleRepeatOne,
      trackDurations,
    ],
  );

  return (
    <AudioPlayerContext.Provider value={value}>
      {children}
    </AudioPlayerContext.Provider>
  );
}

export function useAudioPlayer() {
  const context = useContext(AudioPlayerContext);

  if (!context) {
    throw new Error("useAudioPlayer must be used within AudioProvider");
  }

  return context;
}
