import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact YET:FAB — Tel Aviv. studio@yetarchitecture.com · +972-58-629-7943 · Instagram @yetfab",
  alternates: { canonical: "https://www.yetfab.com/contact" },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Mobile: stacked. Desktop: side-by-side */}
      <div className="flex flex-col md:flex-row min-h-[calc(100svh-65px)]">
        {/* Image side */}
        <div className="relative flex-1 min-h-[60vw] md:min-h-0">
          {/* Title overlaid top-left */}
          <div className="absolute top-8 left-5 md:left-10 z-10">
            <h1 className="text-[2.5rem] md:text-[3.5rem] leading-none tracking-tight">
              <span className="font-black text-[#0A0A0A]">YET:</span>
              <span className="font-thin text-[#2222FF]"> CONTACTS</span>
            </h1>
          </div>

          <Img
            src="/images/contact/studio.jpg"
            alt="YET:FAB fabrication studio — Tel Aviv"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
        </div>

        {/* Contact info side */}
        <div className="flex flex-col justify-center px-8 md:px-12 py-16 md:py-24 md:w-80 lg:w-96 shrink-0 bg-[#EDEDEB]">
          <div className="flex flex-col gap-4">
            <p className="text-[0.72rem] leading-[1.6] text-[#0A0A0A] font-medium">
              YET:FAB
            </p>
            <p className="text-[0.72rem] leading-[1.6] text-[#0A0A0A]">
              Tel Aviv, Israel
            </p>
            <Link
              href="mailto:studio@yetarchitecture.com"
              className="text-[0.72rem] leading-[1.6] text-[#0A0A0A] hover:text-[#2222FF] transition-colors"
            >
              studio@yetarchitecture.com
            </Link>
            <Link
              href="tel:+972586297943"
              className="text-[0.72rem] leading-[1.6] text-[#0A0A0A] hover:text-[#2222FF] transition-colors"
            >
              +972-58-629-7943
            </Link>

            <div className="mt-2 flex flex-col gap-2">
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

            {/* Inquiry CTA */}
            <div className="mt-8">
              <Link
                href="mailto:studio@yetarchitecture.com?subject=YET:FAB Inquiry"
                className="inline-block bg-[#2222FF] text-white text-[0.6rem] tracking-[0.16em] uppercase px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              >
                SEND INQUIRY
              </Link>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
