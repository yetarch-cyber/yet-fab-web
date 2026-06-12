"use client";
import { useState } from "react";
import Link from "next/link";

const COLORS = [
  {
    id: "natural",
    label: "Natural",
    sub: "Transparent",
    swatch: "bg-white border border-[#DCDAD5]",
  },
  {
    id: "gradient",
    label: "Sunset",
    sub: "Gradient",
    swatch: "bg-gradient-to-b from-[#E8876A] to-[#F5D9C8]",
  },
  {
    id: "custom",
    label: "Custom",
    sub: "Gradient",
    swatch: "bg-gradient-to-b from-[#2222FF] to-[#E8876A]",
  },
];

export default function AlherdOrderPage() {
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState("");
  const [customNote, setCustomNote] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [comments, setComments] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    const colorLabel =
      color === "natural"
        ? "Natural Transparent"
        : color === "gradient"
        ? "Sunset Gradient"
        : `Custom Gradient: ${customNote}`;

    const body = new FormData();
    body.append("_subject", "Order: ALHERD Pendant Lamp");
    body.append("_captcha", "false");
    body.append("_template", "table");
    body.append("Product", "ALHERD Pendant Lamp");
    body.append("Quantity", String(qty));
    body.append("Colour", colorLabel);
    body.append("Name", name);
    body.append("Email", email);
    body.append("Phone", phone);
    body.append("Delivery address", address);
    if (comments) body.append("Comments", comments);

    await fetch("https://formsubmit.co/studio@yetarchitecture.com", {
      method: "POST",
      body,
    });

    setSubmitting(false);
    setSent(true);
  }

  if (sent) {
    return (
      <main className="min-h-screen pt-[90px] px-5 md:px-[100px] pb-20">
        <div className="max-w-lg mx-auto pt-20 flex flex-col items-center gap-6 text-center">
          <p className="text-[2rem] font-thin text-[#888]">Order received.</p>
          <p className="text-[0.75rem] tracking-[0.08em] text-[#888] leading-[1.8]">
            Thank you for your order. We will contact you shortly to confirm
            details and arrange delivery.
          </p>
          <div className="flex gap-3 mt-4">
            <Link
              href="/shop/alherd-pendant"
              className="bg-[#2222FF] text-white text-[0.6rem] tracking-[0.16em] uppercase px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              BACK TO LAMP
            </Link>
            <Link
              href="/shop"
              className="border border-[#2222FF] text-[#2222FF] text-[0.6rem] tracking-[0.16em] uppercase px-8 py-3 rounded-full hover:bg-[#2222FF] hover:text-white transition-colors"
            >
              VIEW ALL PRODUCTS
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-[90px] px-5 md:px-[100px] pb-24">
      {/* Header */}
      <div className="pt-10 pb-12 border-b border-[#DCDAD5]">
        <p className="text-[0.6rem] tracking-[0.14em] text-[#888] uppercase mb-3">
          <Link href="/shop/alherd-pendant" className="hover:text-[#2222FF] transition-colors">
            ALHERD Pendant Lamp
          </Link>
          {" / "}
          <span>Order</span>
        </p>
        <h1 className="text-[2.5rem] font-black tracking-tight text-[#0A0A0A] leading-none">
          Place Order
        </h1>
        <p className="mt-3 text-[0.68rem] tracking-[0.06em] text-[#888]">
          Every lamp is made to order. We will confirm your order and provide a
          lead time by email.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl pt-12 flex flex-col gap-14">

        {/* 01 Quantity */}
        <div>
          <p className="text-[0.55rem] tracking-[0.2em] text-[#2222FF] uppercase mb-5">
            01 — Quantity
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="w-10 h-10 rounded-full border border-[#DCDAD5] text-[#0A0A0A] text-lg hover:border-[#2222FF] hover:text-[#2222FF] transition-colors flex items-center justify-center"
            >
              −
            </button>
            <span className="text-[1.5rem] font-thin text-[#0A0A0A] w-8 text-center">
              {qty}
            </span>
            <button
              type="button"
              onClick={() => setQty((q) => q + 1)}
              className="w-10 h-10 rounded-full border border-[#DCDAD5] text-[#0A0A0A] text-lg hover:border-[#2222FF] hover:text-[#2222FF] transition-colors flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>

        {/* 02 Colour */}
        <div>
          <p className="text-[0.55rem] tracking-[0.2em] text-[#2222FF] uppercase mb-5">
            02 — Colour
          </p>
          <div className="grid grid-cols-3 gap-3">
            {COLORS.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setColor(c.id);
                  if (c.id !== "custom") setCustomNote("");
                }}
                className={`flex flex-col items-center gap-3 p-5 border rounded-sm transition-all ${
                  color === c.id
                    ? "border-[#2222FF] bg-white"
                    : "border-[#DCDAD5] hover:border-[#0A0A0A]"
                }`}
              >
                <div className={`w-10 h-10 rounded-full ${c.swatch}`} />
                <div className="text-center">
                  <p className="text-[0.65rem] font-bold tracking-[0.06em] text-[#0A0A0A]">
                    {c.label}
                  </p>
                  <p className="text-[0.55rem] tracking-[0.08em] text-[#888] uppercase">
                    {c.sub}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Custom gradient note */}
          {color === "custom" && (
            <div className="mt-4">
              <label className="block text-[0.58rem] tracking-[0.12em] text-[#888] uppercase mb-2">
                Describe your gradient
              </label>
              <textarea
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                required
                rows={3}
                placeholder="e.g. deep blue fading to warm sand..."
                className="w-full border border-[#DCDAD5] bg-transparent px-4 py-3 text-[0.72rem] text-[#0A0A0A] placeholder-[#AAAAAA] focus:outline-none focus:border-[#2222FF] resize-none"
              />
            </div>
          )}
        </div>

        {/* 03 Your details */}
        <div>
          <p className="text-[0.55rem] tracking-[0.2em] text-[#2222FF] uppercase mb-5">
            03 — Your Details
          </p>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[0.55rem] tracking-[0.12em] text-[#888] uppercase mb-1.5">
                  Full name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-b border-[#DCDAD5] bg-transparent pb-2 text-[0.75rem] text-[#0A0A0A] placeholder-[#AAAAAA] focus:outline-none focus:border-[#2222FF] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-[0.55rem] tracking-[0.12em] text-[#888] uppercase mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-[#DCDAD5] bg-transparent pb-2 text-[0.75rem] text-[#0A0A0A] placeholder-[#AAAAAA] focus:outline-none focus:border-[#2222FF] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-[0.55rem] tracking-[0.12em] text-[#888] uppercase mb-1.5">
                Phone *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border-b border-[#DCDAD5] bg-transparent pb-2 text-[0.75rem] text-[#0A0A0A] placeholder-[#AAAAAA] focus:outline-none focus:border-[#2222FF] transition-colors"
                placeholder="+972 ···"
              />
            </div>

            <div>
              <label className="block text-[0.55rem] tracking-[0.12em] text-[#888] uppercase mb-1.5">
                Delivery address *
              </label>
              <input
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border-b border-[#DCDAD5] bg-transparent pb-2 text-[0.75rem] text-[#0A0A0A] placeholder-[#AAAAAA] focus:outline-none focus:border-[#2222FF] transition-colors"
                placeholder="Street, city, country"
              />
            </div>

            <div>
              <label className="block text-[0.55rem] tracking-[0.12em] text-[#888] uppercase mb-1.5">
                Additional comments
              </label>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                rows={3}
                placeholder="Any special requests or questions..."
                className="w-full border border-[#DCDAD5] bg-transparent px-4 py-3 text-[0.72rem] text-[#0A0A0A] placeholder-[#AAAAAA] focus:outline-none focus:border-[#2222FF] resize-none"
              />
            </div>
          </div>
        </div>

        {/* Summary + submit */}
        <div className="border-t border-[#DCDAD5] pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="text-[0.65rem] leading-[1.9] text-[#888]">
            {qty > 0 && color && (
              <>
                <p>
                  <span className="text-[#0A0A0A] font-medium">{qty} ×</span>{" "}
                  ALHERD Pendant Lamp
                </p>
                <p>
                  {color === "natural"
                    ? "Natural Transparent"
                    : color === "gradient"
                    ? "Sunset Gradient"
                    : "Custom Gradient"}
                </p>
                <p className="mt-1 text-[#0A0A0A] font-medium">
                  ₪{(6700 * qty).toLocaleString()}
                </p>
              </>
            )}
          </div>
          <button
            type="submit"
            disabled={!color || submitting}
            className="bg-[#2222FF] text-white text-[0.6rem] tracking-[0.18em] uppercase px-12 py-4 rounded-full hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {submitting ? "Sending…" : "SUBMIT ORDER"}
          </button>
        </div>
      </form>
    </main>
  );
}
