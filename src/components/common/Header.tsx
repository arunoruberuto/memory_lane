"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Top" },
  { href: "/photos", label: "Photos" },
  { href: "/bgm", label: "BGM" }
] as const;

export function Header() {
  const pathname = usePathname();

  return (
    <motion.header
      className="fixed left-0 top-0 z-50 w-full px-4 py-4 mix-blend-normal md:px-8 md:py-6"
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href="#main-content"
        className="sr-only rounded-full bg-ink px-4 py-2 text-paper focus:not-sr-only"
      >
        Skip to content
      </a>
      <nav
        className="mx-auto flex max-w-[1500px] items-start justify-between gap-6 text-[0.72rem] font-bold uppercase tracking-nav md:text-sm"
        aria-label="Primary navigation"
      >
        <Link className="group focus-ring inline-flex flex-col leading-none" href="/">
          <span className="font-display text-lg tracking-[-0.06em] md:text-2xl">U卒業</span>
          <span className="mt-1 text-[0.62rem] tracking-[0.36em] text-graphite">PIPW SATO</span>
        </Link>
        <div className="flex flex-wrap justify-end gap-x-5 gap-y-3 md:gap-x-8">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring group relative inline-flex overflow-hidden pb-2 leading-none"
                aria-current={isActive ? "page" : undefined}
              >
                <span>{item.label}</span>
                <span
                  className={`absolute bottom-0 left-0 h-px w-full origin-left bg-ink transition-transform duration-500 ease-editorial ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </nav>
    </motion.header>
  );
}
