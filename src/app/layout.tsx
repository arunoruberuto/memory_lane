import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { PersistentMusicPlayer } from "@/components/player/PersistentMusicPlayer";
import { AudioProvider } from "@/context/AudioContext";

export const metadata: Metadata = {
  title: "U卒業 / PIPW SATO Graduation Showcase",
  description:
    "A premium motion-driven graduation showcase for members, photography, and BGM.",
  openGraph: {
    title: "U卒業 / PIPW SATO Graduation Showcase",
    description:
      "A premium motion-driven graduation showcase for members, photography, and BGM.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <AudioProvider>
          <Header />
          <main id="main-content" className="relative z-10">
            {children}
          </main>
          <Footer />
          <PersistentMusicPlayer />
        </AudioProvider>
      </body>
    </html>
  );
}
