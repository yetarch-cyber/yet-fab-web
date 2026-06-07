import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/Img";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse and shop YET:FAB products — ALHERD lamps, BAKLAN, THICK candleholders, PARASITE, and more 3D-printed objects from Tel Aviv.",
  alternates: { canonical: "https://www.yetfab.com/shop" },
};

export default function ShopPage() {
  return (
    <main className="pt-[70px]">
      {/* Collapsed blue grid — outer left+top, each cell right+bottom */}
      <div className="px-5 md:px-[100px]">
      <div className="border-t border-l border-[#2222FF]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col border-b border-r border-[#2222FF]"
            >
              {/* Vertical image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Img
                  src={product.image}
                  alt={`${product.type} ${product.name} — YET:FAB`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col items-center gap-3 py-5 px-4 text-center">
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
      </div>
    </main>
  );
}
