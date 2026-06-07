"use client";
import { useState, useEffect, useCallback } from "react";
import Img from "./Img";

const SLIDES = [
  { src: "/images/hero/241005_YET_0058_ik copy.jpg", alt: "YET:FAB product — digital fabrication studio Tel Aviv" },
  { src: "/images/hero/241005_YET_0114_ik copy.jpg", alt: "YET:FAB 3D-printed object — Tel Aviv design studio" },
  { src: "/images/hero/241005_YET_0176_ik copy.jpg", alt: "YET:FAB experimental fabrication — bespoke objects" },
  { src: "/images/hero/250829_YET_Lamp_0162_ik_F.jpg", alt: "YET:FAB lamp — ALHERD lighting collection" },
  { src: "/images/hero/250829_YET_Lamp_0170_ik_F.jpg", alt: "YET:FAB lamp — 3D printed lighting design" },
  { src: "/images/hero/250829_YET_Lamp_0244_ik_F.jpg", alt: "YET:FAB lamp — sustainable digital fabrication" },
  { src: "/images/hero/4.jpg", alt: "YET:FAB — experimental objects and architectural components" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [locked, setLocked] = useState(false);
  const total = SLIDES.length;

  const go = useCallback(
    (idx: number) => {
      if (locked) return;
      setLocked(true);
      setCurrent(((idx % total) + total) % total);
      setTimeout(() => setLocked(false), 700);
    },
    [locked, total]
  );

  useEffect(() => {
    const t = setInterval(() => go(current + 1), 5000);
    return () => clearInterval(t);
  }, [current, go]);

  return (
    <section className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 10 : 0 }}
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

      {/* Prev arrow */}
      <button
        onClick={() => go(current - 1)}
        aria-label="Previous"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full border border-white/60 flex items-center justify-center text-lg text-white hover:bg-white/20 transition-colors"
      >
        ‹
      </button>

      {/* Next arrow */}
      <button
        onClick={() => go(current + 1)}
        aria-label="Next"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full border border-white/60 flex items-center justify-center text-lg text-white hover:bg-white/20 transition-colors"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="w-1.5 h-1.5 rounded-full transition-colors"
            style={{ background: i === current ? "#fff" : "rgba(255,255,255,0.4)" }}
          />
        ))}
      </div>

      {/* Scroll down */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 text-center">
        <p className="text-[0.55rem] tracking-[0.2em] text-white/70 uppercase">
          scroll down ↓
        </p>
      </div>
    </section>
  );
}
