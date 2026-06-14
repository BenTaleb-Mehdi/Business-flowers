"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/components/LanguageProvider";
import { HERO_CONTENT, BRAND_NAME } from "@/src/data/content";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-100px)] flex items-center justify-center bg-white overflow-hidden pt-28 pb-16 lg:pt-28 lg:pb-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full z-10">
        
        {/* CHANGEMENT ICI : flex-col au lieu de flex-col-reverse pour avoir le texte en haut sur mobile */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── TEXT SECTION ────────────────────────────────── */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left mb-6 lg:mb-0">
            
            {/* Eyebrow avec ligne verticale */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="h-[1px] w-8 sm:w-12 bg-gray-900 hidden lg:block" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-900">
                {t.hero.eyebrow || BRAND_NAME}
              </span>
            </div>

            {/* Titre majestueux */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[5rem] xl:text-[5.5rem] text-gray-900 leading-[1.05] tracking-tight mb-6">
              {HERO_CONTENT.title}
            </h1>

            {/* Sous-titre */}
            <p className="text-sm sm:text-[15px] text-gray-500 leading-relaxed font-serif italic max-w-md mx-auto lg:mx-0 mb-10">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="#order"
                className="w-full sm:w-auto text-center px-10 py-4 text-[10px] font-bold tracking-[0.25em] uppercase bg-[#1A1A1A] text-white hover:bg-[#6A4C4C] transition-colors duration-500 shadow-lg shadow-black/5"
              >
                {t.hero.ctaPrimary}
              </Link>
              <Link
                href="#collection"
                className="w-full sm:w-auto text-center px-10 py-4 text-[10px] font-bold tracking-[0.25em] uppercase border border-gray-200 text-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-500"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>

            {/* Cities / Villes */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 pt-12 sm:pt-16 text-[9px] tracking-[0.2em] uppercase text-gray-400 font-bold hidden sm:flex">
              <span className="hover:text-gray-900 transition-colors cursor-default">{t.hero.city1 || "Tanger"}</span>
              <span className="hover:text-gray-900 transition-colors cursor-default">{t.hero.city2 || "Tétouan"}</span>
              <span className="hover:text-gray-900 transition-colors cursor-default">{t.hero.city3 || "Maroc"}</span>
            </div>
          </div>

          {/* ── IMAGE SECTION (AJUSTÉE POUR L'ÉCRAN MOBILE) ───────────────────────────────── */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end group mt-4 lg:mt-0">
            
            {/* Le conteneur principal de l'image */}
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[420px] xl:max-w-[460px] aspect-[4/5] mx-auto lg:mr-8 z-10">
              
              {/* Effet d'ombre/bloc décalé */}
              <div className="absolute top-4 sm:top-8 -right-3 sm:-right-6 w-full h-full bg-[#F9F7F6] z-0 transition-transform duration-700 ease-out group-hover:translate-x-2 group-hover:-translate-y-2" />
              
              {/* Image en plein format (Full Bleed) */}
              <div className="relative w-full h-full z-10 overflow-hidden shadow-2xl shadow-black/5">
                <Image
                  src={HERO_CONTENT.imagePath}
                  alt={HERO_CONTENT.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                />
              </div>

              {/* Badge Rotatif - REDUIT SUR MOBILE (-left-4 au lieu de -left-8, w-20 au lieu de w-24) */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 lg:-bottom-10 lg:-left-10 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 animate-[spin_12s_linear_infinite] z-20 bg-white rounded-full p-1.5 sm:p-2 shadow-xl flex items-center justify-center pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full text-gray-900">
                  <defs>
                    <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                  </defs>
                  <text fontSize="10.5" fontWeight="bold" letterSpacing="0.15em" className="uppercase font-sans">
                    <textPath href="#circlePath" startOffset="0%">
                      {BRAND_NAME} • LUXURY COLLECTION • 
                    </textPath>
                  </text>
                </svg>
                {/* Petit point central du badge */}
                <div className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-2.5 lg:h-2.5 bg-[#6A4C4C] rounded-full" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}