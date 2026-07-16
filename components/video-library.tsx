"use client";

import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { videos } from "@/data/videos";
import { SectionReveal } from "@/components/section-reveal";

function VideoCard({
  id,
  title,
  src,
  tag,
  description,
  isPlaying,
  onToggle,
  register,
  onStop,
}: {
  id: string;
  title: string;
  src: string;
  tag: string;
  description: string;
  isPlaying: boolean;
  onToggle: (id: string) => Promise<void>;
  register: (id: string, node: HTMLVideoElement | null) => void;
  onStop: (id: string) => void;
}) {
  return (
    <article className="overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] shadow-[0_30px_80px_rgba(0,0,0,0.3)]">
      <div className="relative aspect-[9/16] w-full bg-black">
        <video
          ref={(node) => register(id, node)}
          className="h-full w-full cursor-pointer object-cover"
          preload="metadata"
          playsInline
          aria-label={`${title} - ${description}`}
          onClick={() => void onToggle(id)}
          onPause={() => onStop(id)}
          onEnded={() => onStop(id)}
        >
          <source src={src} type="video/mp4" />
        </video>

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),transparent_28%,transparent_72%,rgba(0,0,0,0.5))]" />

        <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-4">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#d04c57]">
            {tag}
          </p>

          <button
            type="button"
            onClick={() => void onToggle(id)}
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/55 px-4 py-2 font-sans text-[11px] uppercase tracking-[0.28em] text-white transition hover:border-[#c30f1d]"
            aria-label={`${isPlaying ? "Mettre en pause" : "Lire"} ${title}`}
          >
            {isPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5">
        <p className="font-sans text-[12px] uppercase tracking-[0.28em] text-white">
          {title}
        </p>
      </div>
    </article>
  );
}

export function VideoLibrary() {
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const register = (id: string, node: HTMLVideoElement | null) => {
    videoRefs.current[id] = node;
  };

  const togglePlayback = async (id: string) => {
    const nextVideo = videoRefs.current[id];

    if (!nextVideo) {
      return;
    }

    if (activeVideoId && activeVideoId !== id) {
      const currentVideo = videoRefs.current[activeVideoId];
      currentVideo?.pause();
    }

    if (nextVideo.paused) {
      try {
        await nextVideo.play();
        setActiveVideoId(id);
      } catch {
        setActiveVideoId(null);
      }
      return;
    }

    nextVideo.pause();
    setActiveVideoId(null);
  };

  const stopVideo = (id: string) => {
    setActiveVideoId((current) => (current === id ? null : current));
  };

  return (
    <section className="shell pb-12 sm:pb-20 lg:pb-24">
      <SectionReveal className="grid gap-4 border-y border-white/10 py-6 sm:grid-cols-3 sm:gap-8 sm:py-8">
        <div>
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#d04c57]">
            Galerie vidéos
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.24em] text-[#a8a8a8]">
            Event. Culture. Lifestyle
          </p>
        </div>
      </SectionReveal>

      <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, index) => (
          <SectionReveal key={video.title} delay={index * 0.06}>
            <VideoCard
              id={video.src}
              {...video}
              isPlaying={activeVideoId === video.src}
              onToggle={togglePlayback}
              register={register}
              onStop={stopVideo}
            />
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
