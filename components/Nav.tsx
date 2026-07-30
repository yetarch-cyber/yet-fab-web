"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/shop", label: "SHOP" },
  { href: "/services", label: "SERVICES" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-5 md:px-10 py-4 bg-transparent">
        <Link href="/" className="leading-none" onClick={() => setOpen(false)}>
          <span className="font-black text-[1.5rem] md:text-[3.5rem] tracking-tight text-[#0A0A0A]">YET:</span>
          <span className="font-thin text-[1.5rem] md:text-[3.5rem] tracking-tight text-[#2222FF]">FAB</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center text-[0.84rem] tracking-[0.1em]">
          {NAV_LINKS.map((link) => (
            <span key={link.href} className="flex items-center">
              <span className="text-[#2222FF] px-1.5 select-none">•</span>
              <Link
                href={link.href}
                className={`transition-colors hover:text-[#2222FF] ${
                  pathname.startsWith(link.href) ? "text-[#2222FF]" : "text-[#0A0A0A]"
                }`}
              >
                {link.label}
              </Link>
            </span>
          ))}
          <span className="text-[#2222FF] px-1.5 select-none">•</span>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className={`block w-6 h-px bg-[#0A0A0A] transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-6 h-px bg-[#0A0A0A] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#0A0A0A] transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-b border-[#DCDAD5] ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-5 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-[0.85rem] tracking-[0.18em] uppercase transition-colors ${
                pathname.startsWith(link.href)
                  ? "text-[#2222FF]"
                  : "text-[#0A0A0A] hover:text-[#2222FF]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
