import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const navItems = [
  { href: "/", label: "Top" },
  { href: "/profiles", label: "Profiles" },
  { href: "/photos", label: "Photos" },
  { href: "/music", label: "Music" },
];

export function Header() {
  const { pathname } = useLocation();
  const [isKawaii, setIsKawaii] = useState(() => {
    try {
      return window.localStorage.getItem("memory-lane-theme") === "kawaii";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const theme = isKawaii ? "kawaii" : "default";
    document.documentElement.dataset.theme = theme;

    try {
      window.localStorage.setItem("memory-lane-theme", theme);
    } catch {
      // The selected theme still applies when storage is unavailable.
    }
  }, [isKawaii]);

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href="#main-content"
        className={styles["header__skip-link"]}
      >
        Skip to content
      </a>
      <nav
        className={styles["header__nav"]}
        aria-label="Primary navigation"
      >
        <Link className={styles["header__brand-link"]} to="/">
          <span className={styles["header__brand-title"]}>U卒業</span>
          {/* <span className={styles["header__brand-subtitle"]}>PIPW SATO</span> */}
        </Link>
        <div className={styles["header__right"]}>
          <div className={styles["header__nav-items"]}>
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={styles["header__nav-link"]}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{item.label}</span>
                  <span
                    className={[
                      styles["header__nav-rule"],
                      isActive ? styles["header__nav-rule--active"] : ""
                    ].filter(Boolean).join(" ")}
                  />
                </Link>
              );
            })}
          </div>
          <label className={styles["header__theme-toggle"]}>
            <span className={styles["header__theme-label"]}>Kawaii</span>
            <input
              className={styles["header__theme-input"]}
              type="checkbox"
              checked={isKawaii}
              onChange={(event) => setIsKawaii(event.target.checked)}
              role="switch"
              aria-label="Kawaii mode"
            />
            <span className={styles["header__theme-track"]} aria-hidden="true">
              <span className={styles["header__theme-thumb"]}>♥</span>
            </span>
          </label>
        </div>
      </nav>
    </motion.header>
  );
}
