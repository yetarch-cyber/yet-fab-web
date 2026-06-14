"use client";

import { useState } from "react";
import Link from "next/link";

const PRICE = 6600;

const COLOURS = [
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

const INPUT =
  "w-full border-b border-[#DCDAD5] bg-transparent pb-3 text-[1rem] text-[#0A0A0A] placeholder-[#AAAAAA] focus:outline-none focus:border-[#2222FF] transition-colors";

const LABEL =
  "block text-[0.7rem] tracking-[0.12em] font-medium text-[#888] uppercase mb-2";

export default function AlherdFloorOrderPage() {
  const [qty, setQty] = useState(1);
  const [colour, setColour] = useState("");
  const [customNote, setCustomNote] = useState("");
  const [height, setHeight] = useState("");
  const [cable, setCable] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [comments, setComments] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const canSubmit = colour !== "" && height !== "" && cable !== "" && name && email;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setSending(true);
    setError("");
    try {
      const colourLabel =
        colour === "natural"
          ? "Natural Transparent"
          : colour === "gradient"
          ? "Sunset Gradient"
          : `Custom Gradient: ${customNote}`;

      const body = new FormData();
      body.append("_subject", "Purchase Inquiry: ALHERD Floor Lamp");
      body.append("_captcha", "false");
      body.append("_template", "table");
      body.append("Product", "ALHERD Floor Lamp");
      body.append("Quantity", String(qty));
      body.append("Colour", colourLabel);
      body.append("Height", `${height} cm`);
      body.append("Cable colour", cable);
      body.append("Estimated total", `₪${(PRICE * qty).toLocaleString()}`);
      body.append("Name", name);
      body.append("Email", email);
      body.append("Phone", phone || "Not provided");
      body.append("Delivery address", address || "Not provided");
      if (comments) body.append("Comments", comments);

      await fetch("https://formsubmit.co/studio@yetarchitecture.com", {
        method: "POST",
        body,
      });

      setSent(true);
    } catch {
      setError("Something went wrong. Please email us directly at studio@yetarchitecture.com");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <main className="min-h-screen pt-[90px] px-5 md:px-[100px] pb-20">
        <div className="max-w-lg mx-auto pt-20 flex flex-col items-center gap-6 text-center">
          <p className="text-[2rem] font-thin text-[#888]">Inquiry sent.</p>
          <p className="text-[0.9rem] tracking-[0.04em] text-[#888] leading-[1.8]">
            Thank you. We will get back to you shortly with a full quote
            including delivery to your location. No payment is taken until you
            confirm.
          </p>
          <div className="flex gap-3 mt-4">
            <Link
              href="/shop/alherd-floor"
              className="bg-[#2222FF] text-white text-[0.7rem] tracking-[0.16em] uppercase px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              BACK TO LAMP
            </Link>
            <Link
              href="/shop"
              className="border border-[#2222FF] text-[#2222FF] text-[0.7rem] tracking-[0.16em] uppercase px-8 py-3 rounded-full hover:bg-[#2222FF] hover:text-white transition-colors"
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
        <p className="text-[0.7rem] tracking-[0.12em] text-[#888] uppercase mb-3">
          <Link href="/shop/alherd-floor" className="hover:text-[#2222FF] transition-colors">
            ALHERD Floor Lamp
          </Link>
          {" / "}
          <span>Inquire</span>
        </p>
        <h1 className="text-[2.5rem] font-black tracking-tight text-[#0A0A0A] leading-none">
          Inquire to Purchase
        </h1>
        <p className="mt-3 text-[0.85rem] text-[#888] leading-[1.7]">
          Every lamp is made to order. Fill in your details and we will get back
          to you with a full quote — including delivery to your location — for
          confirmation before any payment is made.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl pt-12 flex flex-col gap-14">

        {/* 01 Quantity */}
        <div>
          <p className="text-[0.75rem] tracking-[0.18em] font-bold text-[#2222FF] uppercase mb-6">
            01 — Quantity
          </p>
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="w-12 h-12 rounded-full border border-[#DCDAD5] text-[#0A0A0A] text-xl hover:border-[#2222FF] hover:text-[#2222FF] transition-colors flex items-center justify-center"
            >
              −
            </button>
            <span className="text-[2rem] font-medium text-[#0A0A0A] w-10 text-center">
              {qty}
            </span>
            <button
              type="button"
              onClick={() => setQty((q) => q + 1)}
              className="w-12 h-12 rounded-full border border-[#DCDAD5] text-[#0A0A0A] text-xl hover:border-[#2222FF] hover:text-[#2222FF] transition-colors flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>

        {/* 02 Colour */}
        <div>
          <p className="text-[0.75rem] tracking-[0.18em] font-bold text-[#2222FF] uppercase mb-6">
            02 — Colour
          </p>
          <div className="grid grid-cols-3 gap-3">
            {COLOURS.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setColour(c.id);
                  if (c.id !== "custom") setCustomNote("");
                }}
                className={`flex flex-col items-center gap-4 p-6 border rounded-sm transition-all ${
                  colour === c.id
                    ? "border-[#2222FF] bg-white"
                    : "border-[#DCDAD5] hover:border-[#0A0A0A]"
                }`}
              >
                <div className={`w-12 h-12 rounded-full ${c.swatch}`} />
                <div className="text-center">
                  <p className="text-[0.8rem] font-bold tracking-[0.04em] text-[#0A0A0A]">
                    {c.label}
                  </p>
                  <p className="text-[0.65rem] tracking-[0.08em] text-[#888] uppercase mt-0.5">
                    {c.sub}
                  </p>
                </div>
              </button>
            ))}
          </div>
          {colour === "custom" && (
            <div className="mt-5">
              <label className={LABEL}>Describe your gradient</label>
              <textarea
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                required
                rows={3}
                placeholder="e.g. deep blue fading to warm sand..."
                className="w-full border border-[#DCDAD5] bg-transparent px-4 py-3 text-[1rem] text-[#0A0A0A] placeholder-[#AAAAAA] focus:outline-none focus:border-[#2222FF] resize-none"
              />
            </div>
          )}
        </div>

        {/* 03 Height */}
        <div>
          <p className="text-[0.75rem] tracking-[0.18em] font-bold text-[#2222FF] uppercase mb-6">
            03 — Height
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: "130", label: "130 cm", note: "Standard" },
              { id: "160", label: "160 cm", note: "Tall" },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setHeight(opt.id)}
                className={`flex flex-col items-center gap-3 p-6 border rounded-sm transition-all ${
                  height === opt.id
                    ? "border-[#2222FF] bg-white"
                    : "border-[#DCDAD5] hover:border-[#0A0A0A]"
                }`}
              >
                <p className={`text-[1.4rem] font-thin leading-none ${height === opt.id ? "text-[#2222FF]" : "text-[#0A0A0A]"}`}>
                  {opt.label}
                </p>
                <p className="text-[0.65rem] tracking-[0.08em] text-[#888] uppercase">
                  {opt.note}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* 04 Cable colour */}
        <div>
          <p className="text-[0.75rem] tracking-[0.18em] font-bold text-[#2222FF] uppercase mb-6">
            04 — Cable colour
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: "Orange", swatch: "bg-[#FF6B2B]" },
              { id: "Grey", swatch: "bg-[#AAAAAA]" },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setCable(opt.id)}
                className={`flex flex-col items-center gap-4 p-6 border rounded-sm transition-all ${
                  cable === opt.id
                    ? "border-[#2222FF] bg-white"
                    : "border-[#DCDAD5] hover:border-[#0A0A0A]"
                }`}
              >
                <div className={`w-12 h-12 rounded-full ${opt.swatch}`} />
                <p className={`text-[0.8rem] font-bold tracking-[0.04em] ${cable === opt.id ? "text-[#2222FF]" : "text-[#0A0A0A]"}`}>
                  {opt.id}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* 05 Your details */}
        <div>
          <p className="text-[0.75rem] tracking-[0.18em] font-bold text-[#2222FF] uppercase mb-6">
            05 — Your Details
          </p>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={LABEL}>Full name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={INPUT}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className={LABEL}>Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={INPUT}
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className={LABEL}>Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={INPUT}
                placeholder="+972 ···"
              />
            </div>
            <div>
              <label className={LABEL}>Delivery address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={INPUT}
                placeholder="Street, city, country"
              />
            </div>
            <div>
              <label className={LABEL}>Additional comments</label>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                rows={3}
                placeholder="Any special requests or questions..."
                className="w-full border border-[#DCDAD5] bg-transparent px-4 py-3 text-[1rem] text-[#0A0A0A] placeholder-[#AAAAAA] focus:outline-none focus:border-[#2222FF] resize-none"
              />
            </div>
          </div>
        </div>

        {error && (
          <p className="text-[0.65rem] text-red-600">{error}</p>
        )}

        {/* Summary + submit */}
        <div className="border-t border-[#DCDAD5] pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="text-[0.85rem] leading-[1.9] text-[#888]">
            {qty > 0 && colour && height && cable && (
              <>
                <p>
                  <span className="text-[#0A0A0A] font-semibold">{qty} ×</span>{" "}
                  ALHERD Floor Lamp
                </p>
                <p>
                  {colour === "natural" ? "Natural Transparent" : colour === "gradient" ? "Sunset Gradient" : "Custom Gradient"}
                  {" · "}{height} cm{" · "}{cable} cable
                </p>
                <p className="mt-1 text-[1.1rem] text-[#0A0A0A] font-semibold">
                  ₪{(PRICE * qty).toLocaleString()}
                </p>
              </>
            )}
          </div>
          <button
            type="submit"
            disabled={!canSubmit || sending}
            className="bg-[#2222FF] text-white text-[0.72rem] tracking-[0.18em] uppercase px-12 py-4 rounded-full hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {sending ? "Sending…" : "SEND INQUIRY"}
          </button>
        </div>
      </form>
    </main>
  );
}
