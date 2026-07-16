import { useState } from "react";
import BookStage from "@/components/profileroom/BookStage";
import Sidebar from "@/components/profileroom/Sidebar";
import roomData from "@/data/roomData";
import styles from "./ProfileRoomPage.module.css";

export function ProfileRoomPage() {
  const [selectedId, setSelectedId] = useState(roomData[0]?.id ?? null);

  return (
    <section className={styles["profile-room-page"]} aria-label="ProfileRoom">
      <div className={styles["profile-room-page__workspace"]}>
        <Sidebar
          people={roomData}
          activeId={selectedId}
          onSelect={setSelectedId}
        />
        <BookStage people={roomData} selectedId={selectedId} />
      </div>
    </section>
  );
}
