import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { FloatingProfileRoomButton } from "@/components/common/FloatingProfileRoomButton";
import { PersistentMusicPlayer } from "@/components/music/PersistentMusicPlayer";
import { AudioProvider } from "@/context/AudioContext";
import { MusicPage } from "@/pages/MusicPage";
import { HomePage } from "@/pages/HomePage";
import { MemberPage } from "@/pages/MemberPage";
import { PhotosPage } from "@/pages/PhotosPage";
import styles from "./App.module.css";
import { ScrollToTop } from "@/components/common/ScrollToTop";

const ProfileRoomPage = lazy(() =>
  import("@/pages/ProfileRoomPage").then((module) => ({
    default: module.ProfileRoomPage
  }))
);

export default function App() {
  const { pathname } = useLocation();
  const isProfileRoom = pathname === "/profile-room";

  return (
    <AudioProvider>
      <ScrollToTop />
      {!isProfileRoom && <Header />}
      <main id="main-content" className={styles["app__main"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/profiles" element={<Navigate to="/members/pi1" replace />} />
          <Route
            path="/profile-room"
            element={(
              <Suspense fallback={null}>
                <ProfileRoomPage />
              </Suspense>
            )}
          />
          <Route path="/members/:id" element={<MemberPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isProfileRoom && <Footer />}
      <FloatingProfileRoomButton />
      <PersistentMusicPlayer />
    </AudioProvider>
  );
}
