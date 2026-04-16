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
    <main className="bg-[#050505] pt-20 text-white sm:pt-24">
      <SiteHeader current="videos" />

      <section className="shell py-8 sm:py-16 lg:py-20">
        <div className="overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(195,15,29,0.18),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] px-4 py-6 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          <div className="mt-4 sm:mt-12">
            <div className="max-w-3xl">
              <p className="editorial-kicker">Videos</p>
              <h1 className="mt-4 font-display text-[2rem] uppercase leading-[0.98] tracking-[0.06em] text-white sm:mt-5 sm:text-[4rem]">
                Lokko Tv en action
              </h1>
              <p className="mt-4 max-w-xl text-[0.98rem] leading-7 text-[#c4c4c4] sm:mt-6 sm:text-[1.02rem] sm:leading-8">
                Quelques vidéos pour montrer l&apos;univers de Lokko TV,
                entre event, ambiance, portrait et image de scène.
              </p>
            </div>
          </div>
        </div>
      </section>

      <VideoLibrary />
    </main>
  );
}
