import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = {
  title: "ALHERD Table Lamp — 3D-Printed Sculptural Lighting",
  description:
    "The ALHERD Table Lamp by YET:FAB — compact sculptural table lamp with organic perforated form. Choice of cable colour and filter. Made to order in Tel Aviv.",
  alternates: { canonical: "https://www.yet-fab.com/shop/alherd-table" },
  openGraph: {
    type: "website",
    url: "https://www.yet-fab.com/shop/alherd-table",
    siteName: "YET:FAB",
    title: "ALHERD Table Lamp — 3D-Printed Sculptural Lighting",
    description:
      "The ALHERD Table Lamp by YET:FAB — compact sculptural table lamp with organic perforated form. Choice of cable colour and filter. Made to order in Tel Aviv.",
    images: [{ url: "/images/shop/250829_YET_Lamp_0231_ik_F.jpg", alt: "ALHERD Table Lamp by YET:FAB" }],
  },
};

const GALLERY = [
  {
    src: "/images/shop/alherd-table/250829_YET_Lamp_0207_ik_F.jpg",
    alt: "ALHERD Table Lamp — detail view",
  },
  {
    src: "/images/shop/alherd-table/250829_YET_Lamp_0215_ik_F.jpg",
    alt: "ALHERD Table Lamp — red filter, lit",
  },
  {
    src: "/images/shop/alherd-table/250829_YET_Lamp_0226_ik_F.jpg",
    alt: "ALHERD Table Lamp — green cable, yellow filter, lit",
  },
  {
    src: "/images/shop/alherd-table/250829_YET_Lamp_0231_ik_F.jpg",
    alt: "ALHERD Table Lamp — warm light, grey cable",
  },
];

export default function AlherdTablePage() {
  return (
    <main>
      {/* First section: 1 col text + 3 col image */}
      <section className="grid grid-cols-1 md:grid-cols-4 min-h-screen">
        {/* Col 1: name + description */}
        <div className="flex flex-col gap-5 px-5 md:px-8 pt-[100px] pb-10 md:pt-[110px]">
          <p className="text-[0.6rem] tracking-[0.12em] text-[#888] uppercase">
            <Link href="/shop" className="hover:text-[#2222FF] transition-colors">
              Shop
            </Link>
            {" / "}Table lamp
          </p>
          <div>
            <p className="text-[0.72rem] tracking-[0.14em] text-[#888] font-thin uppercase mb-1">
              Table lamp
            </p>
            <h1 className="text-[3.5rem] font-black tracking-tight text-[#0A0A0A] leading-none">
              ALHERD
            </h1>
          </div>
          <p className="text-[0.78rem] leading-[1.9] text-[#0A0A0A]">
            A compact atmospheric object designed to suit minimal interiors.
          </p>
          <p className="text-[0.7rem] leading-[2] text-[#888]">
            The Alherd Table Lamp is a self-contained light source conceived as
            a sculptural presence. Placed on a desk, shelf, or side table, it
            creates a warm, intimate atmosphere — casting soft ambient light
            through its perforated organic shell.
          </p>
          <p className="text-[0.7rem] leading-[2] text-[#888]">
            Its form is derived from the same generative language as the rest of
            the Alherd series — referencing mineral structures, coral growth, and
            geological erosion. The translucent 3D-printed body filters light in
            a way that shifts with viewing angle and distance, giving each lamp a
            distinct mood.
          </p>
          <p className="text-[0.7rem] leading-[2] text-[#888]">
            Each lamp is fitted with a braided fabric cable and an aluminium
            base. The cable colour and internal filter colour can be chosen at
            the time of order — allowing each piece to match or contrast the
            intended environment.
          </p>
        </div>

        {/* Cols 2-4: image */}
        <div className="md:col-span-3 relative min-h-[50vh] md:min-h-full">
          <Img
            src="/images/shop/alherd-table/250829_YET_Lamp_0206_ik_F.jpg"
            alt="ALHERD Table Lamp — green cable"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 75vw"
          />
        </div>
      </section>

      {/* Specs bar */}
      <div className="mx-5 md:mx-[100px] border-t border-b border-[#DCDAD5] py-6 grid grid-cols-2 md:grid-cols-4 gap-y-5">
        {[
          { label: "Height", value: "~28 cm" },
          { label: "Cable", value: "Grey / Green" },
          { label: "Filter", value: "Customisable" },
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

      {/* Cable colour options */}
      <section className="px-5 md:px-[100px] pt-14 pb-6">
        <p className="text-[0.58rem] tracking-[0.18em] text-[#2222FF] uppercase mb-8">
          Cable colour
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <Img
                src="/images/shop/alherd-table/250829_YET_Lamp_0203_ik_F.jpg"
                alt="ALHERD Table Lamp — grey cable"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="mt-3 text-[0.6rem] tracking-[0.1em] uppercase">
              <span className="font-bold text-[#0A0A0A]">Grey</span>
              <span className="text-[#888]"> cable</span>
            </p>
          </div>
          <div>
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <Img
                src="/images/shop/alherd-table/250829_YET_Lamp_0206_ik_F.jpg"
                alt="ALHERD Table Lamp — green cable"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="mt-3 text-[0.6rem] tracking-[0.1em] uppercase">
              <span className="font-bold text-[#0A0A0A]">Green</span>
              <span className="text-[#888]"> cable</span>
              <span className="text-[#2222FF]"> — filter colour customisable on request</span>
            </p>
          </div>
        </div>
      </section>

      {/* Full-screen scale shot */}
      <div className="relative w-full h-screen">
        <Img
          src="/images/shop/alherd-table/250829_YET_Lamp_0244_ik_F.jpg"
          alt="ALHERD Table Lamp — scale reference"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

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

      {/* Body text + CTA */}
      <section className="px-5 md:px-[100px] py-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-end border-t border-[#DCDAD5]">
        <div className="flex flex-col gap-4">
          <p className="text-[0.72rem] leading-[2] text-[#888]">
            The Alherd Table Lamp is produced in limited quantities, made to
            order in Tel Aviv. Each piece is assembled by hand and can be
            configured with your choice of cable colour and internal filter.
          </p>
          <p className="text-[0.72rem] leading-[2] text-[#888]">
            As part of the Alherd series, it continues YET:FAB&apos;s research
            into computationally generated forms that speak to natural systems.
            The lamp functions as both a light source and a sculptural object —
            equally present when lit and when not.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-5">
          <div className="text-right">
            <p className="text-[0.58rem] tracking-[0.14em] text-[#888] uppercase mb-1">
              Price
            </p>
            <p className="text-[2.5rem] font-thin text-[#0A0A0A] leading-none">
              ₪480
            </p>
            <p className="text-[0.58rem] tracking-[0.1em] text-[#888] mt-1">
              Made to order · Lead time on inquiry
            </p>
          </div>
          <Link
            href="/shop/alherd-table/order"
            className="bg-[#2222FF] text-white text-[0.6rem] tracking-[0.18em] uppercase px-10 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            INQUIRE TO PURCHASE
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
