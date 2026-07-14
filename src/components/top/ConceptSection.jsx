import { motion, useReducedMotion } from "framer-motion";
import { MediaFrame } from "@/components/common/MediaFrame";
import { SectionLabel } from "@/components/common/SectionLabel";
import { easeOutExpo } from "@/components/common/motionPresets";
import styles from "./ConceptSection.module.css";

const base = import.meta.env.BASE_URL;

export function ConceptSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={styles["concept-section"]} id="concept">
      <div className={styles["concept-section__inner"]}>
        <div className={styles["concept-section__media-column"]}>
          <MediaFrame
            src={`${base}images/photos/007.webp`}
            alt="学生レクリエーション2024"
            aspect="wide"
            caption="学生レクリエーション2024"
            className={styles["concept-section__media-frame"]}
          />
        </div>
        <motion.div
          className={styles["concept-section__text-column"]}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.9, ease: easeOutExpo }}
        >
          <SectionLabel
            eyebrow="Concept / 展示コンセプト"
            title={
              <>
                エピローグ
              </>
            }
          />
          <div className={styles["concept-section__copy-grid"]}>
            <p className={styles["concept-section__copy-label"]}>Curatorial Note</p>
            <div className={styles["concept-section__copy"]}>
              <p>
                名前、写真、音楽、制作の断片をひとつの展示空間に並べ、
                8人で過ごした2年間の記憶をたどります。<br/>
                一人ひとりの視点と、それぞれの場所に残った空気を、
                ギャラリーを歩くような流れでゆっくりと見つけてください。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
