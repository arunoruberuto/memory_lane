import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { AppImage as Image } from "@/components/common/AppImage";
import { members } from "@/data/members";
import { SectionLabel } from "@/components/common/SectionLabel";
import { easeOutExpo } from "@/components/common/motionPresets";
import { MemberProfileWindow } from "./MemberProfileWindow";
import styles from "./MemberGrid.module.css";

function getRealnameClassName(member) {
  return [
    styles["member-grid__realname"],
    member.realnameLang ? styles[`member-grid__realname--${member.realnameLang}`] : ""
  ].filter(Boolean).join(" ");
}

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.085,
      delayChildren: 0.1
    }
  }
};

const memberVariants = {
  hidden: {
    opacity: 0,
    y: 56,
    clipPath: "inset(18% 0% 0% 0%)"
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.82,
      ease: easeOutExpo
    }
  }
};

export function MemberGrid() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedMember, setSelectedMember] = useState(null);

  function openMemberWindow(member) {
    setSelectedMember(member);
  }

  function handleCardKeyDown(event, member) {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    openMemberWindow(member);
  }

  useEffect(() => {
    if (!selectedMember) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedMember(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember]);

  return (
    <section className={styles["member-grid"]} id="members">
      <div className={styles["member-grid__inner"]}>
        <div className={styles["member-grid__header"]}>
          <SectionLabel eyebrow="Members / 3x3 Gallery" title="Eight Members" />
          <p className={styles["member-grid__description"]}>
            The homepage centerpiece is an exhibition wall, not a team-card list.
          </p>
        </div>

        <motion.div
          className={styles["member-grid__list"]}
          variants={gridVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          {members.map((member, index) => (
            <motion.article
              key={member.id}
              variants={memberVariants}
              className={styles["member-grid__trigger"]}
              role="button"
              tabIndex={0}
              onClick={() => openMemberWindow(member)}
              onKeyDown={(event) => handleCardKeyDown(event, member)}
              aria-label={`Open ${member.name1} ${member.name2}, ${member.realname}, ${member.role} profile window`}
            >
              <div className={styles["member-grid__card"]}>
                <div className={styles["member-grid__meta"]}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{member.role}</span>
                </div>
                <div
                  className={styles["member-grid__image-frame"]}
                  style={{ transform: "translateZ(0)" }}
                >
                  <Image
                    src={member.image}
                    alt={`${member.name1} ${member.name2} portrait placeholder`}
                    fill
                    sizes="(min-width: 768px) 31vw, 100vw"
                    className={styles["member-grid__image"]}
                  />
                  <div
                    className={styles["member-grid__tint"]}
                    style={{ backgroundColor: member.accent }}
                  />
                  <div className={styles["member-grid__name-panel"]}>
                    <h3 className={styles["member-grid__name"]}>
                      <span className={styles["member-grid__name1"]}>{member.name1}</span>
                      <span className={styles["member-grid__name2"]}>{member.name2}</span>
                    </h3>
                    <p
                      className={getRealnameClassName(member)}
                      lang={member.realnameLang}
                    >
                      {member.realname}
                    </p>
                  </div>
                </div>
                <p className={styles["member-grid__bio"]}>
                  {member.bio}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
      <MemberProfileWindow
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
}
