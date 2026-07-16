"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { GalleryPreview } from "@/components/gallery-preview";
import { SiteHeader } from "@/components/site-header";
import { VideoSelection } from "@/components/video-selection";
import type { GalleryCategory, GalleryImage } from "@/lib/gallery";
import {
  contactEmail,
  contactPhoneDisplay,
  contactWhatsApp,
  siteName,
} from "@/lib/site";

const contactEmailHref = `mailto:${contactEmail}?subject=Demande%20de%20booking`;
const whatsappHref = contactWhatsApp;
const socialLinks = {
  instagram: "https://www.instagram.com/izzy_lokko/",
  snapchat: "https://www.snapchat.com/add/izzy_lokko",
  tiktok: "https://www.tiktok.com/@izzy_lokko",
};

const landingCopy = {
  heroSubtitle: "Vidéaste événementiel . Photographe . Paris",
  heroContext: "Premium events . Nightlife . Private events",
  kpis: [
    { firstLine: "+50", secondLine: "events couverts en 2025" },
    {
      firstLine: "Rap Contenders",
      mobileFirstLine: ["Rap", "Contenders"],
      secondLine: "vidéaste officiel",
      compactMobile: true,
    },
    { firstLine: "+20", secondLine: "partenariats brands & artistes" },
    {
      firstLine: "La Mif Paris",
      mobileFirstLine: ["La Mif", "Paris"],
      secondLine: "vidéaste officiel",
      compactMobile: true,
    },
  ],
  bioTitle: "Un regard affûté. Une présence fiable. Une image juste.",
  bioParagraphs: [
    "Cyril, aka Izzy Lokko, couvre les events parisiens avec un regard rapide, propre et instinctif. En photo comme en vidéo, chaque image cherche le bon moment, la bonne présence et le bon rythme.",
    "Sous son nom d'artiste Izzy Lokko et la signature visuelle Lokko TV, il accompagne soirées, marques, artistes et private events avec une exécution souple, réactive et premium.",
  ],
  servicesTitle: "Des Images pensées pour marquer.",
  servicesIntro:
    "Aftermovies, couverture photo-vidéo et contenus sociaux pensés pour les events, la nightlife, les artistes et les activations premium.",
  services: [
    "Aftermovie / recap event",
    "Couverture photo / vidéo de soirée",
    "Contenus sociaux prêts à diffuser",
    "Formats courts pour artistes, lieux et marques",
  ],
  contactTitle: "Parlons du prochain projet.",
  contactText:
    "Pour un event, un lancement, une soirée privée ou un format photo-vidéo sur mesure, Izzy répond directement aux demandes de booking et de collaboration.",
};

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

