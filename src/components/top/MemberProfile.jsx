import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { AppImage as Image } from "@/components/common/AppImage";
import { MediaFrame } from "@/components/common/MediaFrame";
import { Marquee } from "@/components/common/Marquee";
import { easeOutExpo, revealContainer, revealItem } from "@/components/common/motionPresets";
import { useEffect, useState } from "react";
import styles from "./MemberProfile.module.css";

function getMemberName(member) {
  return `${member.name1} ${member.name2}`;
}

export function MemberProfile({ member, otherMembers }) {
  const shouldReduceMotion = useReducedMotion();
  const memberName = `${member.name1} ${member.name2}`;
  const longestNamePartLength = Math.max(member.name1.length, member.name2.length);
  const compactNameClass =
    longestNamePartLength >= 8 || memberName.replace(/\s/g, "").length >= 14
      ? styles["member-profile__hero-title--compact"]
      : "";
  const [selectedWork, setSelectedWork] = useState(null);

  useEffect(() => {
    if (!selectedWork) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedWork(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedWork]);

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
          <motion.div
            variants={revealItem}
            className={styles["member-profile__hero-copy"]}
          >
            <p className={styles["member-profile__eyebrow"]}>
              Member Profile
            </p>
            <h1 className={`${styles["member-profile__hero-title"]} ${compactNameClass}`}>
              <span className={styles["member-profile__hero-title-word"]}>{member.name1}</span>
              <span className={styles["member-profile__hero-title-word"]}>{member.name2}</span>
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
                <li key={work.id ?? work.title} className={styles["member-profile__work-item"]}>
                  <div>
                    <p className={styles["member-profile__work-title"]}>
                      {work.description || work.url ? (
                        <button
                          type="button"
                          className={styles["member-profile__work-link"]}
                          onClick={() => setSelectedWork(work)}
                        >
                          {work.title}
                        </button>
                      ) : (
                        <span>{work.title}</span>
                      )}
                    </p>

                    <p className={styles["member-profile__work-medium"]}>
                      {work.medium}
                    </p>
                  </div>

                  <p className={styles["member-profile__work-year"]}>
                    {work.year}
                  </p>
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
                    alt={`${otherMember.name1} ${otherMember.name2} portrait placeholder`}
                    fill
                    sizes="(min-width: 768px) 25vw, 100vw"
                    className={styles["member-profile__member-image"]}
                  />
                </div>
                <p className={styles["member-profile__member-name"]}>
                  <span>{otherMember.name1}</span>
                  <span className={styles["member-profile__same-line-name2"]}>{otherMember.name2}</span>
                </p>
                <p className={styles["member-profile__member-role"]}>{otherMember.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {selectedWork && (
        <div
          className={styles["member-profile__modal-overlay"]}
          onClick={() => setSelectedWork(null)}
        >
          <motion.div
            className={styles["member-profile__modal"]}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="work-modal-title"
            aria-describedby={selectedWork.description ? "work-modal-description" : undefined}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: easeOutExpo,
            }}
          >
            <div className={styles["member-profile__modal-header"]}>
              <p className={styles["member-profile__modal-eyebrow"]}>
                Work Detail
              </p>
              <button
                type="button"
                className={styles["member-profile__modal-close"]}
                onClick={() => setSelectedWork(null)}
                aria-label="Close work detail"
              >
                x
              </button>
            </div>

            <h2
              id="work-modal-title"
              className={styles["member-profile__modal-title"]}
            >
              {selectedWork.title}
            </h2>
            <div className={styles["member-profile__modal-meta"]}>
              <span>{selectedWork.medium}</span>
              <span>{selectedWork.year}</span>
            </div>

            {selectedWork.description && (
              <p
                id="work-modal-description"
                className={styles["member-profile__modal-description"]}
              >
                {selectedWork.description}
              </p>
            )}

            <div className={styles["member-profile__modal-actions"]}>
              {selectedWork.url && (
                <a
                  className={styles["member-profile__modal-action"]}
                  href={selectedWork.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Launch Site
                </a>
              )}

              <button
                type="button"
                className={styles["member-profile__modal-action"]}
                onClick={() => setSelectedWork(null)}
              >
                Close
              </button>
            </div>

          </motion.div>
        </div>
      )}

    </>
  );
}
