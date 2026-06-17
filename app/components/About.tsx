"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/app/components/LanguageProvider";
import { ABOUT_CONTENT } from "@/src/data/content";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <main className="relative min-h-screen">
      
      {/* ── BACKGROUND FIXE (Zewa9a Royal & Glows) ── */}
      <div className="fixed inset-0 w-screen h-screen bg-[#FCFAF8] pointer-events-none z-[-1] overflow-hidden">
        
        {/* Cadre Haute Couture */}
        <div className="absolute top-2 left-2 right-2 bottom-2 md:top-4 md:left-4 md:right-4 md:bottom-4 border border-[#6A4C4C] opacity-[0.15] md:opacity-[0.20]" />
        <div className="absolute top-4 left-4 right-4 bottom-4 md:top-6 md:left-6 md:right-6 md:bottom-6 border border-[#6A4C4C] opacity-[0.08] md:opacity-[0.12]" />

        {/* Sceau de Luxe - Haut Gauche */}
        <svg 
          className="absolute -top-16 -left-16 w-[250px] h-[250px] opacity-[0.12] md:-top-32 md:-left-32 md:w-[600px] md:h-[600px] text-[#6A4C4C] md:opacity-[0.20] transition-all duration-500" 
          viewBox="0 0 200 200" fill="none" stroke="currentColor" 
        >
          <g transform="translate(100, 100)">
            <circle cx="0" cy="0" r="80" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="72" strokeWidth="0.5" />
            <path d="M 0,-72 C 25,-72 35,-35 72,0 C 35,35 25,72 0,72 C -25,72 -35,35 -72,0 C -35,-35 -25,-72 0,-72 Z" strokeWidth="1.5" />
            <path d="M 0,-55 C 15,-55 20,-20 55,0 C 20,20 15,55 0,55 C -15,55 -20,20 -55,0 C -20,-20 -15,-55 0,-55 Z" transform="rotate(45)" strokeWidth="1" />
            <circle cx="0" cy="0" r="15" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="8" strokeWidth="0.5" />
            <path d="M 0,-8 L 0,8 M -8,0 L 8,0" strokeWidth="0.5" />
          </g>
        </svg>

        {/* Sceau de Luxe - Bas Droite */}
        <svg 
          className="absolute -bottom-20 -right-20 w-[300px] h-[300px] opacity-[0.10] md:-bottom-40 md:-right-40 md:w-[700px] md:h-[700px] text-[#6A4C4C] md:opacity-[0.15] rotate-180 transition-all duration-500" 
          viewBox="0 0 200 200" fill="none" stroke="currentColor" 
        >
          <g transform="translate(100, 100)">
            <circle cx="0" cy="0" r="80" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="72" strokeWidth="0.5" />
            <path d="M 0,-72 C 25,-72 35,-35 72,0 C 35,35 25,72 0,72 C -25,72 -35,35 -72,0 C -35,-35 -25,-72 0,-72 Z" strokeWidth="1.5" />
            <path d="M 0,-55 C 15,-55 20,-20 55,0 C 20,20 15,55 0,55 C -15,55 -20,20 -55,0 C -20,-20 -15,-55 0,-55 Z" transform="rotate(45)" strokeWidth="1" />
            <circle cx="0" cy="0" r="15" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="8" strokeWidth="0.5" />
            <path d="M 0,-8 L 0,8 M -8,0 L 8,0" strokeWidth="0.5" />
          </g>
        </svg>

        {/* Glows (Lumières douces) */}
        <div className="absolute top-[-10vh] left-[-10vw] w-[80vw] md:w-[45vw] h-[80vw] md:h-[45vw] bg-[#E8DEDA] rounded-full blur-[80px] md:blur-[100px] opacity-50" />
        <div className="absolute bottom-[-10vh] right-[-10vw] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] bg-[#F5EBE9] rounded-full blur-[100px] md:blur-[140px] opacity-50" />
      </div>

      {/* ── CONTENU DE LA PAGE (Sans bg-white) ── */}
      <div className="pt-36 sm:pt-40 pb-20 sm:pb-24 relative z-10">
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
            <Image
              src={ABOUT_CONTENT.heroImage}
              alt={ABOUT_CONTENT.heroImageAlt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
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
                <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-[#F2EAE8] to-[#D9CECA]">
                  <Image
                    src={ABOUT_CONTENT.atelierImage}
                    alt={ABOUT_CONTENT.atelierImageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 450px"
                  />
                </div>
                <div className="absolute -left-5 top-1/2 -translate-y-1/2 -rotate-90 hidden lg:block origin-center z-10">
                  <span className="text-[9px] tracking-[0.3em] uppercase text-gray-900 font-bold whitespace-nowrap bg-white px-4 py-2">
                    {a.atelierLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── PHILOSOPHY GRID ─────────────────────────────── */}
          <div className="mt-24 sm:mt-32 pt-16 sm:pt-24 border-t border-gray-200/50">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-900">
                {a.philosophyLabel}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-16 lg:gap-12">
              {a.pillars.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <span className="font-serif italic text-4xl sm:text-5xl text-gray-300 mb-5 sm:mb-6">{item.num}</span>
                  <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-900 mb-3 sm:mb-4">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-500 font-serif italic leading-relaxed max-w-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}