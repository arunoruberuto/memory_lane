import { AppImage as Image } from "@/components/common/AppImage";
import { getProfileWindowStyle } from "./profileWindowStyles";
import { useDraggableProfileWindow } from "./useDraggableProfileWindow";
import styles from "./MemberProfileWindow.module.css";

export function MemberProfileWindow({ member, onClose }) {
  const { position, windowRef, dragHandleProps } = useDraggableProfileWindow(Boolean(member));

  if (!member) {
    return null;
  }

  const memberName = `${member.name1} ${member.name2}`;
  const profile = member.profile ?? {};
  const windowStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    ...getProfileWindowStyle(profile)
  };

  return (
    <div
      ref={windowRef}
      className={styles["profile-window"]}
      data-profile-id={profile.studentId}
      data-template={profile.template ?? "candy"}
      style={windowStyle}
      role="dialog"
      aria-modal="false"
      aria-labelledby="member-profile-window-title"
    >
      <div
        className={styles["profile-window__header"]}
        {...dragHandleProps}
      >
        <span id="member-profile-window-title">
          {memberName} のお部屋
        </span>
        <div className={styles["profile-window__controls"]}>
          <button
            type="button"
            className={styles["profile-window__close"]}
            onClick={onClose}
            aria-label="Close member profile window"
          >
            X
          </button>
        </div>
      </div>

      <div className={styles["profile-window__content"]}>
        <div className={styles["profile-window__card"]}>
          <div className={styles["profile-window__photo-box"]}>
            <Image
              src={profile.photo || member.image}
              alt={`${memberName} profile photo`}
              className={styles["profile-window__photo"]}
            />
            <span className={styles["profile-window__photo-tag"]}>MY PHOTO</span>
          </div>

          <h2 className={styles["profile-window__card-title"]}>
            みんなのプロフィール
          </h2>

          <dl className={styles["profile-window__rows"]}>
            <div className={styles["profile-window__row"]}>
              <dt>なまえ：</dt>
              <dd>{member.realname}</dd>
            </div>
            <div className={styles["profile-window__row"]}>
              <dt>星座：</dt>
              <dd>{profile.astro}</dd>
            </div>
            <div className={styles["profile-window__row"]}>
              <dt>誕生日：</dt>
              <dd>{profile.birthday}</dd>
            </div>
            <div className={styles["profile-window__row"]}>
              <dt>担当：</dt>
              <dd>{member.role}</dd>
            </div>
          </dl>

          <div className={styles["profile-window__qa"]}>
            <h3>Questions</h3>
            <p className={styles["profile-window__question"]}>
              Q1: もしも100万円あったら何する？
            </p>
            <p className={styles["profile-window__answer"]}>
              {profile.q1}
            </p>

            <p className={styles["profile-window__question"]}>
              Q2: みんなへのメッセージ：
            </p>
            <p className={styles["profile-window__answer"]}>
              {profile.q2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
