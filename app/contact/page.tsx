import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact YET:FAB — Tel Aviv. studio@yetarchitecture.com · +972-58-629-7943",
  alternates: { canonical: "https://www.yetfab.com/contact" },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-[70px]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Info column */}
        <div className="flex flex-col gap-6 px-5 md:px-14 pt-16 pb-16 max-w-sm">
          <p className="text-[0.72rem] tracking-[0.06em] font-medium text-[#0A0A0A]">
            YET:FAB
          </p>
          <p className="text-[0.72rem] leading-[1.8] text-[#0A0A0A]">
            Tel Aviv, Israel
          </p>
          <Link
            href="mailto:studio@yetarchitecture.com"
            className="text-[0.72rem] leading-[1.8] text-[#0A0A0A] hover:text-[#2222FF] transition-colors"
          >
            studio@yetarchitecture.com
          </Link>
          <Link
            href="tel:+972586297943"
            className="text-[0.72rem] leading-[1.8] text-[#0A0A0A] hover:text-[#2222FF] transition-colors"
          >
            +972-58-629-7943
          </Link>
          <div className="flex flex-col gap-2 mt-2">
            <Link
              href="https://www.instagram.com/yetfab/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.72rem] text-[#2222FF] hover:underline"
            >
              instagram.com/yetfab
            </Link>
            <Link
              href="https://www.linkedin.com/company/yet-fab/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.72rem] text-[#2222FF] hover:underline"
            >
              linkedin.com/company/yet-fab
            </Link>
          </div>

          <Link
            href="/contact/inquiry"
            className="mt-6 inline-block bg-[#2222FF] text-white text-[0.6rem] tracking-[0.16em] uppercase px-8 py-3 rounded-full hover:opacity-90 transition-opacity w-fit"
          >
            SEND INQUIRY
          </Link>
        </div>

        {/* Images column */}
        <div className="flex flex-col gap-[10px] px-5 md:px-0 md:pr-14">
          <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
            <Img
              src="/images/contact/IMG_2915.jpg"
              alt="YET:FAB studio — Tel Aviv"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
            <Img
              src="/images/contact/IMG_2913.png"
              alt="YET:FAB fabrication — Tel Aviv"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
