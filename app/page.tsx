import { PressKitLanding } from "@/components/press-kit-landing";
import { getGalleryCollection } from "@/lib/gallery";

export default async function Home() {
  const gallery = await getGalleryCollection();

  return (
    <PressKitLanding
      galleryCategories={gallery.categories}
      galleryImages={gallery.images}
    />
  );
}
