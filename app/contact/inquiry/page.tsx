import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Inquiry",
  description:
    "Send an inquiry to YET:FAB — 3D printing, bespoke fabrication, consultation, or shop. We'll get back to you soon.",
  alternates: { canonical: "https://www.yet-fab.com/contact/inquiry" },
};

export default function InquiryPage({
  searchParams,
}: {
  searchParams: { sent?: string };
}) {
  const sent = searchParams?.sent === "true";

  return (
    <main className="min-h-screen pt-[70px] px-5 md:px-14 pb-20">
      <div className="max-w-2xl mx-auto pt-12">
        {sent ? (
          <div className="flex flex-col items-center justify-center py-32 gap-6">
            <p className="text-[2rem] font-thin text-[#888] tracking-tight">
              Thank you!
            </p>
            <p className="text-[0.75rem] tracking-[0.1em] text-[#888]">
              We will get back to you soon.
            </p>
            <div className="flex gap-3 mt-4">
              <Link
                href="/contact/inquiry"
                className="bg-[#2222FF] text-white text-[0.6rem] tracking-[0.16em] uppercase px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                SEND ANOTHER
              </Link>
              <Link
                href="/"
                className="border border-[#2222FF] text-[#2222FF] text-[0.6rem] tracking-[0.16em] uppercase px-7 py-3 rounded-full hover:bg-[#2222FF] hover:text-white transition-colors"
              >
                BACK TO HOME
              </Link>
            </div>
          </div>
        ) : (
          <ContactForm />
        )}
      </div>
    </main>
  );
}
