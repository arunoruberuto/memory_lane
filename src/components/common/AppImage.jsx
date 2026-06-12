import styles from "./AppImage.module.css";

export function AppImage({ alt, className = "", fill = false, sizes, src }) {
  const imageClassName = [fill ? styles["app-image--fill"] : "", className].filter(Boolean).join(" ");

  return <img alt={alt} className={imageClassName} sizes={sizes} src={src} />;
}
