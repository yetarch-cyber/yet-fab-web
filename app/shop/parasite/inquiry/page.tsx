"use client";

import { useState, useRef } from "react";
import Link from "next/link";

const INPUT =
  "w-full border-b border-[#DCDAD5] bg-transparent pb-3 text-[1rem] text-[#0A0A0A] placeholder-[#AAAAAA] focus:outline-none focus:border-[#2222FF] transition-colors";

const LABEL =
  "block text-[0.7rem] tracking-[0.12em] font-medium text-[#888] uppercase mb-2";

export default function ParasiteInquiryPage() {
  const [furniture, setFurniture] = useState("");
  const [vision, setVision] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const canSubmit = name && email && furniture;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setSending(true);
    setError("");
    try {
      const body = new FormData();
      body.append("_subject", "PARASITE Inquiry");
      body.append("_captcha", "false");
      body.append("_template", "table");
      body.append("Project", "PARASITE — Bespoke Object");
      body.append("Name", name);
      body.append("Email", email);
      body.append("Phone", phone || "Not provided");
      body.append("About the furniture", furniture);
      body.append("Vision / what they're looking for", vision || "Not provided");
      if (comments) body.append("Additional comments", comments);
      if (files) {
        Array.from(files).forEach((f) => body.append("attachment", f));
      }

      const res = await fetch("https://formsubmit.co/studio@yetarchitecture.com", {
        method: "POST",
        body,
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError("Something went wrong. Please reach out directly via WhatsApp or email below.");
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
            Thank you. We will review your furniture details and get back to you
            to begin designing your custom Parasite.
          </p>
          <div className="flex gap-3 mt-4">
            <Link
              href="/shop/parasite"
              className="bg-[#2222FF] text-white text-[0.7rem] tracking-[0.16em] uppercase px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              BACK TO PARASITE
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
          <Link href="/shop/parasite" className="hover:text-[#2222FF] transition-colors">
            PARASITE
          </Link>
          {" / "}
          <span>Inquiry</span>
        </p>
        <h1 className="text-[2.5rem] font-black tracking-tight text-[#0A0A0A] leading-none mb-3">
          Start a Project
        </h1>
        <p className="text-[0.85rem] text-[#888] leading-[1.7] max-w-xl">
          Tell us about your furniture and what you have in mind. Attach photos
          so we can understand the piece. We will get back to you to begin
          designing your custom Parasite.
        </p>
      </div>

      {/* Direct contact options */}
      <div className="pt-10 pb-10 border-b border-[#DCDAD5] flex flex-col md:flex-row gap-4">
        <a
          href="https://wa.me/972586297942"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 border border-[#DCDAD5] px-6 py-4 rounded-full hover:border-[#25D366] hover:text-[#25D366] transition-colors group"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="text-[0.7rem] tracking-[0.14em] uppercase">WhatsApp</span>
          <span className="text-[0.65rem] text-[#888]">+972-58-629-7942</span>
        </a>
        <a
          href="mailto:studio@yetarchitecture.com"
          className="flex items-center gap-3 border border-[#DCDAD5] px-6 py-4 rounded-full hover:border-[#2222FF] hover:text-[#2222FF] transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m2 7 10 7 10-7"/>
          </svg>
          <span className="text-[0.7rem] tracking-[0.14em] uppercase">Email</span>
          <span className="text-[0.65rem] text-[#888]">studio@yetarchitecture.com</span>
        </a>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl pt-12 flex flex-col gap-14">

        {/* 01 Your furniture */}
        <div>
          <p className="text-[0.75rem] tracking-[0.18em] font-bold text-[#2222FF] uppercase mb-6">
            01 — Your Furniture
          </p>
          <div className="flex flex-col gap-6">
            <div>
              <label className={LABEL}>Describe the piece *</label>
              <textarea
                required
                value={furniture}
                onChange={(e) => setFurniture(e.target.value)}
                rows={4}
                placeholder="e.g. IKEA Kallax shelf unit, black, 77×77 cm, standing in living room corner..."
                className="w-full border border-[#DCDAD5] bg-transparent px-4 py-3 text-[1rem] text-[#0A0A0A] placeholder-[#AAAAAA] focus:outline-none focus:border-[#2222FF] resize-none"
              />
            </div>
            <div>
              <label className={LABEL}>Your vision</label>
              <textarea
                value={vision}
                onChange={(e) => setVision(e.target.value)}
                rows={3}
                placeholder="What feel or character would you like the Parasite to bring to the piece?"
                className="w-full border border-[#DCDAD5] bg-transparent px-4 py-3 text-[1rem] text-[#0A0A0A] placeholder-[#AAAAAA] focus:outline-none focus:border-[#2222FF] resize-none"
              />
            </div>
          </div>
        </div>

        {/* 02 Attach photos */}
        <div>
          <p className="text-[0.75rem] tracking-[0.18em] font-bold text-[#2222FF] uppercase mb-6">
            02 — Attach Photos
          </p>
          <p className="text-[0.65rem] text-[#888] mb-4">
            Photos of your furniture help us understand the form and plan the
            design. You can attach multiple images.
          </p>
          <div
            onClick={() => fileRef.current?.click()}
            className="border border-dashed border-[#DCDAD5] hover:border-[#2222FF] transition-colors cursor-pointer px-6 py-10 flex flex-col items-center gap-3 text-center"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-[#AAAAAA]">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            <p className="text-[0.7rem] tracking-[0.1em] text-[#888] uppercase">
              {files && files.length > 0
                ? `${files.length} file${files.length > 1 ? "s" : ""} selected`
                : "Click to upload photos"}
            </p>
            <p className="text-[0.6rem] text-[#AAAAAA]">JPG, PNG — multiple files allowed</p>
          </div>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => setFiles(e.target.files)}
          />
          {files && files.length > 0 && (
            <ul className="mt-3 flex flex-col gap-1">
              {Array.from(files).map((f) => (
                <li key={f.name} className="text-[0.62rem] text-[#888]">
                  {f.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 03 Your details */}
        <div>
          <p className="text-[0.75rem] tracking-[0.18em] font-bold text-[#2222FF] uppercase mb-6">
            03 — Your Details
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
              <label className={LABEL}>Additional comments</label>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                rows={3}
                placeholder="Anything else you'd like us to know..."
                className="w-full border border-[#DCDAD5] bg-transparent px-4 py-3 text-[1rem] text-[#0A0A0A] placeholder-[#AAAAAA] focus:outline-none focus:border-[#2222FF] resize-none"
              />
            </div>
          </div>
        </div>

        {error && (
          <p className="text-[0.65rem] text-red-600">{error}</p>
        )}

        <div className="border-t border-[#DCDAD5] pt-8 flex flex-col md:flex-row md:items-center gap-6">
          <button
            type="submit"
            disabled={!canSubmit || sending}
            className="bg-[#2222FF] text-white text-[0.72rem] tracking-[0.18em] uppercase px-12 py-4 rounded-full hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {sending ? "Sending…" : "SEND INQUIRY"}
          </button>
          <p className="text-[0.58rem] text-[#888] leading-[1.8]">
            We will review your details and get back to you to begin the design
            process. No payment required at this stage.
          </p>
        </div>
      </form>
    </main>
  );
}
