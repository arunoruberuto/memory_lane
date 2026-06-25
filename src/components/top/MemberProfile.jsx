import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { AppImage as Image } from "@/components/common/AppImage";
import { MediaFrame } from "@/components/common/MediaFrame";
import { Marquee } from "@/components/common/Marquee";
import { easeOutExpo, revealContainer, revealItem } from "@/components/common/motionPresets";
import styles from "./MemberProfile.module.css";

function getMemberName(member) {
  return `${member.name1} ${member.name2}`;
}

export function MemberProfile({ member, otherMembers }) {
  const shouldReduceMotion = useReducedMotion();
  const memberName = getMemberName(member);

  return (
    <>
      <section className={styles["member-profile__hero-section"]}>
        <div className={styles["member-profile__marquee"]}>
          <Marquee text={`${memberName} // ${member.realname} // ${member.role}`} reverse />
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
              <span>{member.name1}</span>
              <span>{member.name2}</span>
            </h1>
            <p
              className={styles["member-profile__realname"]}
              lang={member.realnameLang}
            >
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
              alt={`${memberName} profile image placeholder`}
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
            {otherMembers.slice(0, 4).map((otherMember) => {
              const otherMemberName = getMemberName(otherMember);

              return (
                <Link
                  to={`/members/${otherMember.id}`}
                  key={otherMember.id}
                  className={styles["member-profile__member-link"]}
                >
                  <div className={styles["member-profile__member-image-frame"]}>
                    <Image
                      src={otherMember.image}
                      alt={`${otherMemberName} portrait placeholder`}
                      fill
                      sizes="(min-width: 768px) 25vw, 100vw"
                      className={styles["member-profile__member-image"]}
                    />
                  </div>
                  <p className={styles["member-profile__member-name"]}>
                    <span>{otherMember.name1}</span>
                    <span>{otherMember.name2}</span>
                  </p>
                  <p className={styles["member-profile__member-role"]}>{otherMember.role}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
