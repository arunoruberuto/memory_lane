import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-ink/15 px-4 pb-36 pt-16 md:px-8 md:pb-40 md:pt-24">
      <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.44em] text-graphite">Graduation Showcase</p>
          <p
            lang="ja"
            className="max-w-4xl font-display text-[clamp(2rem,5vw,5rem)] font-black leading-[1.0] tracking-[-0.08em]"
          >
            次のページで、<br />また会いましょう。
          </p>
        </div>
        <div className="flex flex-col gap-5 text-sm leading-relaxed text-graphite md:items-end md:text-right">
          <Link className="focus-ring uppercase tracking-[0.28em] text-ink underline-offset-4 hover:underline" href="/">
            U卒業 / PIPW SATO
          </Link>
          <p>Static editorial showcase prepared for Vercel deployment.</p>
          <small className="uppercase tracking-[0.22em]">© 2026 Graduation Collective</small>
        </div>
      </div>
    </footer>
  );
}
