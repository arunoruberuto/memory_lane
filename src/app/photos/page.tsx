import { MediaFrame } from "@/components/common/MediaFrame";
import { SectionLabel } from "@/components/common/SectionLabel";
import { photos } from "@/data/photos";

export default function PhotosPage() {
  return (
    <>
      <section className="px-4 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <SectionLabel eyebrow="Photos / 写真ページ" title="Collected Light" />
            <div className="mt-8 border-t border-ink/20 pt-7 text-lg leading-loose md:text-2xl">
              <p>
                This page follows the wireframe as a dedicated photography archive: concept copy,
                a main image, and a full photo area prepared for future documentation.
              </p>
            </div>
          </div>
          <MediaFrame
            src="/images/placeholders/wide.svg"
            alt="Photography page main image placeholder"
            aspect="wide"
            caption="写真ページのコンセプトと紹介テキスト / イメージ画像"
            className="lg:translate-y-8"
          />
        </div>
      </section>

      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 flex items-end justify-between gap-8 border-b border-ink/20 pb-6">
            <h2 className="font-display text-[clamp(3rem,8vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.08em]">
              All Photos
            </h2>
            <p className="hidden max-w-xs text-right text-xs uppercase leading-relaxed tracking-[0.26em] text-graphite md:block">
              Replace placeholder image paths in local data when final photography arrives.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo, index) => (
              <article
                key={photo.id}
                className={index % 3 === 1 ? "lg:translate-y-12" : index % 3 === 2 ? "lg:translate-y-24" : ""}
              >
                <MediaFrame
                  src={photo.image}
                  alt={photo.title}
                  aspect={photo.orientation === "portrait" ? "portrait" : "landscape"}
                  caption={`${String(index + 1).padStart(2, "0")} / ${photo.caption}`}
                />
                <h3 className="mt-5 font-display text-4xl font-black uppercase leading-none tracking-[-0.06em]">
                  {photo.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
