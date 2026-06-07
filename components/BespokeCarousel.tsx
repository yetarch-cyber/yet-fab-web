"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Img from "./Img";

const SLIDES = [
  "/images/bespoke/11.jpg",
  "/images/bespoke/12.jpg",
  "/images/bespoke/15.jpg",
  "/images/bespoke/20.jpg",
  "/images/bespoke/23.jpg",
  "/images/bespoke/24.jpg",
  "/images/bespoke/32.jpg",
  "/images/bespoke/38.jpg",
  "/images/bespoke/4.jpg",
  "/images/bespoke/7.jpg",
  "/images/bespoke/8.jpg",
  "/images/bespoke/ADA_02.jpg",
  "/images/bespoke/ADA_YET_7.jpg",
];

export default function BespokeCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 1200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ aspectRatio: "16/7" }}>
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition: "opacity 150ms ease",
            zIndex: i === current ? 10 : 0,
          }}
        >
          <Img
            src={src}
            alt="YET:FAB bespoke fabrication"
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A0A0A]/20 z-20" />

      {/* CTA */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30">
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
  );
}
