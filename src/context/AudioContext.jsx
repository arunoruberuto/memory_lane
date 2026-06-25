import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
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
  const initialAudioState = useMemo(() => readStoredAudioState(), []);
  const [currentTrackId, setCurrentTrackId] = useState(
    initialAudioState.currentTrackId ?? tracks[0].id
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(initialAudioState.progress ?? 0);
  const [trackDurations, setTrackDurations] = useState({});

  const audioRef = useRef(null);
  const currentTrackRef = useRef(null);
  const pendingSeekRef = useRef(initialAudioState.progress ?? 0);

  const currentTrackIndex = Math.max(
    0,
    tracks.findIndex((track) => track.id === currentTrackId)
  );
  const currentTrack = tracks[currentTrackIndex] ?? tracks[0];
  const currentTrackDuration = trackDurations[currentTrack.id] ?? 0;

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
    let isMounted = true;
    const metadataLoaders = tracks.map((track) => {
      const audio = new Audio();

      const handleLoadedMetadata = () => {
        const duration = getFiniteDuration(audio.duration);

        if (!isMounted || duration <= 0) {
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

      audio.preload = "metadata";
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio.src = track.src;
      audio.load();

      return { audio, handleLoadedMetadata };
    });

    return () => {
      isMounted = false;
      metadataLoaders.forEach(({ audio, handleLoadedMetadata }) => {
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeAttribute("src");
        audio.load();
      });
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    pendingSeekRef.current = progress;
    audio.pause();
    audio.src = currentTrack.src;
    audio.load();
  }, [currentTrack.id, currentTrack.src]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (!isPlaying) {
      audio.pause();
      return;
    }

    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        if (error.name !== "AbortError") {
          setIsPlaying(false);
        }
      });
    }
  }, [currentTrack.src, isPlaying]);

  useEffect(() => {
    const duration = getFiniteDuration(currentTrackDuration);

    if (duration <= 0) {
      return;
    }

    setProgress((current) => {
      const nextProgress = clampTime(current, duration);
      pendingSeekRef.current = nextProgress;
      return nextProgress;
    });
  }, [currentTrackDuration]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ currentTrackId, progress })
    );
  }, [currentTrackId, progress]);

  const play = useCallback(() => setIsPlaying(true), []);
  const pause = useCallback(() => setIsPlaying(false), []);
  const toggle = useCallback(() => setIsPlaying((current) => !current), []);

  const seek = useCallback(
    (value) => {
      const audio = audioRef.current;
      const duration = getFiniteDuration(audio?.duration) || currentTrackDuration;
      const nextProgress = clampTime(value, duration);

      pendingSeekRef.current = nextProgress;

      if (audio) {
        try {
          audio.currentTime = nextProgress;
        } catch {
          // The pending seek is applied again when metadata is available.
        }
      }

      setProgress(nextProgress);
    },
    [currentTrackDuration]
  );

  const selectTrack = useCallback((trackId) => {
    if (!tracks.some((track) => track.id === trackId)) {
      return;
    }

    pendingSeekRef.current = 0;
    setCurrentTrackId(trackId);
    setProgress(0);
    setIsPlaying(true);
  }, []);

  const value = useMemo(
    () => ({
      tracks,
      trackDurations,
      currentTrack,
      currentTrackIndex,
      currentTrackDuration,
      isPlaying,
      progress,
      play,
      pause,
      toggle,
      seek,
      selectTrack
    }),
    [
      currentTrack,
      currentTrackDuration,
      currentTrackIndex,
      isPlaying,
      pause,
      play,
      progress,
      seek,
      selectTrack,
      toggle,
      trackDurations
    ]
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
