import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const navItems = [
  { href: "/", label: "Top" },
  { href: "/members/pi1", activePrefix: "/members/", label: "Profiles" },
  { href: "/photos", label: "Photos" },
  { href: "/music", label: "Music" },
];

export function Header() {
  const { pathname } = useLocation();

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className={styles["header__nav"]}
        aria-label="Primary navigation"
      >
        <Link className={styles["header__brand-link"]} to="/">
          <span className={styles["header__brand-title"]}>U卒業</span>
          {/* <span className={styles["header__brand-subtitle"]}>PIPW SATO</span> */}
        </Link>
        <div className={styles["header__nav-items"]}>
          {navItems.map((item) => {
            const isActive = item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.activePrefix ?? item.href);

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
      </nav>
    </motion.header>
  );
}
