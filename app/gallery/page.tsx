import type { Metadata } from "next";
import { GalleryExperience } from "@/components/gallery-experience";
import { SiteHeader } from "@/components/site-header";
import { getGalleryCollection } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Photos | Izzy Lokko",
  description:
    "Photos d'Izzy Lokko, organisées par catégories issues des dossiers du press kit.",
};

export default async function GalleryPage() {
  const gallery = await getGalleryCollection();

  return (
    <main className="bg-[#050505] pt-20 text-white sm:pt-24">
      <SiteHeader current="gallery" />

      <section className="shell py-8 sm:py-16 lg:py-20">
        <div className="overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(195,15,29,0.2),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] px-4 py-6 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          <div className="max-w-3xl">
            <p className="editorial-kicker">Photos</p>
            <h1 className="mt-4 font-display text-[2rem] uppercase leading-[0.98] tracking-[0.06em] text-white sm:mt-5 sm:text-[4rem]">
              Les moments de vie captés par Lokko TV
            </h1>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-[#c4c4c4] sm:mt-6 sm:text-[1.02rem] sm:leading-8">
              Voici une selection du travail photo d&apos;Izzy Lokko : le but étant
              de toujours conserver l&apos;authenticité de l&apos;instant flashé par
              l&apos;objectif.
            </p>
          </div>
        </div>
      </section>

      <GalleryExperience categories={gallery.categories} images={gallery.images} />
    </main>
  );
}
