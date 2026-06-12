import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = {
  title: "ALHERD Pendant Lamp — 3D-Printed Sculptural Lighting",
  description:
    "The ALHERD Pendant Lamp by YET:FAB — suspended sculptural pendant in natural or gradient finish. 130 cm, integrated LED, made to order. ₪6,700.",
  alternates: { canonical: "https://www.yet-fab.com/shop/alherd-pendant" },
};

const GALLERY = [
  {
    src: "/images/shop/alherd-pendant/250829_YET_Lamp_0139_ik_F.jpg",
    alt: "ALHERD Pendant Lamp lit — warm ambient glow",
  },
  {
    src: "/images/shop/alherd-pendant/250829_YET_Lamp_0178_ik_F.jpg",
    alt: "ALHERD Pendant Lamp — texture and surface detail",
  },
  {
    src: "/images/shop/alherd-pendant/250829_YET_Lamp_0129_ik_F.jpg",
    alt: "ALHERD Pendant Lamp — studio detail",
  },
  {
    src: "/images/shop/alherd-pendant/250829_YET_Lamp_0170_ik_F.jpg",
    alt: "ALHERD Pendant Lamp — studio view",
  },
];

export default function AlherdPendantPage() {
  return (
    <main>
      {/* Hero — full bleed, nav overlays */}
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
        <Img
          src="/images/shop/alherd-pendant/250829_YET_Lamp_0162_ik_F.jpg"
          alt="ALHERD Pendant Lamp with scale reference — YET:FAB"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Breadcrumb */}
      <div className="px-5 md:px-[100px] pt-8">
        <p className="text-[0.6rem] tracking-[0.14em] text-[#888] uppercase">
          <Link href="/shop" className="hover:text-[#2222FF] transition-colors">
            Shop
          </Link>
          {" / "}
          <span>Pendant lamp</span>
        </p>
      </div>

      {/* Title + description + image */}
      <section className="px-5 md:px-[100px] pt-8 pb-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
        {/* Left: text */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-[0.72rem] tracking-[0.14em] text-[#888] font-thin uppercase mb-2">
              Pendant lamp
            </p>
            <h1 className="text-[4rem] md:text-[5rem] font-black tracking-tight text-[#0A0A0A] leading-none mb-4">
              ALHERD
            </h1>
            <p className="text-[0.8rem] leading-[1.9] text-[#0A0A0A]">
              A suspended element that brings sculptural softness into overhead
              lighting.
            </p>
          </div>

          <p className="text-[0.72rem] leading-[2] text-[#888]">
            The Alherd Pendant Lamp floats in space, casting a gentle, diffused
            glow over work surfaces, dining areas, or shared environments.
            Suspended from two minimal cables, its elongated organic form
            introduces a tactile counterpoint to the typical linear pendant —
            appearing lightweight while carrying a strong visual identity.
          </p>

          <p className="text-[0.72rem] leading-[2] text-[#888]">
            As with the rest of the collection, its geometry is derived from
            natural processes — mimicking erosion, coral structures, and growth
            patterns. The surface is textured and porous, designed to scatter
            light while remaining calm and uniform in daylight conditions.
          </p>

          <p className="text-[0.72rem] leading-[2] text-[#888]">
            Available in transparent or sunset gradient finishes, the pendant
            adapts to different spatial moods — either as a neutral sculptural
            light or a warm, expressive gesture. Internally, it uses an
            integrated LED tube that emits a soft and efficient ambient light.
          </p>
        </div>

        {/* Right: product shot */}
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          <Img
            src="/images/shop/alherd-pendant/250829_YET_Lamp_0153_ik_F.jpg"
            alt="ALHERD Pendant Lamp — gradient finish"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Specs bar */}
      <div className="mx-5 md:mx-[100px] border-t border-b border-[#DCDAD5] py-6 grid grid-cols-2 md:grid-cols-4 gap-y-5">
        {[
          { label: "Length", value: "130 cm" },
          { label: "Finish", value: "Natural / Gradient" },
          { label: "Light source", value: "Integrated LED" },
          { label: "Production", value: "Made to order" },
        ].map((spec) => (
          <div key={spec.label}>
            <p className="text-[0.52rem] tracking-[0.16em] text-[#888] uppercase mb-1.5">
              {spec.label}
            </p>
            <p className="text-[0.72rem] font-medium text-[#0A0A0A]">
              {spec.value}
            </p>
          </div>
        ))}
      </div>

      {/* Available finishes */}
      <section className="px-5 md:px-[100px] pt-14 pb-6">
        <p className="text-[0.58rem] tracking-[0.18em] text-[#2222FF] uppercase mb-8">
          Available finishes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <Img
                src="/images/shop/alherd-pendant/250829_YET_Lamp_0126_ik_F.jpg"
                alt="ALHERD Pendant Lamp — natural transparent finish"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="mt-3 text-[0.6rem] tracking-[0.1em] uppercase">
              <span className="text-[#888]">Natural </span>
              <span className="font-bold text-[#0A0A0A]">Transparent</span>
            </p>
          </div>
          <div>
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <Img
                src="/images/shop/alherd-pendant/250829_YET_Lamp_0153_ik_F.jpg"
                alt="ALHERD Pendant Lamp — sunset gradient finish"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="mt-3 text-[0.6rem] tracking-[0.1em] uppercase">
              <span className="text-[#888]">Sunset </span>
              <span className="font-bold text-[#0A0A0A]">Gradient</span>
              <span className="text-[#2222FF]"> — colour customisable on request</span>
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-5 md:px-[100px] pt-4 pb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {GALLERY.map((img) => (
          <div
            key={img.src}
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "16/9" }}
          >
            <Img
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </section>

      {/* Diagram — full bleed */}
      <div className="relative w-full bg-[#F0EEEB]" style={{ aspectRatio: "16/7" }}>
        <Img
          src="/images/shop/alherd-pendant/diagram.jpg"
          alt="ALHERD Pendant Lamp — natural and gradient variants diagram"
          fill
          className="object-contain py-8"
          sizes="100vw"
        />
      </div>

      {/* Second body text + CTA */}
      <section className="px-5 md:px-[100px] py-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-end border-t border-[#DCDAD5]">
        <div className="flex flex-col gap-4">
          <p className="text-[0.72rem] leading-[2] text-[#888]">
            The Alherd Pendant Lamp offers an architectural lighting solution
            that merges material sensitivity, sustainable fabrication, and
            customisable atmosphere — aligned with YET:FAB&apos;s approach to
            computational design and responsible production.
          </p>
          <p className="text-[0.72rem] leading-[2] text-[#888]">
            The Alherd series continues YET:FAB&apos;s research into
            computationally generated forms that speak to natural systems while
            supporting new modes of living. Every lamp is made to order and can
            be adapted in colour on request.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-5">
          <div className="text-right">
            <p className="text-[0.58rem] tracking-[0.14em] text-[#888] uppercase mb-1">
              Price
            </p>
            <p className="text-[2.5rem] font-thin text-[#0A0A0A] leading-none">
              ₪6,700
            </p>
            <p className="text-[0.58rem] tracking-[0.1em] text-[#888] mt-1">
              Made to order · Lead time on inquiry
            </p>
          </div>
          <Link
            href="/contact/inquiry"
            className="bg-[#2222FF] text-white text-[0.6rem] tracking-[0.18em] uppercase px-10 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            ORDER / INQUIRE
          </Link>
          <Link
            href="/shop"
            className="text-[0.58rem] tracking-[0.12em] text-[#888] uppercase hover:text-[#2222FF] transition-colors"
          >
            ← Back to shop
          </Link>
        </div>
      </section>
    </main>
  );
}
