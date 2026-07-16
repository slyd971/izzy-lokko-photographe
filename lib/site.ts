export const siteName = "Izzy Lokko";
export const brandSignature = "Lokko TV";
export const siteTitle =
  "Izzy Lokko | Videaste Paris, photographe evenementiel & nightlife";
export const siteDescription =
  "Press kit d'Izzy Lokko, alias Lokko TV, videaste a Paris et photographe evenementiel pour premium events, nightlife, private events, artistes et marques en France et a l'international.";
export const siteOgImage = "/opengraph-image";
export const contactEmail = "cyril.hassiotis@hotmail.fr";
export const contactPhone = "+33631565895";
export const contactPhoneDisplay = "+33 6 31 56 58 95";
export const contactWhatsApp = "https://wa.me/33631565895";

function normalizeUrl(value: string) {
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  return `https://${value}`;
}

export function getBaseUrl() {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL;

  return normalizeUrl(envUrl || "http://localhost:3000");
}
