import styles from "./Marquee.module.css";

export function Marquee({ text, reverse = false, className }) {
  const repeated = Array.from({ length: 8 }, (_, index) => index + 1);
  const rootClassName = [styles.marquee, className].filter(Boolean).join(" ");
  const trackClassName = [
    styles["marquee__track"],
    reverse ? styles["marquee__track--reverse"] : styles["marquee__track--forward"]
  ].join(" ");

  return (
    <div
      className={rootClassName}
      aria-hidden="true"
    >
      <div className={trackClassName}>
        {[...repeated, ...repeated].map((number, index) => (
          <span key={`${number}-${index}`} className={styles["marquee__item"]}>
            {text} / {number}
          </span>
        ))}
      </div>
    </div>
  );
}
