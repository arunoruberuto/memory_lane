import { useLocation, useNavigate } from "react-router-dom";
import styles from "./FloatingProfileRoomButton.module.css";

export function FloatingProfileRoomButton() {
  const location = useLocation();
  const navigate = useNavigate();
  const isProfileRoom = location.pathname === "/profile-room";

  function handleClick() {
    if (isProfileRoom) {
      const from = location.state?.from;

      if (from?.pathname) {
        navigate(`${from.pathname}${from.search ?? ""}${from.hash ?? ""}`);
        return;
      }

      navigate("/");
      return;
    }

    navigate("/profile-room", {
      state: {
        from: {
          pathname: location.pathname,
          search: location.search,
          hash: location.hash
        }
      }
    });
  }

  return (
    <button
      className={[
        styles["profile-room-button"],
        isProfileRoom ? styles["profile-room-button--return"] : ""
      ].filter(Boolean).join(" ")}
      type="button"
      onClick={handleClick}
      aria-label={isProfileRoom ? "メインサイトに戻る" : "ProfileRoomを開く"}
    >
      <span className={styles["profile-room-button__card"]} aria-hidden="true">
        <span className={styles["profile-room-button__face"]}>
          {isProfileRoom ? (
            <svg
              className={styles["profile-room-button__return-icon"]}
              viewBox="0 0 24 24"
              focusable="false"
            >
              <path
                d="M10 7 5 12l5 5M6 12h8.5a4.5 4.5 0 0 1 0 9H12"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.4"
              />
            </svg>
          ) : (
            "?"
          )}
        </span>
        <span
          className={[
            styles["profile-room-button__face"],
            styles["profile-room-button__face--back"]
          ].join(" ")}
        >
          {isProfileRoom ? "戻る" : "ポチってみる？"}
        </span>
      </span>
    </button>
  );
}
