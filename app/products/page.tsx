"use client";

import Link from "next/link";
import Products from "@/app/components/Products";
import { useLanguage } from "@/app/components/LanguageProvider";

export default function ProductsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white pt-40 pb-24 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* PAGE HEADER */}
        <div className="mb-16">
          <div className="flex items-center gap-3 text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              {t.nav.home}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{t.nav.boutique}</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-gray-900 leading-tight">
            {t.nav.boutique}
          </h1>
        </div>

        {/* IMPORTED COMPONENT */}
        <Products />
      </div>
    </div>
  );
}