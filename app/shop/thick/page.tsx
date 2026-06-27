import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = {
  title: "THICK Candleholder — 3D-Printed Sculptural Object",
  description:
    "THICK by YET:FAB — a 3D-printed sculptural candleholder in transparent PETG. Organic amorphic form, metal cup insert, fits standard candles. Made to order in Tel Aviv. ₪190.",
  alternates: { canonical: "https://www.yet-fab.com/shop/thick" },
  openGraph: {
    type: "website",
    url: "https://www.yet-fab.com/shop/thick",
    siteName: "YET:FAB",
    title: "THICK Candleholder — 3D-Printed Sculptural Object",
    description:
      "THICK by YET:FAB — a 3D-printed sculptural candleholder in transparent PETG. Organic amorphic form, metal cup insert, fits standard candles. Made to order in Tel Aviv. ₪190.",
    images: [{ url: "/images/shop/thick/240523_candleholder_0085_ik_F.jpg", alt: "THICK candleholder by YET:FAB" }],
  },
};

const GALLERY = [
  { src: "/images/shop/thick/240523_candleholder_0039_ik_F.jpg", alt: "THICK candleholder — organic form detail", ratio: "3/4" },
  { src: "/images/shop/thick/240523_candleholder_0040_ik_F.jpg", alt: "THICK candleholder — close-up surface texture", ratio: "3/4" },
  { src: "/images/shop/thick/240523_candleholder_0052_ik_F.jpg", alt: "THICK candleholder — top view", ratio: "3/4" },
  { src: "/images/shop/thick/240523_candleholder_0087_ik_F.jpg", alt: "THICK candleholder — lit candle, warm glow", ratio: "3/4" },
  { src: "/images/shop/thick/240523_candleholder_0090_ik_F.jpg", alt: "THICK candleholder — studio shot", ratio: "3/4" },
  { src: "/images/shop/thick/240523_candleholder_0093_ik_F.jpg", alt: "THICK candleholder — form and shadow", ratio: "3/4" },
  { src: "/images/shop/thick/240523_candleholder_0095_ik_F.jpg", alt: "THICK candleholder — atmospheric shot", ratio: "3/4" },
  { src: "/images/shop/thick/240523_candleholder_0126_ik_F.jpg", alt: "THICK candleholder — profile view", ratio: "3/4" },
];

