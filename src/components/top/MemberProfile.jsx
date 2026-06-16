import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { AppImage as Image } from "@/components/common/AppImage";
import { MediaFrame } from "@/components/common/MediaFrame";
import { Marquee } from "@/components/common/Marquee";
import { easeOutExpo, revealContainer, revealItem } from "@/components/common/motionPresets";
import styles from "./MemberProfile.module.css";

export function MemberProfile({ member, otherMembers }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <section className={styles["member-profile__hero-section"]}>
        <div className={styles["member-profile__marquee"]}>
          <Marquee text={`${member.name} // ${member.realname} // ${member.role}`} reverse />
        </div>

        <motion.div
          className={styles["member-profile__hero-grid"]}
          variants={revealContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
        >
          <motion.div variants={revealItem}>
            <p className={styles["member-profile__eyebrow"]}>
              Member Profile
            </p>
            <h1 className={styles["member-profile__hero-title"]}>
              {member.name}
            </h1>
            <p className={styles["member-profile__realname"]}>
              {member.realname}
            </p>
            <div className={styles["member-profile__bio-grid"]}>
              <p className={styles["member-profile__role"]}>{member.role}</p>
              <p className={styles["member-profile__bio"]}>{member.bio}</p>
            </div>
          </motion.div>

          <motion.div variants={revealItem} className={styles["member-profile__profile-image-column"]}>
            <MediaFrame
              src={member.image}
              alt={`${member.name} profile image placeholder`}
              aspect="portrait"
              caption="人物紹介メインビジュアル"
              className={styles["member-profile__profile-image"]}
            />
          </motion.div>
        </motion.div>
      </section>

      <section className={styles["member-profile__section"]}>
        <div className={styles["member-profile__statement-grid"]}>
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.82, ease: easeOutExpo }}
          >
            <p className={styles["member-profile__eyebrow"]}>
              Text Area / Statement
            </p>
            <p className={styles["member-profile__statement"]}>
              {member.statement}
            </p>
          </motion.div>

          <motion.div
            className={styles["member-profile__works-panel"]}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.82, ease: easeOutExpo, delay: 0.08 }}
          >
            <p className={styles["member-profile__eyebrow"]}>
              個人エリア / Works
            </p>
            <ul className={styles["member-profile__works-list"]}>
              {member.works.map((work) => (
                <li key={work.title} className={styles["member-profile__work-item"]}>
                  <div>
                    <p className={styles["member-profile__work-title"]}>
                      {work.title}
                    </p>
                    <p className={styles["member-profile__work-medium"]}>{work.medium}</p>
                  </div>
                  <p className={styles["member-profile__work-year"]}>{work.year}</p>
                </li>
              ))}
            </ul>
            <div className={styles["member-profile__tags"]}>
              {member.tags.map((tag) => (
                <span
                  key={tag}
                  className={styles["member-profile__tag"]}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles["member-profile__section"]}>
        <div className={styles["member-profile__related-inner"]}>
          <div className={styles["member-profile__related-header"]}>
            <div>
              <p className={styles["member-profile__related-eyebrow"]}>
                Other Members
              </p>
              <h2 className={styles["member-profile__related-title"]}>
                Next Wall
              </h2>
            </div>
            <Link className={styles["member-profile__back-link"]} to="/">
              Back to Top
            </Link>
          </div>

          <div className={styles["member-profile__related-grid"]}>
            {otherMembers.slice(0, 4).map((otherMember) => (
              <Link
                to={`/members/${otherMember.id}`}
                key={otherMember.id}
                className={styles["member-profile__member-link"]}
              >
                <div className={styles["member-profile__member-image-frame"]}>
                  <Image
                    src={otherMember.image}
                    alt={`${otherMember.name} portrait placeholder`}
                    fill
                    sizes="(min-width: 768px) 25vw, 100vw"
                    className={styles["member-profile__member-image"]}
                  />
                </div>
                <p className={styles["member-profile__member-name"]}>
                  {otherMember.name}
                </p>
                <p className={styles["member-profile__member-role"]}>{otherMember.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
