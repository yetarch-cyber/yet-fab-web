"use client";

import { useState } from "react";
import Link from "next/link";

export default function TurbineOrderPage() {
  const [qty, setQty] = useState(1);
  const [colour, setColour] = useState("");
  const [colourCustom, setColourCustom] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [comments, setComments] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const canSubmit = colour !== "" && name && email;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setSending(true);
    setError("");
    try {
      const body = {
        _subject: "Purchase Inquiry: TURBINE Floor Speaker",
        _replyto: email,
        product: "TURBINE Floor Speaker",
        quantity: qty,
        colour: colour === "custom" ? `Custom: ${colourCustom}` : colour,
        name,
        email,
        phone: phone || "Not provided",
        address: address || "Not provided",
        comments: comments || "None",
      };
      const res = await fetch("https://formsubmit.co/studio@yetarchitecture.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Send failed");
      setSent(true);
    } catch {
      setError("Something went wrong. Please email us directly at studio@yetarchitecture.com");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <main className="px-5 md:px-[100px] pt-[90px] pb-24 min-h-screen flex flex-col justify-center">
        <div className="max-w-md">
          <p className="text-[0.58rem] tracking-[0.18em] text-[#2222FF] uppercase mb-6">Inquiry sent.</p>
          <h1 className="text-[2.5rem] font-black tracking-tight text-[#0A0A0A] leading-none mb-6">Thank you.</h1>
          <p className="text-[0.78rem] leading-[2] text-[#888] mb-8">
            We have received your inquiry for the TURBINE Floor Speaker. We will get back to you with full details — including pricing and delivery — before any payment is made.
          </p>
          <Link href="/shop" className="text-[0.58rem] tracking-[0.12em] text-[#888] uppercase hover:text-[#2222FF] transition-colors">
            ← Back to shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="px-5 md:px-[100px] pt-[90px] pb-24">
      <div className="pt-10 pb-10 border-b border-[#DCDAD5]">
        <p className="text-[0.6rem] tracking-[0.12em] text-[#888] uppercase mb-4">
          <Link href="/shop" className="hover:text-[#2222FF] transition-colors">Shop</Link>
          {" / "}
          <Link href="/shop/turbine" className="hover:text-[#2222FF] transition-colors">TURBINE Speaker</Link>
          {" / "}Inquire
        </p>
        <h1 className="text-[2.2rem] font-black tracking-tight text-[#0A0A0A] leading-none mb-3">Purchase Inquiry</h1>
        <p className="text-[0.7rem] leading-[2] text-[#888] max-w-xl">
          Fill in your details and we will get back to you with full pricing and delivery information before any payment is made.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="pt-12 flex flex-col gap-14 max-w-2xl">

        {/* Step 1: Quantity */}
        <div>
          <p className="text-[0.58rem] tracking-[0.18em] text-[#2222FF] uppercase mb-6">01 — Quantity</p>
          <div className="flex items-center gap-6">
            <button type="button" onClick={() => setQty(Math.max(1, qty - 1))}
              className="w-10 h-10 border border-[#DCDAD5] text-[#0A0A0A] text-lg hover:border-[#2222FF] hover:text-[#2222FF] transition-colors flex items-center justify-center">
              −
            </button>
            <span className="text-[1.8rem] font-thin text-[#0A0A0A] w-8 text-center leading-none">{qty}</span>
            <button type="button" onClick={() => setQty(qty + 1)}
              className="w-10 h-10 border border-[#DCDAD5] text-[#0A0A0A] text-lg hover:border-[#2222FF] hover:text-[#2222FF] transition-colors flex items-center justify-center">
              +
            </button>
          </div>
        </div>

        {/* Step 2: Colour */}
        <div>
          <p className="text-[0.58rem] tracking-[0.18em] text-[#2222FF] uppercase mb-6">02 — Colour</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { id: "gray", label: "Gray", sub: "Standard", swatch: "bg-[#888888]" },
              { id: "orange", label: "Orange", sub: "Standard", swatch: "bg-[#E05A00]" },
              { id: "custom", label: "Custom", sub: "Your choice", swatch: "bg-gradient-to-b from-[#2222FF] to-[#FF2B78]" },
            ].map((opt) => (
              <button key={opt.id} type="button"
                onClick={() => { setColour(opt.id); if (opt.id !== "custom") setColourCustom(""); }}
                className={`flex flex-col items-center gap-4 p-6 border rounded-sm transition-all ${
                  colour === opt.id ? "border-[#2222FF] bg-white" : "border-[#DCDAD5] hover:border-[#0A0A0A]"
                }`}>
                <div className={`w-12 h-12 rounded-full ${opt.swatch}`} />
                <div className="text-center">
                  <p className={`text-[0.75rem] font-bold tracking-[0.04em] ${colour === opt.id ? "text-[#2222FF]" : "text-[#0A0A0A]"}`}>{opt.label}</p>
                  <p className="text-[0.6rem] tracking-[0.08em] text-[#888] uppercase mt-0.5">{opt.sub}</p>
                </div>
              </button>
            ))}
          </div>
          {colour === "custom" && (
            <div className="mt-5">
              <textarea value={colourCustom} onChange={(e) => setColourCustom(e.target.value)}
                placeholder="Describe your preferred colour…" rows={3}
                className="w-full border border-[#DCDAD5] px-4 py-3 text-[1rem] text-[#0A0A0A] placeholder-[#AAAAAA] focus:outline-none focus:border-[#2222FF] resize-none bg-transparent" />
            </div>
          )}
        </div>

        {/* Step 3: Contact */}
        <div>
          <p className="text-[0.58rem] tracking-[0.18em] text-[#2222FF] uppercase mb-6">03 — Your details</p>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[0.52rem] tracking-[0.12em] text-[#888] uppercase mb-2">Name *</label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)}
                  className="w-full border border-[#DCDAD5] px-4 py-3 text-[0.7rem] text-[#0A0A0A] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#2222FF] bg-transparent" />
              </div>
              <div>
                <label className="block text-[0.52rem] tracking-[0.12em] text-[#888] uppercase mb-2">Email *</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-[#DCDAD5] px-4 py-3 text-[0.7rem] text-[#0A0A0A] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#2222FF] bg-transparent" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[0.52rem] tracking-[0.12em] text-[#888] uppercase mb-2">Phone</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-[#DCDAD5] px-4 py-3 text-[0.7rem] text-[#0A0A0A] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#2222FF] bg-transparent" />
              </div>
              <div>
                <label className="block text-[0.52rem] tracking-[0.12em] text-[#888] uppercase mb-2">Delivery address</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}
                  className="w-full border border-[#DCDAD5] px-4 py-3 text-[0.7rem] text-[#0A0A0A] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#2222FF] bg-transparent" />
              </div>
            </div>
            <div>
              <label className="block text-[0.52rem] tracking-[0.12em] text-[#888] uppercase mb-2">Additional comments</label>
              <textarea value={comments} onChange={(e) => setComments(e.target.value)} rows={4}
                className="w-full border border-[#DCDAD5] px-4 py-3 text-[0.7rem] text-[#0A0A0A] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#2222FF] resize-none bg-transparent" />
            </div>
          </div>
        </div>

        {error && <p className="text-[0.65rem] text-red-600">{error}</p>}

        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 border-t border-[#DCDAD5] pt-10">
          <button type="submit" disabled={!canSubmit || sending}
            className={`bg-[#2222FF] text-white text-[0.6rem] tracking-[0.18em] uppercase px-10 py-4 rounded-full transition-opacity ${
              !canSubmit || sending ? "opacity-30 cursor-not-allowed" : "hover:opacity-90"
            }`}>
            {sending ? "SENDING…" : "SEND INQUIRY"}
          </button>
          <p className="text-[0.58rem] text-[#888] leading-[1.8]">
            Price: ₪13,500 / €3,900 per unit. No payment required now — we will confirm all details including delivery before any charge is made.
          </p>
        </div>
      </form>
    </main>
  );
}
