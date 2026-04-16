import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { VideoLibrary } from "@/components/video-library";

export const metadata: Metadata = {
  title: "Videos | Izzy Lokko",
  description:
    "Selection video d'Izzy Lokko: recap, aftermovies, portrait et formats evenementiels.",
};

export default function VideosPage() {
  return (
    <main className="bg-[#050505] text-white">
      <SiteHeader current="videos" />

      <section className="shell py-12 sm:py-16 lg:py-20">
        <div className="overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(195,15,29,0.18),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="editorial-kicker">Videos</p>
              <h1 className="mt-5 font-display text-[2.6rem] uppercase leading-[0.94] tracking-[0.08em] text-white sm:text-[4rem]">
                Des images faites pour rester.
              </h1>
              <p className="mt-6 max-w-xl text-[1.02rem] leading-8 text-[#c4c4c4]">
                Ici, pas de galerie générique. Juste une sélection nette du regard,
                du rythme et de l'énergie qu'Izzy Lokko apporte sur un event, un
                portrait ou une scène.
              </p>
            </div>

            <div className="grid gap-[1px] bg-white/10">
              <div className="bg-black/40 px-5 py-4">
                <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#d04c57]">
                  Vision
                </p>
                <p className="mt-3 text-sm leading-7 text-[#cdcdcd]">
                  Du mouvement, de la tension, une vraie lecture de l'ambiance.
                </p>
              </div>

              <div className="bg-black/40 px-5 py-4">
                <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#d04c57]">
                  Usage
                </p>
                <p className="mt-3 text-sm leading-7 text-[#cdcdcd]">
                  Recap, aftermovie, format social ou capsule plus incarnée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoLibrary />
    </main>
  );
}
