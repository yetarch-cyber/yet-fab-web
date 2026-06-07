import type { Metadata } from "next";
import Img from "@/components/Img";

export const metadata: Metadata = {
  title: "About",
  description:
    "YET:FAB is the fabrication studio of YET Architecture — an experimental practice creating 3D-printed objects, lighting, and custom components in Tel Aviv.",
  alternates: { canonical: "https://www.yetfab.com/about" },
};

export default function AboutPage() {
  return (
    <main className="pt-[70px]">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Text column */}
        <div className="px-5 md:px-10 pt-10 pb-16">
          <div className="flex flex-col gap-8 max-w-md">
            <p className="text-[0.75rem] leading-[2] text-[#0A0A0A]">
              At YET Architecture, we are an experimental practice dedicated to
              contributing to global development through innovative design. Our
              mission goes beyond traditional architecture — we aim to address
              modern and future challenges by expanding the very definition of
              architecture. Inspired by Hans Hollein&apos;s belief that
              &ldquo;everything is architecture,&rdquo; we strive to transform
              architecture from a mere service into a powerful tool for societal
              advancement.
            </p>

            <p className="text-[0.75rem] leading-[2] text-[#0A0A0A]">
              YET:FAB is an extension of this vision. Here, we create and offer
              unique, digitally fabricated products that embody our commitment
              to sustainability and environmental responsibility. Utilizing
              advanced technology techniques such as 3D printing and laser
              cutting, we explore new possibilities in design — always with an
              eye towards eco-conscious practices. Our products are not just
              functional pieces but also works of art, crafted with precision
              and purpose.
            </p>

            <p className="text-[0.75rem] leading-[2] text-[#0A0A0A]">
              In our shop, you will find a blend of art and craft, where each
              object is thoughtfully designed to be both beautiful and
              practical. These creations are meant to enrich your environment
              while promoting sustainable living.
            </p>

            <p className="text-[0.75rem] leading-[2] text-[#0A0A0A]">
              Join us in redefining the boundaries of design and architecture.
              Explore our collection of thoughtfully designed, sustainably
              produced items that are as functional as they are beautiful. At
              YET, we believe that every piece we create can contribute to a
              better, more sustainable future.
            </p>
          </div>
        </div>

        {/* Images column — 20% bigger */}
        <div className="flex flex-col">
          <div className="relative flex-1" style={{ minHeight: "60vh" }}>
            <Img
              src="/images/about/ADA_YET_3.jpg"
              alt="YET:FAB team — fabrication studio in Tel Aviv"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="relative flex-1" style={{ minHeight: "60vh" }}>
            <Img
              src="/images/about/ADA_YET_5.jpg"
              alt="Anastasiya and Ilya Kotler — YET Architecture founders"
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
