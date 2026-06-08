import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#DCDAD5] px-5 md:px-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-2">
          <p className="text-[0.65rem] tracking-tight leading-none">
            <span className="font-black text-[#0A0A0A]">YET:</span>
            <span className="font-thin text-[#2222FF]"> FAB</span>
          </p>
          <p className="text-[0.55rem] tracking-[0.1em] text-[#888]">
            Fabrication studio of YET Architecture
          </p>
          <p className="text-[0.55rem] tracking-[0.08em] text-[#888]">
            Tel Aviv, Israel
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2">
          <Link
            href="mailto:studio@yetarchitecture.com"
            className="text-[0.55rem] tracking-[0.08em] text-[#888] hover:text-[#2222FF] transition-colors"
          >
            studio@yetarchitecture.com
          </Link>
          <Link
            href="tel:+972586297943"
            className="text-[0.55rem] tracking-[0.08em] text-[#888] hover:text-[#2222FF] transition-colors"
          >
            +972-58-629-7943
          </Link>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-2">
          <Link
            href="https://www.instagram.com/yetfab/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.55rem] tracking-[0.08em] text-[#888] hover:text-[#2222FF] transition-colors"
          >
            INSTAGRAM
          </Link>
          <Link
            href="https://www.linkedin.com/company/yet-fab/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.55rem] tracking-[0.08em] text-[#888] hover:text-[#2222FF] transition-colors"
          >
            LINKEDIN
          </Link>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-[#DCDAD5] flex justify-between items-center">
        <p className="text-[0.48rem] tracking-[0.15em] text-[#AAAAAA] uppercase">
          © 2025 YET:FAB
        </p>
        <p className="text-[0.48rem] tracking-[0.15em] text-[#AAAAAA] uppercase">
          Made by YET Architecture
        </p>
      </div>
    </footer>
  );
}
