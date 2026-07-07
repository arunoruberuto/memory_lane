import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { AppImage as Image } from "@/components/common/AppImage";
import { members } from "@/data/members";
import { Marquee } from "@/components/common/Marquee";
import { easeOutExpo, revealContainer, revealItem } from "@/components/common/motionPresets";
import styles from "./Hero.module.css";

const posterPlacements = [
  styles["hero__poster--one"],
  styles["hero__poster--two"],
  styles["hero__poster--three"],
  styles["hero__poster--four"],
  styles["hero__poster--five"]
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.28], ["0%", "18%"]);
  const posterY = useTransform(scrollYProgress, [0, 0.28], ["0%", "-10%"]);

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles["hero__marquee"]}
        initial={shouldReduceMotion ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.35 }}
      >
        <Marquee text="PIPW SATO GRADUATION EXBITION" />
      </motion.div>

      {/* <motion.div className={styles["hero__poster-layer"]} style={{ y: posterY }}>
        {members.slice(0, 5).map((member, index) => (
          <motion.div
            key={member.id}
            className={[styles["hero__poster"], posterPlacements[index]].join(" ")}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 80, rotate: -2 }}
            animate={{ opacity: 0.88, y: 0, rotate: 0 }}
            transition={{ duration: 0.92, delay: 0.55 + index * 0.1, ease: easeOutExpo }}
          >
            <Image className={styles["hero__poster-image"]} src={member.image} alt="" fill sizes="18vw" />
            <div className={styles["hero__poster-tint"]} style={{ backgroundColor: member.accent, opacity: 0.52 }} />
          </motion.div>
        ))}
      </motion.div> */}

      <motion.div
        className={styles["hero__content"]}
        variants={revealContainer}
        initial={shouldReduceMotion ? false : "hidden"}
        animate="visible"
        style={{ y: titleY }}
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
          <br/>ここに集めて──
          <br/>ようこそ、
          <br/>僕たちの<ruby>軌道<rt>レーン</rt></ruby>へ。
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
