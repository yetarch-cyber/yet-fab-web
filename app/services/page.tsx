import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "YET:FAB services: 3D printing, bespoke digital fabrication, and expert consultation. From concept to production in Tel Aviv.",
  alternates: { canonical: "https://www.yetfab.com/services" },
};

export default function ServicesPage() {
  return (
    <main className="px-5 md:px-10 pt-[70px]">
      {/* Subtitle */}
      <p className="text-[1.6rem] md:text-[2rem] font-thin text-[#888] mt-4 mb-6 leading-tight">
        Tailored to your needs
      </p>

      {/* Body intro */}
      <p className="text-[0.72rem] leading-[1.9] text-[#444] max-w-3xl mb-14">
        Unlock the possibilities of digital fabrication with YET:FAB&apos;s
        skilled in-house team. We specialize in guiding you through every step
        of the process — from design and 3D modeling to printing, fabrication,
        prototyping, and assembly. With the right tools and expertise, we help
        turn your ideas into reality.
      </p>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-16">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col">
            {/* Text header */}
            <div className="pb-4 md:pr-6">
              <h2 className="text-[0.78rem] font-bold tracking-[0.1em] text-[#2222FF] mb-3">
                {service.title}
              </h2>
              <p className="text-[0.65rem] font-bold tracking-[0.06em] text-[#2222FF] leading-[1.7] uppercase">
                {service.subtitle}
              </p>
            </div>

            {/* Image with button */}
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <Img
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Button */}
              <div className="absolute bottom-5 left-0 right-0 flex justify-center z-10">
                <Link
                  href="/contact"
                  className="bg-[#2222FF] text-white text-[0.58rem] tracking-[0.16em] uppercase px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}
