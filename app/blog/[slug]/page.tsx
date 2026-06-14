"use client";

import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useLanguage } from "@/app/components/LanguageProvider";
import { getArticleBySlug, getRelatedArticles } from "@/src/data/blogArticles";
import type { Language } from "@/src/data/translations";

function HeroImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);
  if (hasError) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-[#F2EAE8] via-[#E8DEDA] to-[#D4C8C3]" />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      className="object-cover"
      onError={() => setHasError(true)}
    />
  );
}

function RelatedImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);
  if (hasError) {
    return <div className="absolute inset-0 bg-gradient-to-br from-[#F9F0EE] to-[#E8DEDA]" />;
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

export default function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { t, lang } = useLanguage();
  const l = lang as Language;

  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug);
  const sections = article.sections[l];

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO BANNER ─────────────────────────────────────── */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] bg-[#F2EAE8] overflow-hidden">
        <HeroImage src={article.image} alt={article.title[l]} />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Hero Text */}
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-12 pb-10 sm:pb-14 max-w-[1400px] mx-auto">
          <span className="inline-block mb-4 px-3 py-1 text-[8px] font-bold tracking-[0.25em] uppercase bg-white/20 backdrop-blur-sm text-white border border-white/30">
            {article.category[l]}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl">
            {article.title[l]}
          </h1>
        </div>
      </div>

      {/* ── ARTICLE BODY ────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Breadcrumb + Meta Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-8 sm:py-10 border-b border-gray-100">
          <div className="flex items-center gap-3 text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              {t.blog.breadcrumbHome}
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-900 transition-colors">
              {t.blog.breadcrumbCurrent}
            </Link>
            <span>/</span>
            <span className="text-gray-900 truncate max-w-[180px] sm:max-w-none">
              {article.title[l]}
            </span>
          </div>

          <div className="flex items-center gap-6 text-[9px] tracking-[0.15em] uppercase text-gray-400 font-bold">
            <span>{article.date[l]}</span>
            <span className="w-[1px] h-3 bg-gray-200 hidden sm:block" />
            <span>{article.readTime} {t.blog.minRead}</span>
            <span className="w-[1px] h-3 bg-gray-200 hidden sm:block" />
            <span>{t.blog.by} {article.author}</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-14 sm:py-20">

          {/* Intro / Sidebar (sticky on desktop) */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-32">
              <span className="block text-[9px] font-bold tracking-[0.25em] uppercase text-[#6A4C4C] mb-6">
                {article.category[l]}
              </span>
              <div className="w-8 h-[1px] bg-gray-200 mb-8" />
              <p className="font-serif italic text-base sm:text-lg text-gray-600 leading-relaxed">
                {article.intro[l]}
              </p>

              {/* Back link */}
              <Link
                href="/blog"
                className="mt-10 inline-flex items-center gap-2 text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-gray-900 transition-colors"
              >
                {t.blog.backToBlog}
              </Link>
            </div>
          </aside>

          {/* Article Sections */}
          <article className="lg:col-span-8 xl:col-span-9 space-y-12 sm:space-y-16">
            {sections.map((section, i) => (
              <section key={i} className="border-t border-gray-100 pt-10 sm:pt-12 first:border-t-0 first:pt-0">
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 leading-snug mb-6">
                  {section.heading}
                </h2>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-serif italic">
                  {section.body}
                </p>
              </section>
            ))}
          </article>

        </div>

        {/* ── RELATED ARTICLES ─────────────────────────────── */}
        {related.length > 0 && (
          <div className="border-t border-gray-100 pt-16 sm:pt-20 pb-20 sm:pb-28">
            <div className="flex items-center gap-6 mb-12">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-900">
                {t.blog.relatedTitle}
              </span>
              <div className="flex-1 h-[1px] bg-gray-100" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="group flex flex-col"
                >
                  <div className="relative w-full aspect-[16/9] bg-[#F9F7F6] overflow-hidden mb-5">
                    <RelatedImage src={rel.image} alt={rel.title[l]} />
                  </div>
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#6A4C4C] mb-3">
                    {rel.category[l]}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-gray-900 leading-snug group-hover:text-[#6A4C4C] transition-colors">
                    {rel.title[l]}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
