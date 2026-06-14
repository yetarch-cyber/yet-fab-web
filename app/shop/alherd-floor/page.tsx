import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";

export const metadata: Metadata = {
  title: "ALHERD Floor Lamp — 3D-Printed Sculptural Lighting",
  description:
    "The ALHERD Floor Lamp by YET:FAB — vertical light sculpture in natural or gradient finish. 130 or 160 cm, integrated LED, made to order in Tel Aviv. ₪6,600.",
  alternates: { canonical: "https://www.yet-fab.com/shop/alherd-floor" },
};

const GALLERY = [
  {
    src: "/images/shop/alherd-floor/250829_YET_Lamp_0081_ik_F.jpg",
    alt: "ALHERD Floor Lamp — natural transparent, lit warm",
  },
  {
    src: "/images/shop/alherd-floor/250829_YET_Lamp_0086_ik_F.jpg",
    alt: "ALHERD Floor Lamp — sunset gradient, lit orange",
  },
  {
    src: "/images/shop/alherd-floor/250829_YET_Lamp_0111_ik_F.jpg",
    alt: "ALHERD Floor Lamp — 130 cm and 160 cm height comparison",
  },
  {
    src: "/images/shop/alherd-floor/250829_YET_Lamp_0184_ik_F.jpg",
    alt: "ALHERD Floor Lamp and Pendant Lamp together",
  },
];

export default function AlherdFloorPage() {
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
            {" / "}Floor lamp
          </p>
          <div>
            <p className="text-[0.72rem] tracking-[0.14em] text-[#888] font-thin uppercase mb-1">
              Floor lamp
            </p>
            <h1 className="text-[3.5rem] font-black tracking-tight text-[#0A0A0A] leading-none">
              ALHERD
            </h1>
          </div>
          <p className="text-[0.78rem] leading-[1.9] text-[#0A0A0A]">
            A vertical light sculpture designed to transform spatial atmosphere.
          </p>
          <p className="text-[0.7rem] leading-[2] text-[#888]">
            The Alherd Floor Lamp stands as the largest member of the
            collection — offered in 130 cm or 160 cm, with a softly glowing
            body that brings warmth and vertical rhythm to any space. Whether
            placed in a corner or standing beside a piece of furniture, it
            anchors its surroundings with a calm, ambient presence.
          </p>
          <p className="text-[0.7rem] leading-[2] text-[#888]">
            Made from recyclable plastic, each lamp is fabricated through a
            custom 3D printing process. The textured, porous surface is
            inspired by coral structures and geological formations, allowing
            light to gently diffuse through its walls.
          </p>
          <p className="text-[0.7rem] leading-[2] text-[#888]">
            Two visual variants are available: fully transparent or a sunset
            gradient finish, offering different expressions of warmth and tone.
            Both versions emit soft light from an internal LED tube, creating a
            quiet but emotional presence in the room.
          </p>
        </div>

        {/* Cols 2-4: image */}
        <div className="md:col-span-3 relative min-h-[50vh] md:min-h-full">
          <Img
            src="/images/shop/alherd-floor/250829_YET_Lamp_0098_ik_F.jpg"
            alt="ALHERD Floor Lamp — scale reference"
            fill
            className="object-contain object-top"
            priority
            sizes="(max-width: 768px) 100vw, 75vw"
          />
        </div>
      </section>

      {/* Specs bar */}
      <div className="mx-5 md:mx-[100px] border-t border-b border-[#DCDAD5] py-6 grid grid-cols-2 md:grid-cols-4 gap-y-5">
        {[
          { label: "Height", value: "130 / 160 cm" },
          { label: "Finish", value: "Natural / Gradient" },
          { label: "Cable", value: "Orange / Grey" },
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
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Img
                src="/images/shop/alherd-floor/250829_YET_Lamp_0059_ik_F.jpg"
                alt="ALHERD Floor Lamp — natural transparent finish"
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
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Img
                src="/images/shop/alherd-floor/250829_YET_Lamp_0094_ik_F.jpg"
                alt="ALHERD Floor Lamp — sunset gradient finish"
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

      {/* Full-screen scale shot */}
      <div className="relative w-full h-screen">
        <Img
          src="/images/shop/alherd-floor/IMG_2313.JPG"
          alt="ALHERD Floor Lamp — scale reference"
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
            style={{ aspectRatio: "3/4" }}
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
            This floor lamp is not just an object — it is a composed fragment
            of light, material, and structure, reflecting YET:FAB&apos;s vision
            of sustainable design shaped by computational processes and
            nature-inspired logic.
          </p>
          <p className="text-[0.72rem] leading-[2] text-[#888]">
            Each lamp is made to order and can be adapted in finish, height,
            and cable colour on request. Available in 130 cm or 160 cm.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-5">
          <div className="text-right">
            <p className="text-[0.58rem] tracking-[0.14em] text-[#888] uppercase mb-1">
              Price
            </p>
            <p className="text-[2.5rem] font-thin text-[#0A0A0A] leading-none">
              ₪6,600
            </p>
            <p className="text-[0.58rem] tracking-[0.1em] text-[#888] mt-1">
              Made to order · Lead time on inquiry
            </p>
          </div>
          <Link
            href="/shop/alherd-floor/order"
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
