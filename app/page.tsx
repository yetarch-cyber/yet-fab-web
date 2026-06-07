import type { Metadata } from "next";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import Marquee from "@/components/Marquee";
import Img from "@/components/Img";

export const metadata: Metadata = {
  title:
    "YET:FAB — Digital Fabrication, 3D Printed Objects & Custom Components",
  alternates: { canonical: "https://www.yetfab.com" },
};

const SHOP_PREVIEW = [
  {
    src: "/images/shop-preview/240523_candleholder_0095_ik_F.jpg",
    alt: "THICK candleholder — YET:FAB",
  },
  {
    src: "/images/shop-preview/241005_YET_0129_ik copy.jpg",
    alt: "YET:FAB 3D-printed object",
  },
  {
    src: "/images/shop-preview/250829_YET_Lamp_0144_ik_F.jpg",
    alt: "YET:FAB lamp — ALHERD lighting",
  },
  {
    src: "/images/shop-preview/250829_YET_Lamp_0184_ik_F.jpg",
    alt: "YET:FAB lamp — 3D printed design",
  },
  {
    src: "/images/shop-preview/Firefly_Gemini Flash (2).png",
    alt: "YET:FAB experimental object",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroCarousel />

      {/* Marquee */}
      <Marquee />

      {/* 5-product row */}
      <section className="grid grid-cols-2 md:grid-cols-5">
        {SHOP_PREVIEW.map((item, idx) => (
          <Link
            key={idx}
            href="/shop"
            className="relative group overflow-hidden block"
            style={{ aspectRatio: "3/4" }}
          >
            <Img
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 20vw"
            />
            {/* VIEW AND SHOP overlay on hover */}
            <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/30 transition-all duration-300 flex items-end justify-center pb-6">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#2222FF] text-white text-[0.55rem] tracking-[0.16em] uppercase px-5 py-2 rounded-full">
                VIEW AND SHOP
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* Services CTA — full-width image */}
      <section className="relative w-full" style={{ aspectRatio: "16/7" }}>
        <Img
          src="/images/services/fabrication.jpg"
          alt="YET:FAB digital fabrication — bespoke components in production"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/10" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <p className="text-[0.52rem] tracking-[0.22em] text-white/80 uppercase">
            Digital Fabrication
          </p>
          <Link
            href="/services"
            className="bg-[#2222FF] text-white text-[0.6rem] tracking-[0.16em] uppercase px-8 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            SERVICES
          </Link>
        </div>
      </section>
    </>
  );
}
