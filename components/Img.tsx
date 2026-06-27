"use client";
import Image from "next/image";
import { useState } from "react";

interface ImgProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

export default function Img({
  src,
  alt,
  fill,
  className,
  priority,
  sizes,
  quality,
}: ImgProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`bg-[#D5D2CD] flex flex-col items-center justify-center gap-3 ${
          fill ? "absolute inset-0" : "w-full h-full"
        }`}
      >
        <div className="w-10 h-px bg-[#2222FF]" />
        <span className="text-[0.5rem] tracking-[0.2em] text-[#999] uppercase text-center px-6">
          {alt}
        </span>
        <div className="w-10 h-px bg-[#2222FF]" />
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes}
        quality={quality ?? 90}
        unoptimized
        onError={() => setError(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes={sizes ?? "100vw"}
      className={`w-full h-auto ${className ?? ""}`}
      priority={priority}
      quality={quality ?? 90}
      unoptimized
      onError={() => setError(true)}
    />
  );
}
