import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Izzy Lokko | Videaste / Photographe",
  description:
    "Press kit premium d'Izzy Lokko, videaste / photographe base a Paris, specialise dans les evenements premium, prives et les univers nightlife en France et a l'international.",
  openGraph: {
    title: "Izzy Lokko | Videaste / Photographe",
    description:
      "Landing editoriale premium pour les evenements, soirees privees et univers image qui recherchent un regard adaptable, reactif et memorables.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
