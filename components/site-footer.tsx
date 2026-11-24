import { brandSignature, siteName } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] text-white">
      <div className="shell flex flex-col gap-4 py-6 font-sans text-[10px] uppercase tracking-[0.18em] text-[#9f9f9f] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-7 sm:text-[11px] sm:tracking-[0.24em]">
        <p>
          &copy; 2026 {siteName} / {brandSignature}
        </p>
        <p>
          Press kit photographe réalisé par{" "}
          <a
            href="https://www.presskit.fr/photographe"
            target="_blank"
            rel="noopener"
            className="whitespace-nowrap underline underline-offset-4 transition duration-300 hover:text-white"
          >
            PressKit For You
          </a>
        </p>
      </div>
    </footer>
  );
}
