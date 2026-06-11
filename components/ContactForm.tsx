"use client";
import { useState } from "react";

const INPUT_CLASS =
  "w-full bg-transparent border border-[#2222FF] rounded-full px-6 py-4 text-[0.72rem] tracking-[0.1em] uppercase placeholder:text-[#AAAAAA] text-[#0A0A0A] outline-none focus:ring-1 focus:ring-[#2222FF] transition-all";

const SELECT_OPTIONS = [
  "3D PRINTING INQUIRY",
  "BESPOKE FABRICATION",
  "EXPERT CONSULTATION",
  "SHOP / PURCHASE",
  "OTHER",
];

export default function ContactForm() {
  const [fileName, setFileName] = useState("ATTACH FILE (OPTIONAL)");

  return (
    <form
      action="https://formsubmit.co/studio@yetarchitecture.com"
      method="POST"
      encType="multipart/form-data"
      className="flex flex-col gap-4"
    >
      {/* FormSubmit config */}
      <input type="hidden" name="_subject" value="YET:FAB — New Inquiry from Website" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://www.yet-fab.com/contact/inquiry?sent=true" />

      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder="NAME"
        required
        className={INPUT_CLASS}
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="EMAIL"
        required
        className={INPUT_CLASS}
      />

      {/* Select option */}
      <div className="relative">
        <select
          name="inquiry_type"
          required
          defaultValue=""
          className={`${INPUT_CLASS} cursor-pointer appearance-none pr-10`}
        >
          <option value="" disabled>SELECT OPTION</option>
          {SELECT_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2">
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
            <path d="M1 1l5 5 5-5" stroke="#2222FF" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Message */}
      <textarea
        name="message"
        placeholder="MESSAGE"
        rows={5}
        className="w-full bg-transparent border border-[#2222FF] rounded-3xl px-6 py-4 text-[0.72rem] tracking-[0.1em] uppercase placeholder:text-[#AAAAAA] text-[#0A0A0A] outline-none focus:ring-1 focus:ring-[#2222FF] resize-none transition-all"
      />

      {/* Phone — required */}
      <input
        type="tel"
        name="phone"
        placeholder="NUMBER"
        required
        className={INPUT_CLASS}
      />

      {/* File */}
      <label className="flex items-center justify-between border border-[#2222FF] rounded-full px-6 py-4 cursor-pointer hover:border-[#2222FF] transition-all">
        <span className="text-[0.72rem] tracking-[0.1em] uppercase text-[#AAAAAA] truncate pr-4">
          {fileName}
        </span>
        <input
          type="file"
          name="attachment"
          className="hidden"
          accept=".pdf,.jpg,.jpeg,.png,.dwg,.zip,.ai,.dxf"
          onChange={(e) =>
            setFileName(e.target.files?.[0]?.name ?? "ATTACH FILE (OPTIONAL)")
          }
        />
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2222FF" strokeWidth="1.5" strokeLinecap="round">
          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
        </svg>
      </label>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#2222FF] text-white text-[0.72rem] tracking-[0.18em] uppercase py-4 rounded-full hover:opacity-90 transition-opacity mt-2"
      >
        CONTACT YET:FAB TEAM
      </button>

      {/* Bottom text */}
      <div className="flex flex-col items-center gap-1 pt-6 pb-2">
        <p className="text-[0.85rem] tracking-[0.12em] text-[#888] uppercase">CONTACT US</p>
        <p className="text-[0.62rem] tracking-[0.06em] text-[#AAAAAA]">And we will get back to you soon!</p>
      </div>
    </form>
  );
}
