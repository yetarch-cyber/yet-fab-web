import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact YET:FAB — Tel Aviv. studio@yetarchitecture.com · +972-58-629-7943",
  alternates: { canonical: "https://www.yetfab.com/contact" },
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: { sent?: string };
}) {
  const sent = searchParams?.sent === "true";

  return (
    <main className="min-h-screen pt-[70px]">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Form column */}
        <div className="px-5 md:px-14 pt-16 pb-20">
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full py-32 gap-6">
              <p className="text-[2rem] font-thin text-[#888] tracking-tight">Thank you!</p>
              <p className="text-[0.75rem] tracking-[0.1em] text-[#888]">
                We will get back to you soon.
              </p>
              <Link
                href="/contact"
                className="mt-4 bg-[#2222FF] text-white text-[0.62rem] tracking-[0.16em] uppercase px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                SEND ANOTHER
              </Link>
            </div>
          ) : (
            <ContactForm />
          )}
        </div>

        {/* Contact info column */}
        <div className="px-5 md:px-14 pt-16 pb-20 flex flex-col gap-4 border-t md:border-t-0 md:border-l border-[#DCDAD5]">
          <p className="text-[0.72rem] tracking-[0.06em] font-medium text-[#0A0A0A]">YET:FAB</p>
          <p className="text-[0.72rem] leading-[1.8] text-[#0A0A0A]">Tel Aviv, Israel</p>
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
        </div>
      </div>
    </main>
  );
}
