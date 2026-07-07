import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { PersistentMusicPlayer } from "@/components/music/PersistentMusicPlayer";
import { AudioProvider } from "@/context/AudioContext";
import { MusicPage } from "@/pages/MusicPage";
import { HomePage } from "@/pages/HomePage";
import { MemberPage } from "@/pages/MemberPage";
import { PhotosPage } from "@/pages/PhotosPage";
import { ProfilesPage } from "@/pages/ProfilesPage";
import styles from "./App.module.css";
import { ScrollToTop } from "@/components/common/ScrollToTop";

export default function App() {
  return (
    <AudioProvider>
      <ScrollToTop />
      <Header />
      <main id="main-content" className={styles["app__main"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/profiles" element={<ProfilesPage />} />
          <Route path="/members/:id" element={<MemberPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <PersistentMusicPlayer />
    </AudioProvider>
  );
}
