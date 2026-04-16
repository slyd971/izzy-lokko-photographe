"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { GalleryPreview } from "@/components/gallery-preview";
import { SiteHeader } from "@/components/site-header";
import { VideoSelection } from "@/components/video-selection";
import type { GalleryCategory, GalleryImage } from "@/lib/gallery";

const statements = [
  "50+ events en 2025",
  "Vidéaste attitré de Rap Contenders",
  "Premium events, private events, nightlife",
];

const services = [
  "Video recap / After Movie",
  "Street Video / Content",
  "Social Media Content",
  "Couverture Private Event Photo / Video",
];

function BgVideo({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7">
      <defs>
        <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f9ce34" />
          <stop offset="45%" stopColor="#ee2a7b" />
          <stop offset="100%" stopColor="#6228d7" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="url(#ig-gradient)" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="white" strokeWidth="1.8" />
      <circle cx="17.25" cy="6.75" r="1.2" fill="white" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7">
      <circle cx="12" cy="12" r="10" fill="#25D366" />
      <path
        d="M8.7 18.3l.7-2.5a6.3 6.3 0 117.2-.7 6.3 6.3 0 01-6.1 1.4l-1.8.5z"
        fill="white"
        opacity=".18"
      />
      <path
        d="M15.84 13.97c-.2-.1-1.16-.57-1.34-.64-.18-.07-.31-.1-.44.1-.13.2-.5.64-.61.77-.11.13-.23.15-.42.05-.2-.1-.85-.31-1.62-.98-.6-.53-1-1.18-1.12-1.38-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.34.1-.12.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.44-1.07-.6-1.47-.16-.39-.32-.34-.44-.35h-.38c-.13 0-.35.05-.53.25-.18.2-.69.67-.69 1.64s.7 1.9.8 2.03c.1.13 1.37 2.1 3.32 2.94.47.2.84.33 1.13.43.47.15.9.13 1.24.08.38-.06 1.16-.47 1.33-.92.16-.46.16-.85.11-.92-.04-.07-.17-.11-.37-.21z"
        fill="white"
      />
    </svg>
  );
}

function SnapchatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7">
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#FFFC00" />
      <path
        d="M12 6.1c1.74 0 3.15 1.4 3.15 3.13v1.18c0 .21.09.4.24.54.38.35 1 .66 1.56.86.18.06.25.27.14.42-.27.39-.82.67-1.48.78-.1.02-.18.1-.2.2-.1.55-.54.97-1.08 1.04-.24.03-.48.15-.64.34-.43.48-1.03.75-1.69.75s-1.26-.27-1.69-.75a1.12 1.12 0 00-.64-.34 1.28 1.28 0 01-1.08-1.04.28.28 0 00-.2-.2c-.66-.11-1.21-.39-1.48-.78-.11-.15-.04-.36.14-.42.56-.2 1.18-.51 1.56-.86.15-.14.24-.33.24-.54V9.23A3.14 3.14 0 0112 6.1z"
        fill="white"
        stroke="#111"
        strokeWidth="0.6"
      />
    </svg>
  );
}

type PressKitLandingProps = {
  galleryCategories: GalleryCategory[];
  galleryImages: GalleryImage[];
};

