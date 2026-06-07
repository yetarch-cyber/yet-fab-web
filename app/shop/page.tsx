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
    <main>
      {/* Page title */}
      <div className="px-5 md:px-10 pt-10 pb-8">
        <h1 className="text-[2.8rem] md:text-[4rem] leading-none tracking-tight">
          <span className="font-black text-[#0A0A0A]">YET:</span>
          <span className="font-thin text-[#888]"> SHOP</span>
        </h1>
      </div>

      {/* Product grid with blue borders */}
      <div className="border-t border-l border-[#2222FF]">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="border-b border-r border-[#2222FF] flex flex-col"
            >
              {/* Image */}
              <div className="relative" style={{ aspectRatio: "4/3" }}>
                <Img
                  src={product.image}
                  alt={`${product.type} ${product.name} — YET:FAB`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
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

      {/* Blue diamond */}
      <div className="flex justify-center py-10">
        <span className="text-[#2222FF] text-2xl select-none">◆</span>
      </div>
    </main>
  );
}
