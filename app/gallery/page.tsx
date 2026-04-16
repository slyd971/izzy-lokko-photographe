import type { Metadata } from "next";
import { GalleryExperience } from "@/components/gallery-experience";
import { SiteHeader } from "@/components/site-header";
import { getGalleryCollection } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery | Izzy Lokko",
  description:
    "Gallery photo d'Izzy Lokko, organisée par catégories issues des dossiers du press kit.",
};

export default async function GalleryPage() {
  const gallery = await getGalleryCollection();

  return (
    <main className="bg-[#050505] text-white">
      <SiteHeader current="gallery" />

      <section className="shell py-12 sm:py-16 lg:py-20">
        <div className="overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(195,15,29,0.2),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          <div className="max-w-3xl">
            <p className="editorial-kicker">Gallery</p>
            <h1 className="mt-5 font-display text-[2.6rem] uppercase leading-[0.94] tracking-[0.08em] text-white sm:text-[4rem]">
              Une selection photo claire, directe, centree sur l'ambiance et la presence.
            </h1>
            <p className="mt-6 max-w-2xl text-[1.02rem] leading-8 text-[#c4c4c4]">
              Ici, l&apos;objectif est simple: montrer le regard de Cyril sur un event,
              une foule, un visage ou une energie de salle, sans surjouer le discours.
            </p>
          </div>
        </div>
      </section>

      <GalleryExperience categories={gallery.categories} images={gallery.images} />
    </main>
  );
}
