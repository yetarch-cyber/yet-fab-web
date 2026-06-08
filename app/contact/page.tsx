"use client";
import type { Metadata } from "next";
import { useState } from "react";

const INPUT_CLASS =
  "w-full bg-transparent border border-[#2222FF] rounded-full px-6 py-4 text-[0.75rem] tracking-[0.1em] uppercase placeholder:text-[#AAAAAA] text-[#0A0A0A] outline-none focus:border-[#2222FF] transition-colors";

const SELECT_OPTIONS = [
  "3D PRINTING INQUIRY",
  "BESPOKE FABRICATION",
  "EXPERT CONSULTATION",
  "SHOP / PURCHASE",
  "OTHER",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen pt-[70px] px-5 md:px-[100px] pb-20">
      <div className="max-w-3xl mx-auto pt-16">

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-32 gap-6">
            <h2 className="text-[2rem] font-thin text-[#888] tracking-tight">
              CONTACT US
            </h2>
            <p className="text-[0.75rem] tracking-[0.1em] text-[#888]">
              And we will get back to you soon!
            </p>
          </div>
        ) : (
          <form
            action="https://formsubmit.co/studio@yetarchitecture.com"
            method="POST"
            encType="multipart/form-data"
            onSubmit={() => setTimeout(() => setSubmitted(true), 500)}
            className="flex flex-col gap-4"
          >
            {/* Hidden config */}
            <input type="hidden" name="_subject" value="YET:FAB — New Inquiry from Website" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://www.yetfab.com/contact?sent=true" />

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
            <select
              name="inquiry_type"
              required
              defaultValue=""
              className={`${INPUT_CLASS} cursor-pointer appearance-none`}
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%232222FF' strokeWidth='1.5' fill='none'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 24px center" }}
            >
              <option value="" disabled>SELECT OPTION</option>
              {SELECT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>

            {/* Message */}
            <textarea
              name="message"
              placeholder="MESSAGE"
              rows={5}
              className="w-full bg-transparent border border-[#2222FF] rounded-3xl px-6 py-4 text-[0.75rem] tracking-[0.1em] uppercase placeholder:text-[#AAAAAA] text-[#0A0A0A] outline-none resize-none"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="NUMBER"
              required
              className={INPUT_CLASS}
            />

            {/* File attachment */}
            <div className="border border-[#2222FF] rounded-full px-6 py-4 flex items-center justify-between">
              <label htmlFor="file" className="text-[0.75rem] tracking-[0.1em] uppercase text-[#AAAAAA] cursor-pointer">
                ATTACH FILE (OPTIONAL)
              </label>
              <input
                id="file"
                type="file"
                name="attachment"
                className="text-[0.65rem] text-[#888] cursor-pointer w-auto"
                accept=".pdf,.jpg,.jpeg,.png,.dwg,.zip"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#2222FF] text-white text-[0.75rem] tracking-[0.18em] uppercase py-4 rounded-full hover:opacity-90 transition-opacity mt-2"
            >
              CONTACT YET:FAB TEAM
            </button>

            {/* Footer text */}
            <div className="flex flex-col items-center gap-1 pt-6 pb-2">
              <p className="text-[0.85rem] tracking-[0.12em] text-[#888] uppercase">
                CONTACT US
              </p>
              <p className="text-[0.65rem] tracking-[0.06em] text-[#AAAAAA]">
                And we will get back to you soon!
              </p>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
