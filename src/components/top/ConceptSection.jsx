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
            src={`${base}images/placeholders/wide.svg`}
            alt="Placeholder image representing the graduation exhibition concept"
            aspect="wide"
            caption="Concept image area defined by the wireframe. Replace with exhibition photography."
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
            eyebrow="Concept / 画像とテキスト"
            title={
              <>
                卒業前の
                <br />
                ラストページ
              </>
            }
          />
          <div className={styles["concept-section__copy-grid"]}>
            <p className={styles["concept-section__copy-label"]}>Curatorial Note</p>
            <div className={styles["concept-section__copy"]}>
              <p>
                This site treats the graduation project as an exhibition wall: names, photographs,
                music, and fragments of process are arranged with enough silence to feel intentional.
              </p>
              <p>
                The wireframe hierarchy stays intact, but each section is paced like a gallery walk:
                a large visual opening, a conceptual pause, then member discovery and photographic highlights.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
