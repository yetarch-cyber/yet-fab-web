import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 py-10 border-t border-[#DCDAD5]">
      <p className="text-[0.5rem] tracking-[0.2em] text-[#888] uppercase">
        Made by YET Architecture
      </p>
      <div className="flex items-center gap-6 text-[#888]">
        <Link
          href="https://www.instagram.com/yetfab/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-[#0A0A0A] transition-colors"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </Link>

        <span className="text-[#2222FF] text-xl select-none">◆</span>

        <Link
          href="https://www.linkedin.com/company/yet-fab/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-[#0A0A0A] transition-colors"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </Link>
      </div>
      <p className="text-[0.48rem] tracking-[0.15em] text-[#AAAAAA] uppercase">
        © 2025 YET:FAB
      </p>
    </footer>
  );
}
