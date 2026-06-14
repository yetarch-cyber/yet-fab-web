import type { Metadata } from "next";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import BespokeCarousel from "@/components/BespokeCarousel";
import Marquee from "@/components/Marquee";
import Img from "@/components/Img";

export const metadata: Metadata = {
  title:
    "YET:FAB — Digital Fabrication, 3D Printed Objects & Custom Components",
  alternates: { canonical: "https://www.yet-fab.com" },
};

const SHOP_PREVIEW = [
  {
    src: "/images/shop-preview/240523_candleholder_0095_ik_F.jpg",
    alt: "THICK candleholder — YET:FAB",
    name: "THICK",
    sub: "Candleholder",
    href: "/shop",
  },
  {
    src: "/images/shop/parasite/241005_YET_0201_ik copy.jpg",
    alt: "PARASITE — YET:FAB bespoke object",
    name: "PARASITE",
    sub: "Bespoke object",
    href: "/shop/parasite",
  },
  {
    src: "/images/shop-preview/250829_YET_Lamp_0144_ik_F.jpg",
    alt: "ALHERD pendant lamp — YET:FAB",
    name: "ALHERD",
    sub: "Pendant lamp",
    href: "/shop/alherd-pendant",
  },
  {
    src: "/images/shop/250829_YET_Lamp_0231_ik_F.jpg",
    alt: "ALHERD table lamp — YET:FAB",
    name: "ALHERD",
    sub: "Table lamp",
    href: "/shop/alherd-table",
  },
  {
    src: "/images/shop/alherd-floor/250829_YET_Lamp_0094_ik_F.jpg",
    alt: "ALHERD floor lamp — YET:FAB",
    name: "ALHERD",
    sub: "Floor lamp",
    href: "/shop/alherd-floor",
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
      <section className="grid grid-cols-2 md:grid-cols-5 gap-[10px] pt-[10px] pb-[10px] px-5 md:px-[100px]">
        {SHOP_PREVIEW.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="group flex flex-col"
          >
            {/* Image */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
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
            </div>
            {/* Name */}
            <div className="pt-2 text-center">
              <p className="text-[0.62rem] tracking-[0.08em] text-[#888]">
                {item.sub}{" "}
                <span className="font-bold text-[#0A0A0A]">&ldquo;{item.name}&rdquo;</span>
              </p>
            </div>
          </Link>
        ))}
      </section>

      {/* VIEW AND SHOP button */}
      <div className="flex justify-center pt-[5px] pb-[25px]">
        <Link
          href="/shop"
          className="bg-[#2222FF] text-white text-[0.7rem] tracking-[0.18em] uppercase px-10 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          VIEW AND SHOP
        </Link>
      </div>

      {/* Bespoke services carousel */}
      <BespokeCarousel />
    </>
  );
}