export default function ThickPage() {
  return (
    <main>
      {/* Hero: 1 col text + 3 col image */}
      <section className="grid grid-cols-1 md:grid-cols-4 min-h-screen">
        <div className="flex flex-col gap-5 px-5 md:px-8 pt-[100px] pb-10 md:pt-[110px]">
          <p className="text-[0.6rem] tracking-[0.12em] text-[#888] uppercase">
            <Link href="/shop" className="hover:text-[#2222FF] transition-colors">
              Shop
            </Link>
            {" / "}Candleholder
          </p>
          <div>
            <p className="text-[0.72rem] tracking-[0.14em] text-[#888] font-thin uppercase mb-1">
              Candleholder
            </p>
            <h1 className="text-[3.5rem] font-black tracking-tight text-[#0A0A0A] leading-none">
              THICK
            </h1>
          </div>
          <p className="text-[0.78rem] leading-[1.9] text-[#0A0A0A]">
            A sculptural piece that brings warmth, softness, and character to any room.
          </p>
          <p className="text-[0.7rem] leading-[2] text-[#888]">
            This candleholder reflects contemporary design shaped through advanced digital fabrication. 3D-printed in our studio using transparent PETG, it plays with light and shadow, appearing almost fluid as the flame glows through its surface.
          </p>
          <p className="text-[0.7rem] leading-[2] text-[#888]">
            Its organic, amorphic form draws from architectural exploration, merging sculptural presence with everyday function. Designed for durability and responsible production, the piece is printed from recyclable PETG and includes a metal inner cup suitable for standard candles — including IKEA sizes.
          </p>
          <p className="text-[0.7rem] leading-[2] text-[#888]">
            Each candleholder is produced and finished in-house, ensuring precision, material efficiency, and a long-lasting product. A thoughtful choice for homes that value design, sustainability, and craftsmanship.
          </p>
        </div>

        <div className="md:col-span-3 relative min-h-[50vh] md:min-h-full">
          <Img
            src="/images/shop/thick/240523_candleholder_0085_ik_F.jpg"
            alt="THICK candleholder — hero shot"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 75vw"
          />
        </div>
      </section>

      {/* Specs bar */}
      <div className="mx-5 md:mx-[100px] border-t border-b border-[#DCDAD5] py-6 grid grid-cols-2 md:grid-cols-4 gap-y-5">
        {[
          { label: "Width", value: "14.5 cm" },
          { label: "Height", value: "16.6 cm" },
          { label: "Depth", value: "19.4 cm" },
          { label: "Production", value: "Made to order" },
        ].map((spec) => (
          <div key={spec.label}>
            <p className="text-[0.52rem] tracking-[0.16em] text-[#888] uppercase mb-1.5">
              {spec.label}
            </p>
            <p className="text-[0.72rem] font-medium text-[#0A0A0A]">{spec.value}</p>
          </div>
        ))}
      </div>

      {/* Materials */}
      <div className="mx-5 md:mx-[100px] py-6 border-b border-[#DCDAD5] grid grid-cols-2 md:grid-cols-4 gap-y-5">
        {[
          { label: "Primary material", value: "Transparent PETG" },
          { label: "Inner cup", value: "Metal insert" },
          { label: "Candle fit", value: "Standard (IKEA)" },
          { label: "Finish", value: "Hand-finished" },
        ].map((spec) => (
          <div key={spec.label}>
            <p className="text-[0.52rem] tracking-[0.16em] text-[#888] uppercase mb-1.5">
              {spec.label}
            </p>
            <p className="text-[0.72rem] font-medium text-[#0A0A0A]">{spec.value}</p>
          </div>
        ))}
      </div>

      {/* Colour options */}
      <section className="px-5 md:px-[100px] pt-14 pb-6">
        <p className="text-[0.58rem] tracking-[0.18em] text-[#2222FF] uppercase mb-8">
          Colour options
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              src: "/images/shop/thick/240523_candleholder_0036_ik_F.jpg",
              alt: "THICK candleholder — clear transparent",
              label: "Clear",
              note: "Transparent PETG",
            },
            {
              src: "/images/shop/thick/240523_candleholder_0039_ik_F.jpg",
              alt: "THICK candleholder — neon green",
              label: "Neon Green",
              note: "Vivid electric green",
            },
            {
              src: "/images/shop/thick/240523_candleholder_0040_ik_F.jpg",
              alt: "THICK candleholder — neon pink",
              label: "Neon Pink",
              note: "Bold hot pink",
            },
          ].map((col) => (
            <div key={col.label}>
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Img
                  src={col.src}
                  alt={col.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="mt-3 text-[0.6rem] tracking-[0.1em] uppercase">
                <span className="font-bold text-[#0A0A0A]">{col.label}</span>
                <span className="text-[#888]"> — {col.note}</span>
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[0.6rem] tracking-[0.1em] text-[#2222FF]">
          Custom colour available on request
        </p>
      </section>

      {/* Full-screen */}
      <div className="relative w-full h-screen">
        <Img
          src="/images/shop/thick/240523_candleholder_0157_ik_F.jpg"
          alt="THICK candleholder — atmospheric scene"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

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

      {/* Details + CTA */}
      <section className="px-5 md:px-[100px] py-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-end border-t border-[#DCDAD5]">
        <div className="flex flex-col gap-4">
          <p className="text-[0.58rem] tracking-[0.18em] text-[#2222FF] uppercase mb-2">Details</p>
          {[
            "Material: Transparent PETG, recyclable",
            "Metal cup insert included",
            "Fits standard candle sizes (e.g. IKEA)",
            "3D-printed and hand-finished in-house",
          ].map((line) => (
            <p key={line} className="text-[0.7rem] leading-[2] text-[#888]">
              • {line}
            </p>
          ))}
        </div>

        <div className="flex flex-col items-start md:items-end gap-5">
          <div className="text-right">
            <p className="text-[0.58rem] tracking-[0.14em] text-[#888] uppercase mb-1">Price</p>
            <p className="text-[2.5rem] font-thin text-[#0A0A0A] leading-none">₪190</p>
            <p className="text-[0.58rem] tracking-[0.1em] text-[#888] mt-1">
              Made to order · Lead time on inquiry
            </p>
          </div>
          <Link
            href="/shop/thick/order"
            className="bg-[#2222FF] text-white text-[0.6rem] tracking-[0.18em] uppercase px-10 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            INQUIRE TO PURCHASE
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
