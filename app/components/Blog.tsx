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
    <div className="min-h-screen bg-white pt-36 sm:pt-40 pb-24 relative z-10">
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