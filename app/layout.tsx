import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import {
  brandSignature,
  getBaseUrl,
  siteDescription,
  siteName,
  siteOgImage,
  siteTitle,
} from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: brandSignature,
  keywords: [
    "videaste paris",
    "videaste evenementiel paris",
    "photographe evenementiel paris",
    "photographe paris",
    "photo video paris",
    "aftermovie evenement",
    "photographe nightlife",
    "nightlife paris",
    "private events paris",
    "premium events paris",
    "videaste evenementiel",
    "press kit videaste",
    "izzy lokko",
    "lokko tv",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "fr_FR",
    siteName,
    url: "/",
    images: [
      {
        url: siteOgImage,
        width: 1200,
        height: 630,
        alt: "Izzy Lokko | Videaste / Photographe a Paris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [siteOgImage],
    creator: "@izzy_lokko",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
