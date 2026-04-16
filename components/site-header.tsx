"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type SiteHeaderProps = {
  current?: "home" | "videos" | "gallery";
};

const homeLinks = [
  { href: "#bio", label: "Bio" },
  { href: "#selection", label: "Selection" },
  { href: "#gallery", label: "Gallery" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader({ current = "home" }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const nextScrollY = window.scrollY;

      if (nextScrollY > previousScrollY && nextScrollY > 24) {
        setIsOpen(false);
      }

      previousScrollY = nextScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 shell pt-2 sm:pt-4">
      <nav className="border border-white/10 bg-black/75 px-4 py-3 backdrop-blur-md sm:px-5 sm:py-4">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex items-center justify-between gap-2 pr-1 sm:gap-4 sm:pr-2">
            <Link
              href="/"
              className="shrink-0 pl-1 pr-2 sm:pl-3"
              onClick={closeMenu}
            >
              <Image
                src="/Logo%20Lokko%20TV%20Black.png"
                alt="Lokko TV"
                width={220}
                height={70}
                className="h-auto w-[92px] invert sm:w-[132px]"
                priority
              />
            </Link>

            <div className="hidden items-center gap-4 sm:flex">
              <Link
                href="/videos"
                className={`font-sans text-[11px] uppercase tracking-[0.3em] transition ${
                  current === "videos" ? "text-[#d04c57]" : "text-[#c5c5c5]"
                }`}
              >
                Videos
              </Link>
              <Link
                href="/gallery"
                className={`font-sans text-[11px] uppercase tracking-[0.3em] transition ${
                  current === "gallery" ? "text-[#d04c57]" : "text-[#c5c5c5]"
                }`}
              >
                Gallery
              </Link>
            </div>
          </div>

          <div className="hidden flex-wrap items-center gap-x-5 gap-y-3 font-sans text-[11px] uppercase tracking-[0.28em] text-[#bdbdbd] sm:flex">
            {homeLinks.map((link) => (
              <Link key={link.href} href={current === "home" ? link.href : `/${link.href}`}>
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white sm:hidden"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[1px] w-5 bg-white transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[1px] w-5 bg-white transition ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[1px] w-5 bg-white transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>

        {isOpen ? (
          <div className="mt-4 grid gap-3 border-t border-white/10 pt-4 sm:hidden">
            <Link
              href="/videos"
              className={`font-sans text-[11px] uppercase tracking-[0.3em] ${
                current === "videos" ? "text-[#d04c57]" : "text-[#d8d8d8]"
              }`}
              onClick={closeMenu}
            >
              Videos
            </Link>
            <Link
              href="/gallery"
              className={`font-sans text-[11px] uppercase tracking-[0.3em] ${
                current === "gallery" ? "text-[#d04c57]" : "text-[#d8d8d8]"
              }`}
              onClick={closeMenu}
            >
              Gallery
            </Link>
            {homeLinks.map((link) => (
              <Link
                key={link.href}
                href={current === "home" ? link.href : `/${link.href}`}
                className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#bdbdbd]"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        ) : null}
      </nav>
    </header>
  );
}
