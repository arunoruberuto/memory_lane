import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__inner"]}>
        <div>
          <p className={styles["footer__eyebrow"]}>Graduation Showcase</p>
          <p className={styles["footer__headline"]}>
            別のページで
            <br/>また会おう。
          </p>
        </div>
        <div className={styles["footer__meta"]}>
          <Link className={styles["footer__link"]} to="/">
            U卒業 / グループ秋
          </Link>
          <small className={styles["footer__copyright"]}>© 2026 NAITEI GROUP</small>
        </div>
      </div>
    </footer>
  );
}
