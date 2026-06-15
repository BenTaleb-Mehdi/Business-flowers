"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/components/LanguageProvider";
import { HERO_CONTENT, BRAND_NAME } from "@/src/data/content";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-100px)] flex items-end bg-black overflow-hidden">

      {/* ── FULL-BLEED BACKGROUND IMAGE ─────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_CONTENT.imagePath}
          alt={HERO_CONTENT.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02] transition-transform duration-[8s] ease-out"
          style={{ animationName: "kenburns" }}
        />

        {/* Cinematic gradient overlay — bottom-heavy */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

        {/* Subtle left vignette to ground the text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
      </div>

      {/* ── FOREGROUND CONTENT ──────────────────────────── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-16 pb-16 lg:pb-24 pt-32">

        {/* Top-left brand tag (positioned absolute from section) */}
        <div className="absolute top-10 left-6 lg:left-16 flex items-center gap-3">
          <div className="h-[1px] w-8 bg-white/40" />
          <span className="text-[9px] uppercase tracking-[0.35em] text-white/60 font-bold">
            {t.hero.eyebrow || BRAND_NAME}
          </span>
        </div>

        {/* Cities — top right */}
        <div className="absolute top-10 right-6 lg:right-16 hidden sm:flex items-center gap-6 text-[9px] tracking-[0.2em] uppercase text-white/40 font-bold">
          <span>{t.hero.city1 || "Tanger"}</span>
          <span className="text-white/20">·</span>
          <span>{t.hero.city2 || "Tétouan"}</span>
          <span className="text-white/20">·</span>
          <span>{t.hero.city3 || "Maroc"}</span>
        </div>

        {/* Main text block */}
        <div className="max-w-3xl">

          {/* Title */}
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-[6rem] xl:text-[7rem] text-white leading-[1.0] tracking-tight mb-6">
            {HERO_CONTENT.title}
          </h1>

          {/* Divider line */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#C8966C]" />
            <div className="h-[1px] flex-1 max-w-[60px] bg-white/10" />
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-white/60 leading-relaxed font-serif italic max-w-sm mb-10">
            {t.hero.subtitle}
          </p>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="#order"
              className="inline-block px-10 py-4 text-[10px] font-bold tracking-[0.25em] uppercase bg-white text-black hover:bg-[#C8966C] hover:text-white transition-colors duration-500 shadow-lg shadow-black/30"
            >
              {t.hero.ctaPrimary}
            </Link>
            <Link
              href="#collection"
              className="inline-block px-10 py-4 text-[10px] font-bold tracking-[0.25em] uppercase border border-white/30 text-white/80 hover:border-white hover:text-white transition-all duration-500"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>

        {/* Rotating Badge — bottom right */}
        <div
          aria-hidden="true"
          className="absolute bottom-16 right-6 lg:right-16 w-24 h-24 lg:w-28 lg:h-28 animate-[spin_12s_linear_infinite] pointer-events-none"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-white/70">
            <defs>
              <path id="circlePath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
            </defs>
            <text fontSize="10.5" fontWeight="bold" letterSpacing="0.15em" fill="currentColor" className="uppercase font-sans">
              <textPath href="#circlePath" startOffset="0%">
                {BRAND_NAME} • LUXURY COLLECTION •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-[#C8966C] rounded-full" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-[1px] h-10 bg-white animate-[pulse_2s_ease-in-out_infinite]" />
        </div>

      </div>
    </section>
  );
}