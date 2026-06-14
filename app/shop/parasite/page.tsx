import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = {
  title: "PARASITE — Bespoke 3D-Printed Furniture Interventions",
  description:
    "PARASITE by YET:FAB & Binderman Architects — custom 3D-printed sculptural additions that attach to mass-produced furniture, transforming it into a unique piece.",
  alternates: { canonical: "https://www.yet-fab.com/shop/parasite" },
};

const GALLERY = [
  {
    src: "/images/shop/parasite/241005_YET_0140_ik copy.jpg",
    alt: "PARASITE — blue on tilted shelf",
    ratio: "3/4",
  },
  {
    src: "/images/shop/parasite/241005_YET_0231_ik copy.jpg",
    alt: "PARASITE — navy bursting through shelf",
    ratio: "3/4",
  },
  {
    src: "/images/shop/parasite/241005_YET_0040_ik copy - Copy.jpg",
    alt: "PARASITE — white on table legs",
    ratio: "16/9",
  },
  {
    src: "/images/shop/parasite/241005_YET_0169_ik copy.jpg",
    alt: "PARASITE — detail",
    ratio: "16/9",
  },
  {
    src: "/images/shop/parasite/241005_YET_0129_ik copy.jpg",
    alt: "PARASITE — electric blue, close detail",
    ratio: "3/4",
  },
  {
    src: "/images/shop/parasite/241005_YET_0097_ik copy.jpg",
    alt: "PARASITE — white on black table, detail",
    ratio: "3/4",
  },
  {
    src: "/images/shop/parasite/241005_YET_0157_ik copy.jpg",
    alt: "PARASITE — detail",
    ratio: "16/9",
  },
  {
    src: "/images/shop/parasite/241005_YET_0219_ik copy.jpg",
    alt: "PARASITE — detail",
    ratio: "16/9",
  },
];

export default function ParasitePage() {
  return (
    <main>
      {/* First section: 1 col text + 3 col image */}
      <section className="grid grid-cols-1 md:grid-cols-4 md:h-[1080px]">
        {/* Col 1: name + description */}
        <div className="flex flex-col gap-5 px-5 md:px-8 pt-[100px] pb-10 md:pt-[110px] overflow-y-auto">
          <p className="text-[0.6rem] tracking-[0.12em] text-[#888] uppercase">
            <Link href="/shop" className="hover:text-[#2222FF] transition-colors">
              Shop
            </Link>
            {" / "}Project
          </p>
          <div>
            <p className="text-[0.72rem] tracking-[0.14em] text-[#888] font-thin uppercase mb-1">
              YET Architecture + Binderman Architects
            </p>
            <h1 className="text-[3.5rem] font-black tracking-tight text-[#0A0A0A] leading-none">
              PARASITE
            </h1>
          </div>

          <div className="flex flex-col gap-2 py-2">
            {[
              "TO BLUR THE LINES BETWEEN MASS PRODUCTION AND CUSTOM DESIGN",
              "TO CHALLENGE THE NOTION THAT MASS-PRODUCED FURNITURE IS INHERENTLY GENERIC AND IMPERSONAL",
              "TO TRANSFORM MASS-PRODUCED OBJECTS INTO UNIQUE AND SUSTAINABLE PIECES THROUGH UPCYCLING",
            ].map((line) => (
              <p
                key={line}
                className="text-[0.58rem] tracking-[0.1em] leading-[1.8] text-[#2222FF] uppercase font-medium"
              >
                {line}
              </p>
            ))}
          </div>

          <p className="text-[0.7rem] leading-[2] text-[#888]">
            The Parasite project employs advanced 3D-printing techniques to
            create custom, sculptural interventions that seamlessly attach to
            mass-produced furniture, transforming standardized objects into
            unique, evolving pieces.
          </p>
          <p className="text-[0.7rem] leading-[2] text-[#888]">
            The process combines parametric design, algorithmic modeling, and
            digital fabrication, allowing each addition to respond precisely to
            the form and function of the existing furniture.
          </p>
          <p className="text-[0.62rem] leading-[1.8] text-[#AAAAAA]">
            Parasite made its debut at the Disclosure: Design Studios Unveiled
            exhibition at Isola Gallery during Dutch Design Week.
          </p>
        </div>

        {/* Cols 2-4: hero image */}
        <div className="md:col-span-3 relative min-h-[50vh] md:min-h-full">
          <Img
            src="/images/shop/parasite/241005_YET_0063_ik copy.jpg"
            alt="PARASITE — surface texture detail, lit warm"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 75vw"
          />
        </div>
      </section>

      {/* Full-screen team shot */}
      <div className="relative w-full h-screen">
        <Img
          src="/images/shop/parasite/241005_YET_0261_ik copy.jpg"
          alt="PARASITE — sculptural intervention detail"
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      {/* How it works */}
      <section className="px-5 md:px-[100px] py-16 border-b border-[#DCDAD5]">
        <p className="text-[0.58rem] tracking-[0.18em] text-[#2222FF] uppercase mb-10">
          How it works
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              n: "01",
              title: "Share your furniture",
              body: "Send us photos, dimensions, and material details of your existing piece. Any mass-produced furniture can be a candidate.",
            },
            {
              n: "02",
              title: "Custom design",
              body: "We collaborate with you to design a bespoke Parasite addition — tailored precisely to your furniture's form, function, and aesthetic.",
            },
            {
              n: "03",
              title: "Fabrication & delivery",
              body: "We 3D-print and finish your unique sculptural element and deliver it ready to attach — redefining your furniture forever.",
            },
          ].map((step) => (
            <div key={step.n} className="flex flex-col gap-3">
              <p className="text-[0.52rem] tracking-[0.18em] text-[#2222FF] uppercase">
                {step.n}
              </p>
              <p className="text-[0.8rem] font-bold text-[#0A0A0A] tracking-tight">
                {step.title}
              </p>
              <p className="text-[0.7rem] leading-[2] text-[#888]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="px-5 md:px-[100px] pt-4 pb-8">
        <div className="columns-1 md:columns-2 gap-4 space-y-4">
          {GALLERY.map((img) => (
            <div
              key={img.src}
              className="relative w-full overflow-hidden break-inside-avoid"
              style={{ aspectRatio: img.ratio }}
            >
              <Img
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 md:px-[100px] py-16 border-t border-[#DCDAD5] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-end">
        <div className="flex flex-col gap-4">
          <p className="text-[0.72rem] leading-[2] text-[#888]">
            Do you have a piece of furniture that feels too standard or lacks
            character? Parasite offers a unique service to create custom
            3D-printed additions for your existing furniture. By integrating
            sculptural elements, we transform mass-produced or ordinary furniture
            into one-of-a-kind pieces that reflect your style and vision.
          </p>
          <p className="text-[0.72rem] leading-[2] text-[#888]">
            Ready to transform your furniture? Contact us today to begin
            designing your custom Parasite.
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-5">
          <Link
            href="/shop/parasite/inquiry"
            className="bg-[#2222FF] text-white text-[0.6rem] tracking-[0.18em] uppercase px-10 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            CONTACT US
          </Link>
          <Link
            href="/shop"
            className="text-[0.58rem] tracking-[0.12em] text-[#888] uppercase hover:text-[#2222FF] transition-colors"
          >
            ← Back to shop
          </Link>
        </div>
      </section>
    </main>
  );
}
