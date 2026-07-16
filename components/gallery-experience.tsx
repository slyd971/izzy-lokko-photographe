"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionReveal } from "@/components/section-reveal";
import type { GalleryCategory, GalleryImage } from "@/lib/gallery";

type GalleryExperienceProps = {
  categories: GalleryCategory[];
  images: GalleryImage[];
};

export function GalleryExperience({
  categories,
  images,
}: GalleryExperienceProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((image) => image.category === activeCategory);

  return (
    <section className="shell pb-12 sm:pb-20 lg:pb-24">
      <SectionReveal className="border-y border-white/10 py-6 sm:py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#d04c57]">
              Galeries photos par event
            </p>
            <p className="mt-3 text-[0.98rem] leading-7 text-[#c6c6c6] sm:mt-4 sm:text-[1rem] sm:leading-8">
              Un aperçu photo du travail d&apos;Izzy Lokko pour les events, la nightlife
              et les formats premium.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-2"
            aria-label="Filtrer la galerie par projet"
            role="group"
          >
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              aria-pressed={activeCategory === "all"}
              aria-controls="gallery-grid"
              className={`inline-flex items-center rounded-full border px-4 py-2 font-sans text-[11px] uppercase tracking-[0.26em] transition ${
                activeCategory === "all"
                  ? "border-[#c30f1d] bg-[#c30f1d]/15 text-white"
                  : "border-white/10 text-[#d0d0d0] hover:border-white/25"
              }`}
            >
              Tout
            </button>

            {categories.map((category) => (
              <button
                key={category.slug}
                type="button"
                onClick={() => setActiveCategory(category.slug)}
                aria-pressed={activeCategory === category.slug}
                aria-controls="gallery-grid"
                className={`inline-flex items-center rounded-full border px-4 py-2 font-sans text-[11px] uppercase tracking-[0.26em] transition ${
                  activeCategory === category.slug
                    ? "border-[#c30f1d] bg-[#c30f1d]/15 text-white"
                    : "border-white/10 text-[#d0d0d0] hover:border-white/25"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </SectionReveal>

      <div
        id="gallery-grid"
        className="mt-8 columns-1 gap-3 sm:mt-10 sm:gap-4 sm:columns-2 lg:columns-3"
      >
        {filteredImages.map((image, index) => (
          <SectionReveal key={image.src} delay={(index % 6) * 0.04} className="mb-3 break-inside-avoid sm:mb-4">
            <article className="group relative overflow-hidden border border-white/10 bg-black">
              <div className="relative aspect-[4/5]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.52))]" />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#d04c57]">
                  {image.categoryLabel}
                </p>
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#d8d8d8]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </article>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
