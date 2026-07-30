import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = {
  title: "TURBINE Speaker — Designer 3D-Printed Floor Speaker | YET:FAB",
  description:
    "Buy the TURBINE Floor Speaker by YET:FAB — a sculptural 2-way floor-standing speaker system with 3D-printed acoustic enclosures and brushed stainless-steel structure. Made to order in Tel Aviv.",
  alternates: { canonical: "https://www.yet-fab.com/shop/turbine" },
  openGraph: {
    type: "website",
    url: "https://www.yet-fab.com/shop/turbine",
    siteName: "YET:FAB",
    title: "TURBINE Speaker — Designer 3D-Printed Floor Speaker | YET:FAB",
    description:
      "Sculptural 2-way floor-standing speaker system with 3D-printed acoustic enclosures and brushed stainless-steel structure. Made to order in Tel Aviv by YET:FAB.",
    images: [{ url: "/images/shop/ramkol-1/Firefly_Gemini Flash (7).png", alt: "TURBINE Floor Speaker by YET:FAB" }],
  },
};

const GALLERY = [
  { src: "/images/shop/ramkol-1/Firefly.png", alt: "TURBINE speaker — grey finish, front view", ratio: "3/4" },
  { src: "/images/shop/ramkol-1/Firefly_Gemini Flash (1).png", alt: "TURBINE speaker — studio shot", ratio: "3/4" },
  { src: "/images/shop/ramkol-1/Firefly_Gemini Flash (1)2.png", alt: "TURBINE speaker — detail of 3D-printed shell", ratio: "3/4" },
  { src: "/images/shop/ramkol-1/Firefly_Gemini Flash (1)33.png", alt: "TURBINE speaker — side profile", ratio: "3/4" },
  { src: "/images/shop/ramkol-1/Firefly_Gemini Flash (2).png", alt: "TURBINE speaker — atmospheric interior scene", ratio: "3/4" },
  { src: "/images/shop/ramkol-1/Firefly_Gemini Flash11.png", alt: "TURBINE speaker — stainless-steel base detail", ratio: "3/4" },
];

