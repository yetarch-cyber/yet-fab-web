import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-5">
      <p className="text-[0.55rem] tracking-[0.3em] text-[#888] uppercase">404</p>
      <h1 className="text-[2.5rem] md:text-[3.5rem] leading-none tracking-tight">
        <span className="font-black text-[#0A0A0A]">YET:</span>
        <span className="font-thin text-[#888]"> NOT FOUND</span>
      </h1>
      <p className="text-[0.72rem] tracking-[0.06em] text-[#888]">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-4 bg-[#2222FF] text-white text-[0.6rem] tracking-[0.16em] uppercase px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
      >
        BACK TO HOME
      </Link>
    </main>
  );
}
