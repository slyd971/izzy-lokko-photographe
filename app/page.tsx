import type { Metadata } from "next";
import Script from "next/script";
import { PressKitLanding } from "@/components/press-kit-landing";
import { getGalleryCollection } from "@/lib/gallery";
import {
  brandSignature,
  contactEmail,
  contactPhone,
  getBaseUrl,
  siteDescription,
  siteName,
  siteOgImage,
  siteTitle,
} from "@/lib/site";

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    type: "website",
    images: [
      {
        url: siteOgImage,
        width: 1200,
        height: 630,
        alt: "Izzy Lokko | Videaste / Photographe a Paris",
      },
    ],
  },
};

export default async function Home() {
  const gallery = await getGalleryCollection();
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: siteName,
        description: siteDescription,
        inLanguage: "fr-FR",
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: siteName,
        alternateName: brandSignature,
        url: baseUrl,
        image: `${baseUrl}${siteOgImage}`,
        jobTitle: "Videaste et photographe evenementiel",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Paris",
          addressCountry: "FR",
        },
        areaServed: ["Paris", "France", "International"],
        email: `mailto:${contactEmail}`,
        telephone: contactPhone,
        sameAs: [
          "https://www.instagram.com/izzy_lokko/",
          "https://www.snapchat.com/add/izzy_lokko",
          "https://www.tiktok.com/@izzy_lokko",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${baseUrl}/#business`,
        name: brandSignature,
        alternateName: siteName,
        url: baseUrl,
        image: `${baseUrl}${siteOgImage}`,
        description: siteDescription,
        areaServed: ["Paris", "France", "International"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Paris",
          addressCountry: "FR",
        },
        email: `mailto:${contactEmail}`,
        telephone: contactPhone,
        founder: {
          "@id": `${baseUrl}/#person`,
        },
        sameAs: [
          "https://www.instagram.com/izzy_lokko/",
          "https://www.snapchat.com/add/izzy_lokko",
          "https://www.tiktok.com/@izzy_lokko",
        ],
        serviceType: [
          "Videaste evenementiel a Paris",
          "Photographe evenementiel",
          "Aftermovie premium",
          "Photo / video nightlife",
          "Contenus sociaux pour marques et artistes",
          "Private event photo / video",
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="izzy-lokko-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PressKitLanding
        galleryCategories={gallery.categories}
        galleryImages={gallery.images}
      />
    </>
  );
}
