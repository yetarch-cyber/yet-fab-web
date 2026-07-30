import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = {
  title: "BACKLAN Table Lamp — 3D-Printed Lamp with Warm Core Glow | YET:FAB",
  description:
    "Buy the BACKLAN Table Lamp by YET:FAB — a 3D-printed double-layer lamp with translucent PLA shell and warm orange inner core. Made to order in Tel Aviv. From ₪260 / €75.",
  alternates: { canonical: "https://www.yet-fab.com/shop/backlan" },
  openGraph: {
    type: "website",
    url: "https://www.yet-fab.com/shop/backlan",
    siteName: "YET:FAB",
    title: "BACKLAN Table Lamp — 3D-Printed Lamp with Warm Core Glow | YET:FAB",
    description:
      "3D-printed double-layer table lamp with translucent PLA shell and warm orange inner core glow. Made to order in Tel Aviv by YET:FAB.",
    images: [{ url: "/images/shop/backlan/ChatGPT Image Jul 26, 2026, 12_54_58 PM.png", alt: "BACKLAN Table Lamp by YET:FAB" }],
  },
};

const GALLERY = [
  { src: "/images/shop/backlan/Firefly_Gemini Flash_here are 5 images of 3d printed lamp. outer translucent layer with thick plastic laye 477.png", alt: "BACKLAN lamp — translucent shell glowing warm", ratio: "3/4" },
  { src: "/images/shop/backlan/Firefly_Gemini Flash_here are 5 images of 3d printed lamp. outer translucent layer with thick plastic laye 507119.png", alt: "BACKLAN lamp — orange inner core visible", ratio: "3/4" },
  { src: "/images/shop/backlan/Firefly_Gemini Flash_here are images of 3d printed lamp. outer translucent layer with thick plastic layers 520919.png", alt: "BACKLAN lamp — warm ambient light", ratio: "3/4" },
  { src: "/images/shop/backlan/Firefly_Gemini Flash_here is image of 3d printed lamp. outer translucent layer with thick plastic layers a 178268.png", alt: "BACKLAN lamp — lit detail", ratio: "3/4" },
];

