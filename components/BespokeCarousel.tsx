"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Img from "./Img";

const SLIDES = [
  { src: "/images/bespoke/11.jpg", alt: "YET:FAB bespoke 3D-printed object — experimental fabrication" },
  { src: "/images/bespoke/12.jpg", alt: "YET:FAB digital fabrication — custom architectural component" },
  { src: "/images/bespoke/15.jpg", alt: "YET:FAB bespoke project — 3D-printed sculptural form" },
  { src: "/images/bespoke/20.jpg", alt: "YET:FAB fabrication studio — organic 3D-printed object" },
  { src: "/images/bespoke/23.jpg", alt: "YET:FAB bespoke — parametric design and fabrication" },
  { src: "/images/bespoke/24.jpg", alt: "YET:FAB custom fabrication — experimental 3D-printed piece" },
  { src: "/images/bespoke/32.jpg", alt: "YET:FAB digital fabrication — bespoke object, Tel Aviv" },
  { src: "/images/bespoke/38.jpg", alt: "YET:FAB — custom 3D-printed architectural component" },
  { src: "/images/bespoke/4.jpg", alt: "YET:FAB bespoke fabrication — sculptural object" },
  { src: "/images/bespoke/7.jpg", alt: "YET:FAB experimental fabrication — 3D-printed design" },
  { src: "/images/bespoke/8.jpg", alt: "YET:FAB studio — bespoke 3D-printed object, Israel" },
  { src: "/images/bespoke/ADA_02.jpg", alt: "YET:FAB × ADA collaboration — bespoke 3D-printed piece" },
  { src: "/images/bespoke/ADA_YET_7.jpg", alt: "YET:FAB × ADA — custom fabrication project" },
];

export default function BespokeCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 600);
    return () => clearInterval(t);
  }, []);

  return (
    <>
    <section className="relative w-full overflow-hidden" style={{ aspectRatio: "16/7" }}>
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition: "opacity 80ms ease",
            zIndex: i === current ? 10 : 0,
          }}
        >
          <Img
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A0A0A]/20 z-20" />

      {/* Desktop CTA — overlaid on image */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-30">
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

    {/* Mobile CTA — below image */}
    <div className="md:hidden flex flex-col items-center gap-3 py-8">
      <p className="text-[0.52rem] tracking-[0.22em] text-[#888] uppercase">
        Digital Fabrication
      </p>
      <Link
        href="/services"
        className="bg-[#2222FF] text-white text-[0.6rem] tracking-[0.16em] uppercase px-8 py-2.5 rounded-full hover:opacity-90 transition-opacity"
      >
        SERVICES
      </Link>
    </div>
    </>
  );
}
