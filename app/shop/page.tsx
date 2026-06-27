import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop — Designer 3D-Printed Lamps & Objects | YET:FAB",
  description:
    "Shop designer 3D-printed lamps and objects by YET:FAB — ALHERD pendant, table and floor lamps, THICK candleholders, PARASITE sculptural objects. Made to order in Tel Aviv.",
  alternates: { canonical: "https://www.yet-fab.com/shop" },
  openGraph: {
    type: "website",
    url: "https://www.yet-fab.com/shop",
    siteName: "YET:FAB",
    title: "Shop — Designer 3D-Printed Lamps & Objects | YET:FAB",
    description:
      "Shop designer 3D-printed lamps and objects by YET:FAB — ALHERD pendant, table and floor lamps, THICK candleholders, PARASITE sculptural objects. Made to order in Tel Aviv.",
    images: [{ url: "/og.jpg", alt: "YET:FAB shop — designer 3D-printed objects" }],
  },
};

export default function ShopPage() {
  return (
    <main className="pt-[90px]">
      <h1 className="sr-only">Shop — Designer 3D-Printed Lamps & Objects by YET:FAB</h1>
      {/* Blue grid — edge to edge */}
      <div className="border-t border-l border-[#2222FF]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col border-b border-r border-[#2222FF]"
            >
              {/* Vertical image */}
              <Link
                href={product.shopUrl}
                className="relative overflow-hidden block"
                style={{ aspectRatio: "3/4" }}
              >
                <Img
                  src={product.image}
                  alt={`${product.type} ${product.name} — YET:FAB`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </Link>

              {/* Info */}
              <div className="flex flex-col items-center gap-[50px] py-5 px-4 text-center">
                <p className="text-[0.62rem] tracking-[0.06em]">
                  {product.prefix && (
                    <span className="text-[#888]">{product.prefix} </span>
                  )}
                  <span className="font-bold text-[#0A0A0A]">
                    {product.displayName}
                  </span>
                </p>
                <Link
                  href={product.shopUrl}
                  className="bg-[#2222FF] text-white text-[0.56rem] tracking-[0.16em] uppercase px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
                >
                  VIEW AND SHOP
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
