import { useState } from "react";
import styles from "./MemberWf.module.css";

export function MemberWf({ member }) {
  const [specialMessage, setSpecialMessage] = useState("");
  const [theme, setTheme] = useState("current");
  const wf = member.wf;

  if (!wf) {
    return null;
  }

  const isOriginalTheme = theme === "original";

  const showRandomMessage = () => {
    const messages = wf.special?.messages ?? [];

    if (messages.length === 0) {
      return;
    }

    setSpecialMessage(messages[Math.floor(Math.random() * messages.length)]);
  };

  return (
    <section className={styles["member-wf"]}>
      <div className={styles["member-wf__inner"]}>
        <header className={styles["member-wf__header"]}>
          <div className={styles["member-wf__heading"]}>
            <p className={styles["member-wf__eyebrow"]}>
              WF2024 / Profile Page
            </p>
            <h2 className={styles["member-wf__title"]}>プロフィール</h2>
          </div>

          <div
            className={styles["member-wf__theme-toggle"]}
            aria-label="プロフィールのテーマ"
          >
            <button
              className={`${styles["member-wf__theme-button"]} ${
                !isOriginalTheme
                  ? styles["member-wf__theme-button--active"]
                  : ""
              }`}
              type="button"
              aria-pressed={!isOriginalTheme}
              onClick={() => setTheme("current")}
            >
              Current
            </button>
            <button
              className={`${styles["member-wf__theme-button"]} ${
                isOriginalTheme
                  ? styles["member-wf__theme-button--active"]
                  : ""
              }`}
              type="button"
              aria-pressed={isOriginalTheme}
              onClick={() => setTheme("original")}
            >
              Original
            </button>
          </div>
        </header>

        {isOriginalTheme ? (
          <div className={styles["member-wf__original"]}>
            <iframe
              srcDoc={wf.originalPage}
              title={`${member.name1} ${member.name2} original profile`}
            />
          </div>
        ) : (
          <>
            <figure className={styles["member-wf__main-visual"]}>
              <img src={wf.mainImage.src} alt={wf.mainImage.alt} />
            </figure>

            <div className={styles["member-wf__questions"]}>
              {wf.questions.map((question, index) => (
                <article
                  className={styles["member-wf__question"]}
                  key={question.id}
                >
                  <div className={styles["member-wf__question-heading"]}>
                    <span className={styles["member-wf__question-number"]}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{question.label}</h3>
                  </div>

                  <div className={styles["member-wf__answer"]}>
                    {question.html ? (
                      <p dangerouslySetInnerHTML={{ __html: question.html }} />
                    ) : (
                      <p>{question.text}</p>
                    )}

                    {question.images.length > 0 && (
                      <div className={styles["member-wf__images"]}>
                        {question.images.map((image) => (
                          <img
                            key={image.src}
                            src={image.src}
                            alt={image.alt}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        {wf.special?.type === "randomMessage" && (
          <aside className={styles["member-wf__special"]}>
            <p className={styles["member-wf__special-eyebrow"]}>Special / PI2</p>
            <button
              className={styles["member-wf__special-button"]}
              type="button"
              onClick={showRandomMessage}
            >
              {wf.special.label}
            </button>
            <p className={styles["member-wf__special-message"]} aria-live="polite">
              {specialMessage}
            </p>
          </aside>
        )}
      </div>
    </section>
  );
}
