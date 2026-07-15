import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useAudioPlayer } from "@/context/AudioContext";
import { members } from "@/data/members";
import styles from "./PersistentMusicPlayer.module.css";

const thsTrackNames = {
  ths1: "Sachiko M.",
  ths2: "Kazuki D.",
  ths3: "Takahiro M.",
  ths4: "Shoko S."
};

// 再生時間をプレイヤー表示用の「分:秒」に整えます。
function formatTime(seconds) {
  const totalSeconds = Math.floor(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

// 曲IDから末尾の「m」を外し、メンバーIDまたはTHS表示名を読み取ります。
function getMemberLabel(trackId) {
  const trackMemberId = trackId.replace(/m$/, "");
  const member = members.find(({ id }) => id === trackMemberId);

  if (thsTrackNames[trackMemberId]) {
    return `THS - ${thsTrackNames[trackMemberId]}`;
  }

  return `${member.id}`;
}

export function PersistentMusicPlayer() {
  const { pathname } = useLocation();
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
  const memberLabel = getMemberLabel(currentTrack.id);
  const isProfileRoom = pathname === "/profile-room";

  if (isProfileRoom) {
    return (
      <motion.aside
        className={styles["profile-room-player"]}
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        aria-label="ProfileRoom music player"
      >
        <div className={styles["profile-room-player__frame"]}>
          <div className={styles["profile-room-player__art-wrap"]}>
            <img
              className={[
                styles["profile-room-player__art"],
                isPlaying ? styles["profile-room-player__art--playing"] : ""
              ].filter(Boolean).join(" ")}
              src={currentTrack.artwork}
              alt=""
              aria-hidden="true"
            />
          </div>

          <div className={styles["profile-room-player__main"]}>
            <div className={styles["profile-room-player__headline"]}>
              <p className={styles["profile-room-player__label"]}>
                Now playing / {memberLabel}
              </p>
              <p className={styles["profile-room-player__title"]}>
                {currentTrack.title}
              </p>
              <p className={styles["profile-room-player__artist"]}>
                {currentTrack.artist}
              </p>
            </div>

            <div className={styles["profile-room-player__timeline"]}>
              <span className={styles["profile-room-player__time"]}>
                {formatTime(progress)}
              </span>
              <label className={styles["music-player__sr-only"]} htmlFor="profile-room-player-progress">
                タイムライン
              </label>
              <input
                id="profile-room-player-progress"
                className={styles["profile-room-player__progress"]}
                type="range"
                min={0}
                max={currentTrackDuration}
                step={0.25}
                value={progress}
                onChange={(event) => seek(Number(event.currentTarget.value))}
              />
              <span className={styles["profile-room-player__time"]}>
                {formatTime(currentTrackDuration)}
              </span>
            </div>
          </div>

          <div className={styles["profile-room-player__controls"]}>
            <button
              className={[
                styles["profile-room-player__button"],
                isRepeatOne ? styles["profile-room-player__button--active"] : ""
              ].filter(Boolean).join(" ")}
              type="button"
              onClick={toggleRepeatOne}
              aria-pressed={isRepeatOne}
              aria-label="現在の曲をリピート"
            >
              ↻
            </button>
            <button
              className={styles["profile-room-player__button"]}
              type="button"
              onClick={playPrevious}
              aria-label="前の曲を再生"
            >
              ⏮
            </button>
            <button
              className={[
                styles["profile-room-player__button"],
                styles["profile-room-player__button--primary"]
              ].join(" ")}
              type="button"
              onClick={toggle}
              aria-label={isPlaying ? "音楽を一時停止" : "音楽を再生"}
            >
              {isPlaying ? "Ⅱ" : "▶"}
            </button>
            <button
              className={styles["profile-room-player__button"]}
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

  return (
    <motion.aside
      className={styles["music-player"]}
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
      aria-label="固定ミュージックプレイヤー"
    >
      {/* 再生中の曲のアートワークを背景として表示します。 */}
      {isPlaying && (
        <div
          className={styles["music-player__artwork-bg"]}
          style={{ backgroundImage: `url(${currentTrack.artwork})` }}
          aria-hidden="true"
        />
      )}
      <div className={styles["music-player__inner"]}>
        {/* 再生と一時停止を切り替えるボタンです。 */}
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
            {/* 曲IDから読んだラベルと、曲名・アーティスト名を表示します。 */}
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
            {/* 現在位置と曲全体の長さを表示します。 */}
            <p className={styles["music-player__time"]}>
              {formatTime(progress)} / {formatTime(currentTrackDuration)}
            </p>
          </div>

          {/* タイムラインを操作して、再生位置を移動します。 */}
          <label className={styles["music-player__sr-only"]} htmlFor="global-player-progress">
            タイムライン
          </label>
          <input
            id="global-player-progress"
            className={styles["music-player__progress"]}
            type="range"
            min={0}
            max={currentTrackDuration}
            step={0.25}
            value={progress}
            onChange={(event) => seek(Number(event.currentTarget.value))}
          />
        </div>

        {/* ループ、前の曲、次の曲を操作するボタン群です。 */}
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