export default function BacklanPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "BACKLAN Table Lamp",
            description:
              "3D-printed double-layer table lamp with translucent PLA shell and warm orange inner core glow. Made to order in Tel Aviv by YET:FAB.",
            image: "https://www.yet-fab.com/images/shop/backlan/ChatGPT Image Jul 26, 2026, 12_54_58 PM.png",
            brand: { "@type": "Brand", name: "YET:FAB" },
            offers: {
              "@type": "Offer",
              price: "260",
              priceCurrency: "ILS",
              availability: "https://schema.org/InStock",
              url: "https://www.yet-fab.com/shop/backlan",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-[1.1fr_2fr] min-h-screen">
        <div className="flex flex-col gap-5 px-5 md:px-8 pt-[100px] pb-10 md:pt-[110px] md:z-10">
          <p className="text-[0.6rem] tracking-[0.12em] text-[#888] uppercase">
            <Link href="/shop" className="hover:text-[#2222FF] transition-colors">Shop</Link>
            {" / "}Lamp
          </p>
          <div>
            <p className="text-[0.72rem] tracking-[0.14em] text-[#888] font-thin uppercase mb-1">Table Lamp</p>
            <h1 className="text-[3.5rem] font-black tracking-tight text-[#0A0A0A] leading-none">BACKLAN</h1>
          </div>
          <p className="text-[0.78rem] leading-[1.9] text-[#0A0A0A]">
            A 3D-printed lamp built from two layers that work together to create its atmosphere: a thick translucent PLA shell on the outside, and a distorted inner orange core on the inside.
          </p>
          <p className="text-[0.7rem] leading-[2] text-[#888]">
            When the light is on, the uneven geometry between these layers bends and refracts the light softly, producing a warm, shifting glow that feels almost fluid. The outer wall is printed with intentionally thick lines, giving the lamp a subtle texture even when off.
          </p>
          <p className="text-[0.7rem] leading-[2] text-[#888]">Designed and fabricated by YET.</p>
        </div>

        <div className="relative min-h-[60vh] md:min-h-0 overflow-hidden">
          <Img
            src="/images/shop/backlan/Firefly_Gemini Flash_here is images of 3d printed lamp. outer translucent layer with thick plastic layers  881560.png"
            alt="BACKLAN Table Lamp by YET:FAB — translucent shell with warm core"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>
      </section>

      {/* Dims bar */}
      <div className="mx-5 md:mx-[100px] border-t border-b border-[#DCDAD5] py-6 grid grid-cols-2 md:grid-cols-4 gap-y-5">
        {[
          { label: "Height", value: "~28 cm" },
          { label: "Width", value: "~18 cm" },
          { label: "Weight", value: "~250 g" },
          { label: "Production", value: "Made to order" },
        ].map((s) => (
          <div key={s.label}>
            <p className="text-[0.52rem] tracking-[0.16em] text-[#888] uppercase mb-1.5">{s.label}</p>
            <p className="text-[0.72rem] font-medium text-[#0A0A0A]">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Technical specs + image */}
      <div className="mx-5 md:mx-[100px] py-10 border-b border-[#DCDAD5] grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: specs */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-[0.58rem] tracking-[0.18em] text-[#2222FF] uppercase mb-2">Materials</p>
            {[
              { label: "Construction", value: "Double-layer 3D-printed PLA" },
              { label: "Outer shell", value: "Translucent PLA — thick printed lines" },
              { label: "Inner core", value: "Orange PLA — distorted form" },
              { label: "Light effect", value: "Warm refraction through layered material" },
            ].map((s) => (
              <div key={s.label} className="flex gap-3">
                <p className="text-[0.6rem] tracking-[0.08em] text-[#888] uppercase w-36 shrink-0">{s.label}</p>
                <p className="text-[0.7rem] text-[#0A0A0A]">{s.value}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[0.58rem] tracking-[0.18em] text-[#2222FF] uppercase mb-2">Electrical</p>
            {[
              { label: "Light source", value: "E14 socket" },
              { label: "Cable", value: "EU plug with inline switch" },
              { label: "Bulb", value: "Included" },
              { label: "Customisable", value: "Cable colour / light filter" },
            ].map((s) => (
              <div key={s.label} className="flex gap-3">
                <p className="text-[0.6rem] tracking-[0.08em] text-[#888] uppercase w-36 shrink-0">{s.label}</p>
                <p className="text-[0.7rem] text-[#0A0A0A]">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right: lamp image */}
        <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
          <Img
            src="/images/shop/backlan/ChatGPT Image Jul 26, 2026, 12_54_58 PM.png"
            alt="BACKLAN Table Lamp — warm orange glow"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

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
            "Double-layer 3D-printed PLA construction",
            "Translucent outer shell — thick printed texture",
            "Orange inner core — warm shifting glow",
            "E14 socket, bulb included",
            "EU cable with inline switch",
            "Customisable cable and light filter",
          ].map((line) => (
            <p key={line} className="text-[0.7rem] leading-[2] text-[#888]">• {line}</p>
          ))}
        </div>
        <div className="flex flex-col items-start md:items-end gap-5">
          <div className="md:text-right">
            <p className="text-[0.58rem] tracking-[0.14em] text-[#888] uppercase mb-1">Price</p>
            <p className="text-[2rem] font-thin text-[#0A0A0A] leading-none">₪260</p>
            <p className="text-[0.72rem] font-thin text-[#888] leading-none mt-1">€75</p>
            <p className="text-[0.58rem] tracking-[0.1em] text-[#888] mt-2">Made to order · Lead time on inquiry</p>
          </div>
          <Link
            href="/shop/backlan/order"
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
