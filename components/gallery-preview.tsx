import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import type { GalleryCategory, GalleryImage } from "@/lib/gallery";

type GalleryPreviewProps = {
  categories: GalleryCategory[];
  images: GalleryImage[];
};

export function GalleryPreview({ categories, images }: GalleryPreviewProps) {
  const previewImages = images.slice(0, 5);
  const previewCategories = categories.filter((category) => category.slug.toLowerCase() !== "lamif");

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="shell py-10 sm:py-12 lg:py-16">
      <SectionReveal className="flex flex-col gap-5 border-y border-white/10 py-8 sm:gap-6 sm:py-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="editorial-kicker">Photos</p>
          <h2
            id="gallery-title"
            className="mt-4 max-w-[22ch] font-display text-[1.75rem] uppercase leading-[1.02] tracking-[0.06em] text-white sm:mt-5 sm:text-[2.5rem] lg:text-[2.9rem]"
          >
            Dans l&apos;Oeil d&apos;Izzy
          </h2>
          <p className="mt-4 max-w-[34rem] text-[0.98rem] leading-7 text-[#c4c4c4] sm:text-[1rem] sm:leading-8">
            Une sélection photo événementielle pour la nightlife, les private events et
            les univers où chaque détail compte.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:items-start lg:items-end">
          <div className="flex flex-wrap gap-2">
            {previewCategories.map((category) => (
              <span
                key={category.slug}
                className="inline-flex items-center rounded-full border border-white/10 px-3 py-2 font-sans text-[10px] uppercase tracking-[0.18em] text-[#d0d0d0] sm:px-4 sm:text-[11px] sm:tracking-[0.26em]"
              >
                {category.label}
              </span>
            ))}
          </div>

          <Link className="line-button w-fit" href="/gallery" aria-label="Voir la galerie photo complete d'Izzy Lokko">
            Voir la galerie photo
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </SectionReveal>

      <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
        {previewImages.map((image, index) => {
          const featured = index === 0;

          return (
            <SectionReveal
              key={image.src}
              delay={index * 0.05}
              className={featured ? "sm:row-span-2" : undefined}
            >
              <article className="group relative overflow-hidden border border-white/10 bg-black">
                <div className={featured ? "aspect-[4/5]" : "aspect-[5/4]"}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={featured ? "(max-width: 1024px) 100vw, 40vw" : "(max-width: 1024px) 100vw, 28vw"}
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.58))]" />
                <div className="absolute inset-x-5 bottom-5">
                  <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#d04c57]">
                    {image.categoryLabel}
                  </p>
                </div>
              </article>
            </SectionReveal>
          );
        })}
      </div>
    </section>
  );
}