export default function TurbinePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "TURBINE Floor Speaker",
            description:
              "Sculptural 2-way floor-standing speaker system with 3D-printed acoustic enclosures and brushed stainless-steel structure. Made to order in Tel Aviv by YET:FAB.",
            image: "https://www.yet-fab.com/images/shop/ramkol-1/Firefly_Gemini Flash (7).png",
            brand: { "@type": "Brand", name: "YET:FAB" },
            offers: {
              "@type": "Offer",
              price: "13500",
              priceCurrency: "ILS",
              availability: "https://schema.org/InStock",
              url: "https://www.yet-fab.com/shop/turbine",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-5 min-h-screen">
        <div className="flex flex-col gap-5 px-5 md:px-8 pt-[100px] pb-10 md:pt-[110px]">
          <p className="text-[0.6rem] tracking-[0.12em] text-[#888] uppercase">
            <Link href="/shop" className="hover:text-[#2222FF] transition-colors">Shop</Link>
            {" / "}Speaker
          </p>
          <div>
            <p className="text-[0.72rem] tracking-[0.14em] text-[#888] font-thin uppercase mb-1">Floor Speaker</p>
            <h1 className="text-[3.5rem] font-black tracking-tight text-[#0A0A0A] leading-none">TURBINE</h1>
          </div>
          <p className="text-[0.78rem] leading-[1.9] text-[#0A0A0A]">
            A sculptural speaker system combining custom 3D-printed acoustic enclosures with a polished stainless-steel structure.
          </p>
          <p className="text-[0.7rem] leading-[2] text-[#888]">
            Two speaker bodies of different scales are supported by a continuous tubular frame, creating a single freestanding object. The 3D-printed shells form the acoustic volumes while retaining the visible texture of the additive manufacturing process.
          </p>
          <p className="text-[0.7rem] leading-[2] text-[#888]">Designed and fabricated by YET.</p>
        </div>

        <div className="md:col-span-2 relative min-h-[50vh] md:min-h-full">
          <Img
            src="/images/shop/ramkol-1/Firefly_Gemini Flash (7).png"
            alt="TURBINE Floor Speaker by YET:FAB — front view"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>

        <div className="md:col-span-2 relative min-h-[50vh] md:min-h-full">
          <Img
            src="/images/shop/ramkol-1/Firefly_Gemini Flash (2)2.png"
            alt="TURBINE Floor Speaker by YET:FAB — side view"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </section>

      {/* Dims bar */}
      <div className="mx-5 md:mx-[100px] border-t border-b border-[#DCDAD5] py-6 grid grid-cols-2 md:grid-cols-4 gap-y-5">
        {[
          { label: "Height", value: "150 cm" },
          { label: "Width", value: "40 cm" },
          { label: "Depth", value: "50 cm" },
          { label: "Production", value: "Made to order" },
        ].map((s) => (
          <div key={s.label}>
            <p className="text-[0.52rem] tracking-[0.16em] text-[#888] uppercase mb-1.5">{s.label}</p>
            <p className="text-[0.72rem] font-medium text-[#0A0A0A]">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Technical specs */}
      <div className="mx-5 md:mx-[100px] py-10 border-b border-[#DCDAD5] grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4">
          <p className="text-[0.58rem] tracking-[0.18em] text-[#2222FF] uppercase mb-2">System</p>
          {[
            { label: "Type", value: "Floor-standing passive speaker" },
            { label: "Configuration", value: "2-way with passive crossover" },
            { label: "Enclosure volume", value: "10 L" },
            { label: "Enclosures", value: "3D-printed polymer" },
            { label: "Structure", value: "Brushed stainless-steel tube" },
            { label: "Base", value: "Stainless-steel plate" },
          ].map((s) => (
            <div key={s.label} className="flex gap-3">
              <p className="text-[0.6rem] tracking-[0.08em] text-[#888] uppercase w-36 shrink-0">{s.label}</p>
              <p className="text-[0.7rem] text-[#0A0A0A]">{s.value}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[0.58rem] tracking-[0.18em] text-[#2222FF] uppercase mb-2">Drivers</p>
          {[
            { label: "Midbass", value: "Zaph|Audio ZA14W08 — 5″ aluminum-cone woofer" },
            { label: "Tweeter", value: "Vifa DQ25SC16-04 — 1″ titanium-dome" },
            { label: "Frequency", value: "52 Hz – 20 kHz" },
            { label: "Amplification", value: "External amplifier required" },
          ].map((s) => (
            <div key={s.label} className="flex gap-3">
              <p className="text-[0.6rem] tracking-[0.08em] text-[#888] uppercase w-36 shrink-0">{s.label}</p>
              <p className="text-[0.7rem] text-[#0A0A0A]">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Colour options */}
      <section className="px-5 md:px-[100px] pt-14 pb-6 border-b border-[#DCDAD5]">
        <p className="text-[0.58rem] tracking-[0.18em] text-[#2222FF] uppercase mb-8">Colour options</p>
        <div className="grid grid-cols-3 gap-6 max-w-xs">
          {[
            { label: "Gray", swatch: "bg-[#888888]" },
            { label: "Orange", swatch: "bg-[#E05A00]" },
            { label: "Custom", swatch: "bg-gradient-to-b from-[#2222FF] to-[#FF2B78]" },
          ].map((c) => (
            <div key={c.label} className="flex flex-col items-center gap-3">
              <div className={`w-10 h-10 rounded-full ${c.swatch}`} />
              <p className="text-[0.58rem] tracking-[0.1em] uppercase text-[#0A0A0A] text-center">{c.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[0.6rem] tracking-[0.1em] text-[#888]">Height and colour can be customised on request</p>
      </section>

      {/* Technical drawings */}
      <section className="px-5 md:px-[100px] py-14 border-b border-[#DCDAD5]">
        <p className="text-[0.58rem] tracking-[0.18em] text-[#2222FF] uppercase mb-8">Technical drawings</p>
        <div className="grid grid-cols-2 gap-6 max-w-[75%]">
          <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
            <Img
              src="/images/shop/ramkol-1/Frame 494.jpg"
              alt="TURBINE speaker — front elevation technical drawing"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
            <Img
              src="/images/shop/ramkol-1/Frame 496.jpg"
              alt="TURBINE speaker — side elevation technical drawing"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-5 md:px-[100px] pt-4 pb-8">
        <div className="columns-1 md:columns-2 gap-4 space-y-4">
          {GALLERY.map((img) => (
            <div key={img.src} className="relative w-full overflow-hidden break-inside-avoid" style={{ aspectRatio: img.ratio }}>
              <Img src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 md:px-[100px] py-16 border-t border-[#DCDAD5] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-end">
        <div className="flex flex-col gap-4">
          <p className="text-[0.58rem] tracking-[0.18em] text-[#2222FF] uppercase mb-2">Details</p>
          {[
            "3D-printed polymer enclosures",
            "Brushed stainless-steel tubular frame",
            "Stainless-steel base plate",
            "2-way passive crossover",
            "External amplifier required",
          ].map((line) => (
            <p key={line} className="text-[0.7rem] leading-[2] text-[#888]">• {line}</p>
          ))}
        </div>
        <div className="flex flex-col items-start md:items-end gap-5">
          <div className="md:text-right">
            <p className="text-[0.58rem] tracking-[0.14em] text-[#888] uppercase mb-1">Price</p>
            <p className="text-[2rem] font-thin text-[#0A0A0A] leading-none">₪13,500</p>
            <p className="text-[0.72rem] font-thin text-[#888] leading-none mt-1">€3,900</p>
            <p className="text-[0.58rem] tracking-[0.1em] text-[#888] mt-2">Made to order · Lead time on inquiry</p>
          </div>
          <Link
            href="/shop/turbine/order"
            className="bg-[#2222FF] text-white text-[0.6rem] tracking-[0.18em] uppercase px-10 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            INQUIRE TO PURCHASE
          </Link>
          <Link href="/shop" className="text-[0.58rem] tracking-[0.12em] text-[#888] uppercase hover:text-[#2222FF] transition-colors">
            ← Back to shop
          </Link>
        </div>
      </section>
    </main>
  );
}
