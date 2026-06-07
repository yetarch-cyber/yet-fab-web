import type { Metadata } from "next";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import Marquee from "@/components/Marquee";
import Img from "@/components/Img";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title:
    "YET:FAB — Digital Fabrication, 3D Printed Objects & Custom Components",
  alternates: { canonical: "https://www.yetfab.com" },
};

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <HeroCarousel />

      {/* Marquee */}
      <Marquee />

      {/* Featured Products Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-t border-[#2222FF]">
        {featured.map((product, idx) => (
          <div
            key={product.id}
            className={`relative border-b border-[#2222FF] ${
              idx > 0 ? "md:border-l" : ""
            }`}
            style={{ aspectRatio: "4/3" }}
          >
            {/* Faded bg image */}
            <div
              className="absolute inset-0"
              style={{ opacity: idx === 1 ? 0.35 : 1 }}
            >
              <Img
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Center column CTA overlay */}
            {idx === 1 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-1">
                <p className="text-[0.52rem] tracking-[0.22em] text-[#555] uppercase">
                  YET:FAB
                </p>
                <p className="text-[0.52rem] tracking-[0.22em] text-[#555] uppercase">
                  Furniture store
                </p>
                <Link
                  href="/shop"
                  className="mt-3 bg-[#2222FF] text-white text-[0.58rem] tracking-[0.16em] uppercase px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
                >
                  VIEW AND SHOP
                </Link>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Digital Fabrication intro */}
      <section className="grid grid-cols-1 md:grid-cols-5 gap-8 px-5 md:px-16 py-16 items-start">
        <div className="md:col-span-1 flex items-start justify-center md:justify-start">
          <div className="relative w-28 h-28">
            <Img
              src="/images/products/baklan-table.jpg"
              alt="YET:FAB product detail"
              fill
              className="object-contain"
              sizes="112px"
            />
          </div>
        </div>

        <div className="md:col-span-4">
          <p className="text-[0.58rem] tracking-[0.22em] text-[#888] uppercase mb-5">
            Digital Fabrication x Circular Economy
          </p>
          <p className="text-[0.72rem] leading-[2] text-[#333] max-w-2xl">
            We specialize in transforming ideas into reality, whether it&apos;s
            prototypes, furniture, jewelry, or facades. Our goal is to empower
            both individuals and businesses by offering the tools and expertise
            needed to bring projects to life — from concept to completion.
            Whether you seek assistance with design or need the right resources
            for fabrication, we are here to support you.
          </p>
        </div>
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
