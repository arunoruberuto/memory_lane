import { useState } from "react";
import BookStage from "@/components/profileroom/BookStage";
import Sidebar from "@/components/profileroom/Sidebar";
import peopleData from "@/data/peopleData";
import styles from "./ProfileRoomPage.module.css";

export function ProfileRoomPage() {
  const [selectedId, setSelectedId] = useState(peopleData[0]?.id ?? null);

  return (
    <section className={styles["profile-room-page"]} aria-label="ProfileRoom">
      <div className={styles["profile-room-page__workspace"]}>
        <Sidebar
          people={peopleData}
          activeId={selectedId}
          onSelect={setSelectedId}
        />
        <BookStage people={peopleData} selectedId={selectedId} />
      </div>
    </section>
  );
}
