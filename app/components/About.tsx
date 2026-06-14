"use client";

import Link from "next/link";
import { useLanguage } from "@/app/components/LanguageProvider";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <div className="min-h-screen bg-white pt-36 sm:pt-40 pb-20 sm:pb-24 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* ── PAGE HEADER ─────────────────────────────────── */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">
            <Link href="/" className="hover:text-gray-900 transition-colors">{a.breadcrumbHome}</Link>
            <span>/</span>
            <span className="text-gray-900">{a.breadcrumbCurrent}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight max-w-3xl">
            {a.title}
          </h1>
        </div>

        {/* ── HERO IMAGE ──────────────────────────────────── */}
        <div className="relative w-full h-[40vh] sm:h-[55vh] md:h-[70vh] bg-[#F9F7F6] overflow-hidden mb-20 sm:mb-24 lg:mb-32">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F2EAE8] via-[#EDE3E1] to-[#D9CECA]" />
          {/* Decorative elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <span className="font-serif text-[20vw] text-gray-400 select-none">✿</span>
          </div>
        </div>

        {/* ── EDITORIAL SPLIT ─────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400 mb-6 block">
              {a.sectionLabel}
            </h2>
            <h3 className="font-serif text-2xl sm:text-3xl sm:text-4xl text-gray-900 leading-tight mb-8">
              {a.sectionTitle}
            </h3>
            <div className="w-8 h-[1px] bg-gray-300 mb-8" />
            <div className="space-y-5 sm:space-y-6 text-sm sm:text-[15px] text-gray-500 leading-relaxed font-serif italic">
              <p>{a.p1}</p>
              <p>{a.p2}</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0 lg:pt-24">
            <div className="relative w-full max-w-[380px] sm:max-w-[450px] aspect-[4/5] bg-[#F9F7F6] p-4 sm:p-8">
              <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-[#F2EAE8] to-[#D9CECA]" />
              <div className="absolute -left-5 top-1/2 -translate-y-1/2 -rotate-90 hidden lg:block origin-center z-10">
                <span className="text-[9px] tracking-[0.3em] uppercase text-gray-900 font-bold whitespace-nowrap bg-white px-4 py-2">
                  {a.atelierLabel}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── PHILOSOPHY GRID ─────────────────────────────── */}
        <div className="mt-24 sm:mt-32 pt-16 sm:pt-24 border-t border-gray-100">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-900">
              {a.philosophyLabel}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-16 lg:gap-12">
            {a.pillars.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <span className="font-serif italic text-4xl sm:text-5xl text-gray-200 mb-5 sm:mb-6">{item.num}</span>
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-900 mb-3 sm:mb-4">{item.title}</h4>
                <p className="text-xs sm:text-sm text-gray-500 font-serif italic leading-relaxed max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}