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
      sizes="100vw"
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
      sizes="(max-width: 640px) 100vw, 50vw"
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
      {/* h-[60vh] par défaut sur mobile pour que l'image et le titre respirent */}
      <div className="relative w-full h-[60vh] sm:h-[65vh] md:h-[75vh] bg-[#F2EAE8] overflow-hidden">
        <HeroImage src={article.image} alt={article.title[l]} />
        {/* Voile dégradé plus prononcé sur mobile pour maximiser le contraste du titre blanc */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Hero Text */}
        <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-8 lg:px-12 pb-8 sm:pb-14 max-w-[1400px] mx-auto">
          <span className="inline-block mb-3 sm:mb-4 px-2.5 py-1 text-[8px] sm:text-[9px] font-bold tracking-[0.25em] uppercase bg-white/20 backdrop-blur-md text-white border border-white/30">
            {article.category[l]}
          </span>
          {/* Taille responsive adaptée (text-2xl sur petit mobile, grimpe jusqu'à text-6xl) */}
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight md:leading-tight max-w-4xl tracking-tight">
            {article.title[l]}
          </h1>
        </div>
      </div>

      {/* ── ARTICLE BODY ────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* Breadcrumb + Meta Bar */}
        {/* flex-wrap permet aux éléments de passer à la ligne proprement sur les écrans étroits */}
        <div className="flex flex-col gap-4 py-6 sm:py-10 border-b border-gray-100">
          
          {/* Fil d'ariane (Breadcrumb) */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400">
            <Link href="/" className="hover:text-gray-900 transition-colors whitespace-nowrap">
              {t.blog.breadcrumbHome}
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-900 transition-colors whitespace-nowrap">
              {t.blog.breadcrumbCurrent}
            </Link>
            <span>/</span>
            {/* Limitation de la casse du titre sur mobile pour éviter les débordements */}
            <span className="text-gray-900 max-w-[150px] sm:max-w-none truncate">
              {article.title[l]}
            </span>
          </div>

          {/* Bar des détails de publication */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] tracking-[0.15em] uppercase text-gray-400 font-bold">
            <span className="whitespace-nowrap">{article.date[l]}</span>
            <span className="w-[1px] h-3 bg-gray-200" />
            <span className="whitespace-nowrap">{article.readTime} {t.blog.minRead}</span>
            <span className="w-[1px] h-3 bg-gray-200" />
            <span className="whitespace-nowrap">{t.blog.by} {article.author}</span>
          </div>
        </div>

        {/* Content Grid */}
        {/* Changement d'espacement py-10 sur mobile vs py-20 sur PC */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 py-10 sm:py-20">

          {/* Intro / Sidebar */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-32">
              <span className="block text-[9px] font-bold tracking-[0.25em] uppercase text-[#6A4C4C] mb-4 lg:mb-6">
                {article.category[l]}
              </span>
              <div className="w-8 h-[1px] bg-gray-200 mb-6 lg:mb-8" />
              <p className="font-serif italic text-base sm:text-lg text-gray-700 leading-relaxed">
                {article.intro[l]}
              </p>

              {/* Back link */}
              <Link
                href="/blog"
                className="mt-6 lg:mt-10 inline-flex items-center gap-2 text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-gray-900 transition-colors group"
              >
                <svg className="w-3 h-3 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                {t.blog.backToBlog}
              </Link>
            </div>
          </aside>

          {/* Article Content Sections */}
          {/* Correction : Changement du texte de "italic text-gray-500" vers "normal text-gray-600" pour un grand confort de lecture sur smartphone */}
          <article className="lg:col-span-8 xl:col-span-9 space-y-10 sm:space-y-16">
            {sections.map((section, i) => (
              <section key={i} className="border-t border-gray-100 pt-8 sm:pt-12 first:border-t-0 first:pt-0">
                <h2 className="font-serif text-xl sm:text-3xl text-gray-900 leading-snug mb-4 sm:mb-6">
                  {section.heading}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-serif">
                  {section.body}
                </p>
              </section>
            ))}
          </article>

        </div>

        {/* ── RELATED ARTICLES ─────────────────────────────── */}
        {related.length > 0 && (
          <div className="border-t border-gray-100 pt-12 sm:pt-20 pb-16 sm:pb-28">
            <div className="flex items-center gap-4 mb-10 sm:mb-12">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-900 whitespace-nowrap">
                {t.blog.relatedTitle}
              </span>
              <div className="flex-1 h-[1px] bg-gray-100" />
            </div>

            {/* Grille d'articles liés passe de 1 colonne sur mobile à 2 colonnes dès l'écran 'sm' */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="group flex flex-col"
                >
                  {/* aspect-video (16/9) pour conserver des vignettes homogènes et parfaites partout */}
                  <div className="relative w-full aspect-video bg-[#F9F7F6] overflow-hidden mb-4 sm:mb-5">
                    <RelatedImage src={rel.image} alt={rel.title[l]} />
                  </div>
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#6A4C4C] mb-2 sm:mb-3">
                    {rel.category[l]}
                  </span>
                  <h3 className="font-serif text-lg sm:text-2xl text-gray-900 leading-snug group-hover:text-[#6A4C4C] transition-colors">
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