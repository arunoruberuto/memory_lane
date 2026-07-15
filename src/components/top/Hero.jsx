import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Marquee } from "@/components/common/Marquee";
import { easeOutExpo, revealContainer, revealItem } from "@/components/common/motionPresets";
import styles from "./Hero.module.css";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.28], ["0%", "18%"]);

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles["hero__marquee"]}
        initial={shouldReduceMotion ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.35 }}
      >
        <Marquee text="PIPW SATO GRADUATION EXHIBITION" />
      </motion.div>

      <motion.div
        className={styles["hero__content"]}
        variants={revealContainer}
        initial={shouldReduceMotion ? false : "hidden"}
        animate="visible"
        style={shouldReduceMotion ? undefined : { y: titleY }}
      >
        <motion.p
          className={styles["hero__eyebrow"]}
          variants={revealItem}
        >
          Graduation Exhibition / Memory Lane / 2026
        </motion.p>
        <motion.h1
          className={styles["hero__title"]}
          variants={revealItem}
        >
          二年間の<ruby>記憶<rt>メモリー</rt></ruby>を、
          <br />ここに集めて──
          <br />ようこそ、
          <br />僕たちの<ruby>軌道<rt>レーン</rt></ruby>へ。
        </motion.h1>
        <motion.div
          className={styles["hero__copy-grid"]}
          variants={revealItem}
        >
          <p className={styles["hero__copy-label"]}>卒業アルバム</p>
          <p className={styles["hero__copy"]}>
            8人のクラスメイトによる、モーション演出を中心とした卒業ショーケース。
            写真、音楽、メンバー一人ひとりのストーリーを通して、卒業前の特別な空気を表現します。
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles["hero__scroll-prompt"]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span>Scroll</span>
        <span className={styles["hero__scroll-line"]} />
      </motion.div>
    </section>
  );
}
