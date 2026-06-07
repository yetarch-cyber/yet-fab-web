"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/shop", label: "SHOP" },
  { href: "/services", label: "SERVICES" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 py-4 bg-transparent">
      <Link href="/" className="leading-none">
        <span className="font-black text-[3rem] md:text-[3.5rem] tracking-tight text-[#0A0A0A]">
          YET:
        </span>
        <span className="font-thin text-[3rem] md:text-[3.5rem] tracking-tight text-[#2222FF]">
          {" "}FAB
        </span>
      </Link>

      <nav className="flex items-center text-[0.77rem] md:text-[0.84rem] tracking-[0.1em]">
        {NAV_LINKS.map((link) => (
          <span key={link.href} className="flex items-center">
            <span className="text-[#2222FF] px-1.5 select-none">•</span>
            <Link
              href={link.href}
              className={`transition-colors hover:text-[#2222FF] ${
                pathname.startsWith(link.href)
                  ? "text-[#2222FF]"
                  : "text-[#0A0A0A]"
              }`}
            >
              {link.label}
            </Link>
          </span>
        ))}
        <span className="text-[#2222FF] px-1.5 select-none">•</span>
      </nav>
    </header>
  );
}
