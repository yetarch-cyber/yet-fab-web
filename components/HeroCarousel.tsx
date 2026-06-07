"use client";
import { useState, useEffect, useCallback } from "react";
import Img from "./Img";

const SLIDES = [
  {
    src: "/images/hero/slide-1.jpg",
    alt: "ALHERD mirror stand with organic 3D-printed blue base — YET:FAB",
    label: "ALHERD",
    sub: "Mirror stand",
  },
  {
    src: "/images/hero/slide-2.jpg",
    alt: "BAKLAN table lamp — YET:FAB",
    label: "BAKLAN",
    sub: "Table lamp",
  },
  {
    src: "/images/hero/slide-3.jpg",
    alt: "THICK candleholder — YET:FAB",
    label: "THICK",
    sub: "Candleholder",
  },
  {
    src: "/images/hero/slide-4.jpg",
    alt: "PARASITE X IKEA — YET:FAB",
    label: "PARASITE",
    sub: "X IKEA",
  },
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
    <section className="relative w-full overflow-hidden bg-[#EDEDEB]" style={{ height: "calc(100svh - 65px)" }}>
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
            className="object-contain"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Prev arrow */}
      <button
        onClick={() => go(current - 1)}
        aria-label="Previous"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full border border-[#0A0A0A] flex items-center justify-center text-lg hover:bg-[#0A0A0A] hover:text-white transition-colors"
      >
        ‹
      </button>

      {/* Next arrow */}
      <button
        onClick={() => go(current + 1)}
        aria-label="Next"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full border border-[#0A0A0A] flex items-center justify-center text-lg hover:bg-[#0A0A0A] hover:text-white transition-colors"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="w-1.5 h-1.5 rounded-full transition-colors"
            style={{ background: i === current ? "#2222FF" : "#AAAAAA" }}
          />
        ))}
      </div>

      {/* Scroll down */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-center">
        <p className="text-[0.55rem] tracking-[0.2em] text-[#888] uppercase">
          scroll down ↓
        </p>
      </div>
    </section>
  );
}
