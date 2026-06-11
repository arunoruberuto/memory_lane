import { MediaFrame } from "@/components/common/MediaFrame";
import { SectionLabel } from "@/components/common/SectionLabel";
import { TrackList } from "@/components/player/TrackList";

export default function BgmPage() {
  return (
    <>
      <section className="px-4 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <SectionLabel eyebrow="BGM / 音のページ" title="Room Tone" />
            <div className="mt-8 grid gap-8 border-t border-ink/20 pt-7 md:grid-cols-[0.32fr_0.68fr]">
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-graphite">
                Concept
              </p>
              <p className="text-lg leading-loose md:text-2xl">
                Placeholder tracks define the persistent player architecture now; final audio can
                later be dropped into <span className="font-mono text-base">/public/music</span>
                and wired through the local track data.
              </p>
            </div>
          </div>
          <MediaFrame
            src="/images/placeholders/landscape.svg"
            alt="BGM page image placeholder"
            aspect="landscape"
            caption="BGMのコンセプトと紹介テキスト / イメージ画像"
            className="lg:-rotate-2"
          />
        </div>
      </section>

      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 border-b border-ink/20 pb-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.42em] text-graphite">
              BGM List
            </p>
            <h2 className="font-display text-[clamp(3rem,8vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.08em]">
              Sound Index
            </h2>
          </div>
          <TrackList />
        </div>
      </section>
    </>
  );
}
