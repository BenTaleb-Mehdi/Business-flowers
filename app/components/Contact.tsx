"use client";

import Link from "next/link";
import { useLanguage } from "@/app/components/LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <div className="min-h-screen bg-white pt-36 sm:pt-40 pb-20 sm:pb-24 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* ── PAGE HEADER ─────────────────────────────────── */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">
            <Link href="/" className="hover:text-gray-900 transition-colors">{c.breadcrumbHome}</Link>
            <span>/</span>
            <span className="text-gray-900">{c.breadcrumbCurrent}</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-24">

          {/* ── LEFT: Contact Info ─────────────────────────── */}
          <div className="w-full lg:w-5/12 flex flex-col">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-gray-900 leading-tight mb-6 sm:mb-8 whitespace-pre-line">
              {c.title}
            </h1>
            <div className="w-8 h-[1px] bg-gray-300 mb-10 sm:mb-12" />

            <div className="space-y-10 sm:space-y-12">
              <div>
                <h4 className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">{c.addressLabel}</h4>
                <p className="text-sm text-gray-900 font-serif italic mb-2">{c.address1}</p>
                <p className="text-sm text-gray-900 font-serif italic">{c.address2}</p>
              </div>

              <div>
                <h4 className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">{c.coordsLabel}</h4>
                <p className="text-sm text-gray-900 font-serif italic mb-2">contact@maisonlayal.com</p>
                <p className="text-sm text-gray-900 font-serif italic">+212 6 00 00 00 00</p>
              </div>

              <div>
                <h4 className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">{c.hoursLabel}</h4>
                <p className="text-sm text-gray-900 font-serif italic">{c.hours}</p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Contact Form ────────────────────────── */}
          <div className="w-full lg:w-7/12">
            <div className="bg-[#F9F7F6] p-6 sm:p-10 md:p-16 relative">
              <form className="space-y-8 sm:space-y-10" onSubmit={(e) => e.preventDefault()}>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                  <div className="flex flex-col space-y-3">
                    <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">{c.nameLabel}</label>
                    <input
                      type="text"
                      className="border-b border-gray-300 focus:border-gray-900 py-3 text-xs text-gray-900 outline-none transition-colors bg-transparent"
                    />
                  </div>
                  <div className="flex flex-col space-y-3">
                    <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">{c.phoneLabel}</label>
                    <input
                      type="tel"
                      className="border-b border-gray-300 focus:border-gray-900 py-3 text-xs text-gray-900 outline-none transition-colors bg-transparent"
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">{c.subjectLabel}</label>
                  <input
                    type="text"
                    className="border-b border-gray-300 focus:border-gray-900 py-3 text-xs text-gray-900 outline-none transition-colors bg-transparent"
                  />
                </div>

                <div className="flex flex-col space-y-3">
                  <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">{c.messageLabel}</label>
                  <textarea
                    rows={4}
                    className="border-b border-gray-300 focus:border-gray-900 py-3 text-xs text-gray-900 outline-none transition-colors bg-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-10 sm:px-12 py-4 sm:py-5 text-[10px] font-bold tracking-[0.25em] uppercase bg-[#6A4C4C] text-white hover:bg-gray-900 transition-colors duration-500 w-full sm:w-auto"
                >
                  {c.sendButton}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}