"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { homeVideos } from "@/data/videos";
import { SectionReveal } from "@/components/section-reveal";

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

type VideoSelectionProps = {
  showCta?: boolean;
};

export function VideoSelection({ showCta = false }: VideoSelectionProps) {
  return (
    <section id="videos" className="shell py-10 sm:py-14 lg:py-16">
      <SectionReveal className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="editorial-kicker">Selection</p>
          <h2 className="mt-4 max-w-[22ch] font-display text-[1.75rem] uppercase leading-[1.02] tracking-[0.06em] text-white sm:mt-5 sm:text-[2.5rem] lg:text-[2.9rem]">
            UN aperçu du travail video d&apos;Izzy
          </h2>
        </div>

        {showCta ? (
          <Link className="line-button w-fit" href="/videos">
            Voir videos
            <ArrowRight className="size-4" />
          </Link>
        ) : null}
      </SectionReveal>

      <div className="grid gap-[1px] bg-white/10 md:grid-cols-2">
        {homeVideos.map((video, index) => (
          <SectionReveal key={video.title} delay={index * 0.05}>
            <motion.article
              whileHover={{ scale: 0.995 }}
              transition={{ duration: 0.35 }}
              className="group relative min-h-[280px] overflow-hidden bg-black sm:min-h-[340px]"
            >
              <BgVideo
                src={video.src}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.74))]" />
              <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
                <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#d04c57]">
                  {video.title}
                </p>
              </div>
            </motion.article>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
