import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-5 md:px-[100px] pt-[90px] pb-24 min-h-screen flex flex-col justify-center">
      <div className="max-w-md">
        <p className="text-[0.58rem] tracking-[0.18em] text-[#2222FF] uppercase mb-6">
          404
        </p>
        <h1 className="text-[3.5rem] font-black tracking-tight text-[#0A0A0A] leading-none mb-6">
          Not found.
        </h1>
        <p className="text-[0.78rem] leading-[2] text-[#888] mb-10">
          This page does not exist. Try browsing the shop or get in touch.
        </p>
        <div className="flex flex-col gap-4">
          <Link
            href="/shop"
            className="inline-block bg-[#2222FF] text-white text-[0.6rem] tracking-[0.18em] uppercase px-10 py-4 rounded-full hover:opacity-90 transition-opacity w-fit"
          >
            VIEW SHOP
          </Link>
          <Link
            href="/"
            className="text-[0.58rem] tracking-[0.12em] text-[#888] uppercase hover:text-[#2222FF] transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
