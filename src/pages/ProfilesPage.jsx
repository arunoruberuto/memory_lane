import { useEffect, useMemo, useRef, useState } from "react";
import { members } from "@/data/members";
import styles from "./ProfilesPage.module.css";

const rosterOrder = ["pi1", "pi2", "pw1", "pw2", "pw3", "pw4", "pw5", "pw6"];
const avatarMarks = ["PI1", "PI2", "PW1", "PW2", "PW3", "PW4", "PW5", "PW6"];
const defaultPhoto = `${import.meta.env.BASE_URL}images/placeholders/portrait.svg`;

function getDisplayName(member) {
  return `${member.name1} ${member.name2}`;
}

function getStudentLabel(member) {
  const section = member.id.slice(0, 2).toUpperCase();
  const number = member.id.slice(2).padStart(3, "0");

  return `${section}-${number}のページ`;
}

export function ProfilesPage() {
  const orderedMembers = useMemo(
    () => rosterOrder.map((id) => members.find((member) => member.id === id)).filter(Boolean),
    []
  );
  const [selectedMemberId, setSelectedMemberId] = useState(orderedMembers[0]?.id ?? null);
  const [position, setPosition] = useState({ left: 120, top: 92 });
  const dragState = useRef(null);

  const selectedMember = orderedMembers.find((member) => member.id === selectedMemberId);

  useEffect(() => {
    const handlePointerMove = (event) => {
      const drag = dragState.current;
      if (!drag) {
        return;
      }

      setPosition({
        left: Math.max(16, drag.initialLeft + event.clientX - drag.startX),
        top: Math.max(78, drag.initialTop + event.clientY - drag.startY)
      });
    };

    const handlePointerUp = () => {
      dragState.current = null;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  const startDrag = (event) => {
    if (event.target.closest("button")) {
      return;
    }

    dragState.current = {
      startX: event.clientX,
      startY: event.clientY,
      initialLeft: position.left,
      initialTop: position.top
    };
  };

  return (
    <section className={styles["profiles-page"]}>
      <div className={styles["profiles-page__desktop"]} aria-label="Profiles desktop">
        {orderedMembers.map((member, index) => {
          const isSelected = member.id === selectedMemberId;

          return (
            <button
              key={member.id}
              type="button"
              className={[
                styles["profiles-page__desktop-icon"],
                isSelected ? styles["profiles-page__desktop-icon--active"] : ""
              ].filter(Boolean).join(" ")}
              onClick={() => setSelectedMemberId(member.id)}
              aria-pressed={isSelected}
            >
              <span className={styles["profiles-page__avatar-frame"]}>
                {avatarMarks[index]}
              </span>
              <span className={styles["profiles-page__icon-label"]}>
                {getStudentLabel(member)}
              </span>
            </button>
          );
        })}
      </div>

      {selectedMember && (
        <article
          className={styles["profiles-page__window"]}
          style={{ left: `${position.left}px`, top: `${position.top}px` }}
          data-template={selectedMember.profile?.template}
          data-profile-id={selectedMember.profile?.studentId}
          aria-labelledby="profile-window-title"
        >
          <div
            className={styles["profiles-page__window-header"]}
            onPointerDown={startDrag}
          >
            <h1 id="profile-window-title" className={styles["profiles-page__window-title"]}>
              {getDisplayName(selectedMember)} のお部屋
            </h1>
            <button
              type="button"
              className={styles["profiles-page__close-button"]}
              onClick={() => setSelectedMemberId(null)}
              aria-label="Close profile window"
            >
              X
            </button>
          </div>

          <div className={styles["profiles-page__window-content"]}>
            <div className={styles["profiles-page__profile-card"]}>
              <figure className={styles["profiles-page__photo-box"]}>
                <img
                  src={selectedMember.image || defaultPhoto}
                  alt={`${getDisplayName(selectedMember)} profile`}
                />
                <figcaption className={styles["profiles-page__photo-tag"]}>
                  MY PHOTO
                </figcaption>
              </figure>

              <p className={styles["profiles-page__card-title"]}>
                みんなのプロフィール
              </p>

              <dl className={styles["profiles-page__profile-list"]}>
                <div className={styles["profiles-page__profile-row"]}>
                  <dt>なまえ：</dt>
                  <dd>{getDisplayName(selectedMember)}</dd>
                </div>
                <div className={styles["profiles-page__profile-row"]}>
                  <dt>本名：</dt>
                  <dd lang={selectedMember.realnameLang}>{selectedMember.realname}</dd>
                </div>
                <div className={styles["profiles-page__profile-row"]}>
                  <dt>星座：</dt>
                  <dd>{selectedMember.profile?.astro}</dd>
                </div>
                <div className={styles["profiles-page__profile-row"]}>
                  <dt>誕生日：</dt>
                  <dd>{selectedMember.profile?.birthday}</dd>
                </div>
              </dl>

              <section className={styles["profiles-page__qa-section"]}>
                <h2>Questions</h2>
                <p className={styles["profiles-page__question"]}>
                  Q1: もしも100万円あったら何する？
                </p>
                <p className={styles["profiles-page__answer"]}>{selectedMember.profile?.q1}</p>
                <p className={styles["profiles-page__question"]}>
                  Q2: みんなへのメッセージ：
                </p>
                <p className={styles["profiles-page__answer"]}>{selectedMember.profile?.q2}</p>
              </section>
            </div>
          </div>
        </article>
      )}
    </section>
  );
}
