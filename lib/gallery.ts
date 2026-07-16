import { readdir } from "node:fs/promises";
import path from "node:path";

export type GalleryCategory = {
  slug: string;
  label: string;
  images: string[];
};

export type GalleryImage = {
  src: string;
  category: string;
  categoryLabel: string;
  alt: string;
};

export type GalleryCollection = {
  categories: GalleryCategory[];
  images: GalleryImage[];
};

const GALLERY_ROOT = path.join(process.cwd(), "public", "izzy-gallery");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

function formatCategoryLabel(slug: string) {
  if (slug.toLowerCase() === "lamif") {
    return "La Mif";
  }

  return slug
    .split(/[-_]/g)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

function formatAlt(label: string, index: number) {
  return `Izzy Lokko - ${label}, photo evenementielle ${index + 1} a Paris`;
}

export async function getGalleryCollection(): Promise<GalleryCollection> {
  const entries = await readdir(GALLERY_ROOT, { withFileTypes: true });
  const directoryEntries = entries.filter((entry) => entry.isDirectory());

  const categories = await Promise.all(
    directoryEntries.map(async (entry) => {
      const folderPath = path.join(GALLERY_ROOT, entry.name);
      const files = await readdir(folderPath, { withFileTypes: true });
      const images = files
        .filter((file) => file.isFile())
        .map((file) => file.name)
        .filter((name) => IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
        .map((name) => `/izzy-gallery/${entry.name}/${name}`);

      return {
        slug: entry.name,
        label: formatCategoryLabel(entry.name),
        images,
      };
    }),
  );

  const filteredCategories = categories.filter((category) => category.images.length > 0);

  return {
    categories: filteredCategories,
    images: filteredCategories.flatMap((category) =>
      category.images.map((src, index) => ({
        src,
        category: category.slug,
        categoryLabel: category.label,
        alt: formatAlt(category.label, index),
      })),
    ),
  };
}
