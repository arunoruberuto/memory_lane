import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { AppImage as Image } from "@/components/common/AppImage";
import { MediaFrame } from "@/components/common/MediaFrame";
import { Marquee } from "@/components/common/Marquee";
import { revealContainer, revealItem } from "@/components/common/motionPresets";
import { MemberWf } from "./MemberWf";
import styles from "./MemberProfile.module.css";

export function MemberProfile({ member, otherMembers }) {
  const shouldReduceMotion = useReducedMotion();
  const memberName = `${member.name1} ${member.name2}`;
  const longestNamePartLength = Math.max(member.name1.length, member.name2.length);
  const compactNameClass =
    longestNamePartLength >= 8 || memberName.replace(/\s/g, "").length >= 14
      ? styles["member-profile__hero-title--compact"]
      : "";
  return (
    <>
      <section className={styles["member-profile__hero-section"]}>
        <div className={styles["member-profile__marquee"]}>
          <Marquee
            text={(
              <>
                {memberName}{" // "}
                <span
                  className={styles["member-profile__marquee-realname"]}
                  lang={member.realnameLang}
                >
                  {member.realname}
                </span>
                {" // "}{member.role}
              </>
            )}
            reverse
          />
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
              alt={`${memberName} profile image`}
              aspect="portrait"
              // caption="人物紹介メインビジュアル"
              className={styles["member-profile__profile-image"]}
            />
          </motion.div>
        </motion.div>
      </section>

      <MemberWf key={member.id} member={member} />

      <section className={styles["member-profile__section"]}>
        <div className={styles["member-profile__related-inner"]}>
          <div className={styles["member-profile__related-header"]}>
            <div>
              <p className={styles["member-profile__related-eyebrow"]}>
                Other Members
              </p>
              <h2 className={styles["member-profile__related-title"]}>
                他のメンバーたち
              </h2>
            </div>
            <Link className={styles["member-profile__back-link"]} to="/">
              Back to Top
            </Link>
          </div>

          <div className={styles["member-profile__related-grid"]}>
            {otherMembers.map((otherMember) => (
              <Link
                to={`/members/${otherMember.id}`}
                key={otherMember.id}
                className={styles["member-profile__member-link"]}
              >
                <div className={styles["member-profile__member-image-frame"]}>
                  <Image
                    src={otherMember.image}
                    alt={`${otherMember.name1} ${otherMember.name2}のポートレート`}
                    fill
                    sizes="(min-width: 768px) 25vw, 100vw"
                    className={styles["member-profile__member-image"]}
                  />
                </div>
                <p className={styles["member-profile__member-name"]}>
                  <span>{otherMember.name1}</span>
                </p>
                <p className={styles["member-profile__member-id"]}>{otherMember.id}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