function InstagramIcon({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
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

function WhatsAppIcon({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
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

function SnapchatIcon({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
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

function TikTokIcon({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#111111" />
      <path
        d="M14.8 5.5c.4 1.15 1.1 2 2.25 2.55.48.23.97.37 1.45.42v2.18a6.34 6.34 0 01-1.9-.46 5.5 5.5 0 01-.98-.53v4.17a4.78 4.78 0 11-4.78-4.77c.16 0 .31 0 .47.03v2.27a2.5 2.5 0 00-.47-.05 2.5 2.5 0 102.49 2.52V5.5h1.47z"
        fill="#25F4EE"
      />
      <path
        d="M14.42 5.1c.39 1.15 1.06 2 2.21 2.55.48.23.97.37 1.45.42v2.18a6.34 6.34 0 01-1.9-.46 5.5 5.5 0 01-.98-.53v4.17a4.78 4.78 0 11-4.78-4.77c.16 0 .31 0 .47.03v2.27a2.5 2.5 0 00-.47-.05 2.5 2.5 0 102.49 2.52V5.1h1.51z"
        fill="#FE2C55"
        opacity="0.92"
      />
      <path
        d="M14.62 5.3c.39 1.15 1.06 2 2.21 2.55.48.23.97.37 1.45.42v2.18a6.34 6.34 0 01-1.9-.46 5.5 5.5 0 01-.98-.53v4.17a4.78 4.78 0 11-4.78-4.77c.16 0 .31 0 .47.03v2.27a2.5 2.5 0 00-.47-.05 2.5 2.5 0 102.49 2.52V5.3h1.51z"
        fill="white"
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
  const openEmail = () => {
    window.location.href = contactEmailHref;
  };

  return (
    <main className="overflow-x-clip bg-[#050505] text-white">
      <SiteHeader current="home" />

      <section
        className="relative flex min-h-[72svh] items-center justify-center overflow-hidden pt-16 sm:min-h-[68vh] sm:pt-0 lg:min-h-[82vh]"
        aria-labelledby="hero-title"
      >
        <BgVideo
          src="/video-hero.mp4"
          className="absolute inset-0 h-full w-full object-cover object-[54%_42%] sm:object-[56%_36%] lg:object-[58%_28%]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.18),rgba(0,0,0,0.78)),linear-gradient(180deg,rgba(0,0,0,0.34),rgba(0,0,0,0.7))]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(195,15,29,0.1),transparent_32%,transparent_68%,rgba(195,15,29,0.08))]" />

        <SectionReveal className="relative z-10 px-4 text-center sm:px-6">
          <p className="sr-only">
            {siteName}, vidéaste événementiel et photographe à Paris pour premium events,
            nightlife et private events.
          </p>
          <h1
            id="hero-title"
            className="hero-name text-[2.1rem] uppercase tracking-[0.1em] text-white sm:text-[4.4rem] md:text-[5.6rem] lg:text-[6.6rem]"
          >
            Izzy Lokko
          </h1>
          <p className="mt-4 font-sans text-[0.72rem] uppercase tracking-[0.2em] text-[#d7d7d7] sm:mt-5 sm:text-[1.02rem] sm:tracking-[0.42em] md:text-[1.08rem]">
            {landingCopy.heroSubtitle}
          </p>
          <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.22em] text-[#bcbcbc] sm:text-[11px] sm:tracking-[0.3em]">
            {landingCopy.heroContext}
          </p>
        </SectionReveal>
      </section>

      <section
        className="shell border-b border-white/10 py-4"
        aria-label="Liens de contact et réseaux sociaux"
      >
        <SectionReveal className="flex flex-wrap items-center justify-center gap-5 sm:gap-10">
          <a
            href={contactEmailHref}
            aria-label="Envoyer un email à Izzy Lokko"
            className="inline-flex items-center justify-center text-[#ff4d5a] transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c30f1d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
            onClick={(event) => {
              event.preventDefault();
              openEmail();
            }}
          >
            <Mail className="size-6" />
          </a>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Voir le profil Instagram d'Izzy Lokko"
            className="inline-flex items-center justify-center transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c30f1d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
          >
            <InstagramIcon />
          </a>
          <a
            href={socialLinks.snapchat}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Voir le profil Snapchat d'Izzy Lokko"
            className="inline-flex items-center justify-center transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c30f1d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
          >
            <SnapchatIcon />
          </a>
          <a
            href={socialLinks.tiktok}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Voir le profil TikTok d'Izzy Lokko"
            className="inline-flex items-center justify-center transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c30f1d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
          >
            <TikTokIcon />
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Contacter Izzy Lokko sur WhatsApp"
            className="inline-flex items-center justify-center transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c30f1d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
          >
            <WhatsAppIcon />
          </a>
        </SectionReveal>
      </section>

      <section
        className="shell py-4 sm:py-5 lg:py-6"
        aria-label="Indicateurs de crédibilité"
      >
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {landingCopy.kpis.map((item, index) => (
            <motion.div
              key={`${item.firstLine}-${item.secondLine}`}
              initial={{ opacity: 0, y: 24, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -2, scale: 1.005 }}
              className="group relative overflow-hidden rounded-[1.15rem] bg-transparent px-4 py-5 sm:px-6 sm:py-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(195,15,29,0.08),transparent_70%)]" />
              <div className="relative flex min-h-[7.4rem] flex-col items-center justify-center text-center sm:min-h-[7rem]">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.55, delay: 0.14 + index * 0.08 }}
                  className={`mx-auto flex w-full flex-col items-center justify-center text-center font-display uppercase text-white sm:max-w-none sm:text-[2rem] sm:leading-[0.95] sm:tracking-[0.08em] ${
                    item.compactMobile
                      ? "max-w-[8.6ch] text-[1.05rem] leading-[1.08] tracking-[0.035em]"
                      : "max-w-[10ch] text-[1.16rem] leading-[1.04] tracking-[0.05em]"
                  }`}
                >
                  {item.mobileFirstLine ? (
                    <>
                      <span className="flex flex-col items-center sm:hidden">
                        {item.mobileFirstLine.map((line) => (
                          <span key={line} className="block w-full text-center">
                            {line}
                          </span>
                        ))}
                      </span>
                      <span className="hidden w-full text-center sm:block">{item.firstLine}</span>
                    </>
                  ) : (
                    item.firstLine
                  )}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.55, delay: 0.2 + index * 0.08 }}
                  className="mt-2 max-w-[16ch] text-balance font-sans text-[10px] uppercase leading-5 tracking-[0.18em] text-[#bcbcbc] sm:text-[11px] sm:tracking-[0.24em]"
                >
                  {item.secondLine}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="bio" aria-labelledby="bio-title" className="shell py-10 sm:py-12 lg:py-16">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionReveal>
            <div className="overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/izzy-profil.png"
                alt="Portrait d'Izzy Lokko, vidéaste et photographe événementiel à Paris"
                width={900}
                height={1200}
                className="h-auto w-full object-cover grayscale"
                priority
              />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08} className="min-w-0 space-y-6 sm:space-y-8">
            <p className="editorial-kicker">Bio</p>
            <h2
              id="bio-title"
              className="max-w-[24ch] font-display text-[1.75rem] uppercase leading-[1.02] tracking-[0.06em] text-white sm:text-[2.5rem] lg:text-[2.9rem]"
            >
              {landingCopy.bioTitle}
            </h2>
            <div className="grid gap-6 border-t border-white/10 pt-6 md:grid-cols-2 sm:gap-8">
              {landingCopy.bioParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[0.98rem] leading-7 text-[#c5c5c5] sm:text-[1.02rem] sm:leading-8"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#9f9f9f] sm:text-[11px] sm:tracking-[0.3em]">
                Aperçu services
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {landingCopy.services.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center border border-white/10 bg-white/[0.03] px-3 py-2 font-sans text-[10px] uppercase tracking-[0.16em] text-[#d6d6d6] sm:px-4 sm:text-[11px] sm:tracking-[0.22em]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </SectionReveal>
        </div>
      </section>

      <VideoSelection showCta />

      <GalleryPreview categories={galleryCategories} images={galleryImages} />

      <section
        id="services"
        aria-labelledby="services-title"
        className="shell pb-4 pt-10 sm:pb-6 sm:pt-12 lg:pb-8 lg:pt-16"
      >
        <SectionReveal className="grid gap-8 border-t border-white/10 py-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="min-w-0">
            <p className="editorial-kicker">Services</p>
            <h2
              id="services-title"
              className="mt-5 max-w-[24ch] font-display text-[2rem] uppercase leading-[0.98] tracking-[0.08em] text-white sm:text-[2.5rem] lg:text-[2.9rem]"
            >
              {landingCopy.servicesTitle}
            </h2>
            <p className="mt-4 max-w-[30rem] text-[0.98rem] leading-7 text-[#c4c4c4] sm:text-[1rem] sm:leading-8">
              {landingCopy.servicesIntro}
            </p>
          </div>
          <ul className="min-w-0 space-y-4" aria-label="Prestations proposées">
            {landingCopy.services.map((item, index) => (
              <li
                key={item}
                className="flex items-center justify-between gap-4 border-b border-white/10 py-4 font-sans text-[12px] uppercase tracking-[0.16em] text-[#d8d8d8] sm:text-sm sm:tracking-[0.24em]"
              >
                <span className="min-w-0 break-words pr-2">{item}</span>
                <span className="text-[#c30f1d]">{String(index + 1).padStart(2, "0")}</span>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-title"
        className="shell pt-0 pb-10 sm:pt-1 sm:pb-12 lg:pt-2 lg:pb-16"
      >
        <SectionReveal className="border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-6 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:items-stretch">
            <div className="min-w-0 space-y-8">
              <div className="space-y-5">
                <p className="editorial-kicker">Contact</p>
                <h2
                  id="contact-title"
                  className="max-w-[22ch] font-display text-[1.75rem] uppercase leading-[1.02] tracking-[0.06em] text-white sm:text-[2.8rem] lg:text-[3.3rem]"
                >
                  {landingCopy.contactTitle}
                </h2>
                <p className="max-w-[36rem] text-[1.02rem] leading-8 text-[#c4c4c4]">
                  {landingCopy.contactText}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <a
                  className="line-button w-full justify-center"
                  href={contactEmailHref}
                  aria-label="Envoyer une demande de booking par email"
                  onClick={(event) => {
                    event.preventDefault();
                    openEmail();
                  }}
                >
                  Demande booking
                  <Mail className="size-4" />
                </a>
                <a
                  className="line-button w-full justify-center"
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Écrire à Izzy Lokko sur WhatsApp"
                >
                  WhatsApp
                  <WhatsAppIcon className="size-4" />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[19rem] overflow-hidden border border-white/10 bg-white/5 lg:mr-0 lg:max-w-[24rem]">
              <Image
                src="/izzy-contact.jpeg"
                alt="Izzy Lokko, contact booking photo et vidéo à Paris"
                width={900}
                height={1200}
                className="h-full w-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.72))]" />
              <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/45 p-4 backdrop-blur-sm sm:p-8">
                <div className="space-y-3 font-sans text-[11px] uppercase tracking-[0.16em] text-[#e1e1e1] sm:space-y-4 sm:text-sm sm:tracking-[0.24em]">
                  <a
                    href={contactEmailHref}
                    className="block"
                    onClick={(event) => {
                      event.preventDefault();
                      openEmail();
                    }}
                  >
                    {contactEmail}
                  </a>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="block"
                >
                  {contactPhoneDisplay}
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
