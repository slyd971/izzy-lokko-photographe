import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#120f0d",
        espresso: "#241915",
        sable: "#d6be9d",
        champagne: "#eadfce",
        ivory: "#f7f2e8",
        copper: "#b97858",
        terracotta: "#9a5d43",
        amber: "#f3c59a",
      },
      fontFamily: {
        sans: [
          "Avenir Next",
          "Avenir",
          "Helvetica Neue",
          "Segoe UI",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Iowan Old Style",
          "Palatino Linotype",
          "Book Antiqua",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
      },
      boxShadow: {
        ambient: "0 20px 80px rgba(13, 9, 7, 0.28)",
        luxe: "0 24px 120px rgba(15, 10, 7, 0.32)",
      },
      letterSpacing: {
        luxe: "0.32em",
      },
    },
  },
  plugins: [],
};

export default config;
