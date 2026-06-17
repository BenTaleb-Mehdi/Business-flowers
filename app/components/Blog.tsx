"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/app/components/LanguageProvider";
import { BLOG_ARTICLES, type BlogArticle } from "@/src/data/blogArticles";
import type { Language } from "@/src/data/translations";

// ── Image with graceful fallback ───────────────────────────
function ArticleImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);
  if (hasError) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9F0EE] via-[#EDE3E1] to-[#D9CECA]" />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105"
      onError={() => setHasError(true)}
    />
  );
}

export default function Blog() {
  const { t, lang } = useLanguage();
  const l = lang as Language;

  return (
    // 1. On remplace la div principale par une balise <main>
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

      {/* ── CONTENU DE LA PAGE (J'ai enlevé bg-white d'ici) ── */}
      <div className="pt-36 sm:pt-40 pb-24 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

          {/* ── PAGE HEADER ─────────────────────────────────── */}
          <div className="mb-16 sm:mb-20 text-center flex flex-col items-center">
            <div className="flex items-center gap-3 text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">
              <Link href="/" className="hover:text-gray-900 transition-colors">
                {t.blog.breadcrumbHome}
              </Link>
              <span>/</span>
              <span className="text-gray-900">{t.blog.breadcrumbCurrent}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-gray-900 leading-tight mb-8">
              {t.blog.journalTitle}
            </h1>
            <div className="w-8 h-[1px] bg-gray-300" />
          </div>

          {/* ── ARTICLES GRID ───────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 gap-y-16 sm:gap-y-20">
            {BLOG_ARTICLES.map((article) => (
              <ArticleCard key={article.id} article={article} lang={l} t={t} />
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}

// ── Article Card ───────────────────────────────────────────
function ArticleCard({
  article,
  lang,
  t,
}: {
  article: BlogArticle;
  lang: Language;
  t: ReturnType<typeof useLanguage>["t"];
}) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col cursor-pointer"
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] bg-[#F9F7F6] overflow-hidden mb-6 sm:mb-8">
        <ArticleImage src={article.image} alt={article.title[lang]} />
        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block px-3 py-1 text-[8px] font-bold tracking-[0.2em] uppercase bg-white/90 backdrop-blur-sm text-[#6A4C4C]">
            {article.category[lang]}
          </span>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400">
          {article.date[lang]}
        </span>
        <span className="text-[9px] text-gray-400 font-serif italic">
          {article.readTime} {t.blog.minRead}
        </span>
      </div>

      {/* Title */}
      <h2 className="font-serif text-xl sm:text-2xl text-gray-900 leading-tight group-hover:text-[#6A4C4C] transition-colors duration-300 mb-4">
        {article.title[lang]}
      </h2>

      {/* Intro snippet */}
      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-serif italic line-clamp-3 mb-5">
        {article.intro[lang]}
      </p>

      {/* Read more */}
      <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-900 group-hover:text-[#6A4C4C] transition-colors duration-300 mt-auto">
        {t.blog.readMore}
      </span>
    </Link>
  );
}