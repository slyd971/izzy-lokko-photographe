"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type SiteHeaderProps = {
  current?: "home" | "videos" | "gallery";
};

const navLinks = [
  { href: "#bio", label: "Bio" },
  { href: "#videos", label: "Video" },
  { href: "#gallery", label: "Photos" },
  { href: "#services", label: "Services" },
];

export function SiteHeader({ current = "home" }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const nextScrollY = window.scrollY;

      setHasScrolled(nextScrollY > 0);

      if (nextScrollY > previousScrollY && nextScrollY > 24) {
        setIsOpen(false);
      }

      previousScrollY = nextScrollY;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((open) => !open);
  const resolveHref = (href: string) => (current === "home" ? href : `/${href}`);
  const isActiveLink = (href: string) => {
    if (current === "home") {
      return false;
    }

    if (current === "videos") {
      return href === "#videos";
    }

    if (current === "gallery") {
      return href === "#gallery";
    }

    return false;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-0 sm:pt-2">
      <nav
        className={`w-full border-x-0 border-y border-white/10 bg-black/75 px-4 py-3 backdrop-blur-md sm:mx-auto sm:w-full sm:max-w-[1440px] sm:px-8 sm:py-2 lg:px-12 ${
          hasScrolled
            ? "sm:border-white/10 sm:bg-black/80 sm:backdrop-blur-md"
            : "sm:border-0 sm:bg-transparent sm:backdrop-blur-none"
        }`}
      >
        <div className="flex items-center justify-between sm:hidden">
          <Link href="/" className="shrink-0" onClick={closeMenu}>
            <Image
              src="/Logo%20Lokko%20TV%20Black.png"
              alt="Lokko TV"
              width={220}
              height={70}
              className="h-auto w-[92px] invert"
              priority
            />
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href={resolveHref("#contact")}
              className="inline-flex min-h-10 items-center rounded-full bg-white px-4 font-sans text-[10px] font-medium uppercase tracking-[0.24em] text-black transition duration-300 hover:bg-[#f2f2f2]"
              onClick={closeMenu}
            >
              Booking
            </Link>

            <button
              type="button"
              className="relative z-20 inline-flex h-10 w-10 shrink-0 touch-manipulation items-center justify-center rounded-full border border-white/15 text-white"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
              onPointerUp={toggleMenu}
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
        </div>

        {isOpen ? (
          <div className="mt-4 grid gap-3 border-t border-white/10 pt-4 text-right sm:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={resolveHref(link.href)}
                className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#bdbdbd]"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        ) : null}

        <div className="hidden items-center justify-between gap-8 sm:flex">
          <Link
            href="/"
            className="shrink-0 pl-1 pr-8 transition-opacity duration-300 hover:opacity-80"
            onClick={closeMenu}
          >
            <Image
              src="/Logo%20Lokko%20TV%20Black.png"
              alt="Lokko TV"
              width={220}
              height={70}
              className="h-auto w-[112px] invert"
              priority
            />
          </Link>

          <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 border-b border-white/8 pb-2 font-sans text-[10px] uppercase tracking-[0.32em] text-[#c8c8c8]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={resolveHref(link.href)}
                className={`relative pb-1 transition duration-300 hover:text-white ${
                  isActiveLink(link.href) ? "text-white" : "text-[#c8c8c8]"
                }`}
                onClick={closeMenu}
              >
                <span
                  className={`absolute inset-x-0 -bottom-[1px] h-px bg-gradient-to-r from-transparent via-[#d04c57] to-transparent transition-opacity duration-300 ${
                    isActiveLink(link.href) ? "opacity-100" : "opacity-0"
                  }`}
                />
                {link.label}
              </Link>
            ))}

            <Link
              href={resolveHref("#contact")}
              className="inline-flex items-center rounded-full bg-white px-4 py-2 text-[10px] font-medium tracking-[0.28em] text-black transition duration-300 hover:bg-[#f2f2f2]"
              onClick={closeMenu}
            >
              Booking
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
