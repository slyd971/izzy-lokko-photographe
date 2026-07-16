import Link from "next/link";
import { brandSignature, siteName } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] text-white">
      <div className="shell flex flex-col gap-4 py-6 font-sans text-[10px] uppercase tracking-[0.18em] text-[#9f9f9f] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-7 sm:text-[11px] sm:tracking-[0.24em]">
        <p>
          &copy; 2026 {siteName} / {brandSignature}
        </p>
        <Link
          href="https://presskit.fr"
          target="_blank"
          rel="noreferrer noopener"
          className="transition duration-300 hover:text-white"
        >
          Powered by presskit.fr
        </Link>
      </div>
    </footer>
  );
}