export function PressKitLanding({
  galleryCategories,
  galleryImages,
}: PressKitLandingProps) {
  return (
    <main className="bg-[#050505] text-white">
      <SiteHeader current="home" />

      <section className="relative flex min-h-[72svh] items-center justify-center overflow-hidden pt-16 sm:min-h-[68vh] sm:pt-0 lg:min-h-[82vh]">
        <BgVideo
          src="/video-hero.mp4"
          className="absolute inset-0 h-full w-full object-cover object-[54%_42%] sm:object-[56%_36%] lg:object-[58%_28%]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.18),rgba(0,0,0,0.78)),linear-gradient(180deg,rgba(0,0,0,0.34),rgba(0,0,0,0.7))]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(195,15,29,0.1),transparent_32%,transparent_68%,rgba(195,15,29,0.08))]" />

        <SectionReveal className="relative z-10 px-4 text-center sm:px-6">
          <h1 className="hero-name text-[2.1rem] uppercase tracking-[0.1em] text-white sm:text-[4.4rem] md:text-[5.6rem] lg:text-[6.6rem]">
            Izzy Lokko
          </h1>
          <p className="mt-4 font-sans text-[0.72rem] uppercase tracking-[0.2em] text-[#d7d7d7] sm:mt-5 sm:text-[1.02rem] sm:tracking-[0.42em] md:text-[1.08rem]">
            Vidéaste . Photographe
          </p>
        </SectionReveal>
      </section>

      <section className="shell border-b border-white/10 py-4">
        <SectionReveal className="flex flex-wrap items-center justify-center gap-5 sm:gap-10">
          <a
            href="mailto:cyril.hassiotis@hotmail.fr"
            aria-label="Email Izzy Lokko"
            className="inline-flex items-center justify-center text-[#ff4d5a] transition hover:scale-105"
          >
            <Mail className="size-6" />
          </a>
          <a
            href="https://www.instagram.com/izzy_lokko/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram Izzy Lokko"
            className="inline-flex items-center justify-center transition hover:scale-105"
          >
            <InstagramIcon />
          </a>
          <span
            aria-label="Snapchat Izzy Lokko"
            className="inline-flex items-center justify-center transition"
          >
            <SnapchatIcon />
          </span>
          <a
            href="https://wa.me/33631565895"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp Izzy Lokko"
            className="inline-flex items-center justify-center transition hover:scale-105"
          >
            <WhatsAppIcon />
          </a>
        </SectionReveal>
      </section>

      <section id="bio" className="shell py-10 sm:py-12 lg:py-16">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionReveal>
            <div className="overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/izzy-profil.png"
                alt="Izzy Lokko"
                width={900}
                height={1200}
                className="h-auto w-full object-cover grayscale"
                priority
              />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08} className="space-y-6 sm:space-y-8">
            <p className="editorial-kicker">Bio</p>
            <h2 className="max-w-[22ch] font-display text-[1.75rem] uppercase leading-[1.02] tracking-[0.06em] text-white sm:text-[2.5rem] lg:text-[2.9rem]">
              Un regard affûté, mobile, instinctif.
            </h2>
            <div className="grid gap-6 border-t border-white/10 pt-6 md:grid-cols-2 sm:gap-8">
              <p className="text-[0.98rem] leading-7 text-[#c5c5c5] sm:text-[1.02rem] sm:leading-8">
                Cyril aka Izzy Lokko est un photographe aguerri des soirées et events
                parisiens. En seulement 4 ans dans la game, il a su apporter sa touche
                personnelle et se démarque par son adaptabilité, sa polyvalence et sa
                réactivité.
              </p>
              <p className="text-[0.98rem] leading-7 text-[#c5c5c5] sm:text-[1.02rem] sm:leading-8">
                Vidéaste attitré de Rap Contenders, il est à l&apos;aise dans les
                milieux chics comme dans les milieux plus street. Izzy est là pour
                marquer les esprits avec un objectif affûté et une vraie lecture de
                l&apos;ambiance.
              </p>
            </div>

            <div className="space-y-4 border-t border-white/10 pt-6">
              {statements.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between gap-3 border-b border-white/10 pb-4 font-sans text-[11px] uppercase tracking-[0.12em] text-[#d6d6d6] sm:text-sm sm:tracking-[0.22em]"
                >
                  <span>{item}</span>
                  <span className="h-[1px] w-8 shrink-0 bg-[#c30f1d] sm:w-10" />
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <VideoSelection showCta />

      <GalleryPreview categories={galleryCategories} images={galleryImages} />

      <section id="services" className="shell py-10 sm:py-12 lg:py-16">
        <SectionReveal className="grid gap-8 border-y border-white/10 py-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="editorial-kicker">Services</p>
            <h2 className="mt-5 max-w-[24ch] font-display text-[2rem] uppercase leading-[0.98] tracking-[0.08em] text-white sm:text-[2.5rem] lg:text-[2.9rem]">
              Des formats simples. Une vraie présence visuelle.
            </h2>
          </div>
          <div className="space-y-4">
            {services.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between gap-4 border-b border-white/10 py-4 font-sans text-[12px] uppercase tracking-[0.16em] text-[#d8d8d8] sm:text-sm sm:tracking-[0.24em]"
              >
                <span>{item}</span>
                <span className="text-[#c30f1d]">01</span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>

      <section id="contact" className="shell py-10 sm:py-12 lg:py-16">
        <SectionReveal className="border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-6 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:items-stretch">
            <div className="space-y-8">
              <div className="space-y-5">
                <p className="editorial-kicker">Contact</p>
                <h2 className="max-w-[22ch] font-display text-[2.15rem] uppercase leading-[0.97] tracking-[0.08em] text-white sm:text-[2.8rem] lg:text-[3.3rem]">
                  Pour toute demande de collaboration.
                </h2>
                <p className="max-w-[36rem] text-[1.02rem] leading-8 text-[#c4c4c4]">
                  Pour un event, une couverture photo, un recap video ou un besoin
                  plus specifique, contacte Izzy directement pour en parler.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  className="red-button justify-center"
                  href="https://wa.me/33631565895"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                  <WhatsAppIcon />
                </a>
                <a
                  className="line-button justify-center"
                  href="https://www.instagram.com/izzy_lokko/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                  <InstagramIcon />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[19rem] overflow-hidden border border-white/10 bg-white/5 lg:mr-0 lg:max-w-[24rem]">
              <Image
                src="/izzy-contact.jpeg"
                alt="Izzy Lokko"
                width={900}
                height={1200}
                className="h-full w-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.72))]" />
              <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/45 p-4 backdrop-blur-sm sm:p-8">
                <div className="space-y-3 font-sans text-[11px] uppercase tracking-[0.16em] text-[#e1e1e1] sm:space-y-4 sm:text-sm sm:tracking-[0.24em]">
                  <a href="mailto:cyril.hassiotis@hotmail.fr" className="block">
                    cyril.hassiotis@hotmail.fr
                  </a>
                  <a
                    href="https://wa.me/33631565895"
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                  >
                    +33 6 31 56 58 95
                  </a>
                  <a
                    href="https://www.instagram.com/izzy_lokko/"
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                  >
                    @izzy_lokko
                  </a>
                  <span className="block">Paris / FR / Intl</span>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>
    </main>
  );
}
