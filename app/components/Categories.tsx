"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/components/LanguageProvider";
import { HAND_TOUCH_PRODUCTS } from "@/src/data/prestigeProducts";
import type { Language } from "@/src/data/translations";

function CategoryImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return <div className="absolute inset-0 bg-gradient-to-br from-[#F2EAE8] to-[#E8DEDA]" />;
  }
  
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
      className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
      onError={() => setHasError(true)}
    />
  );
}

export default function Categories() {
  const { t, lang } = useLanguage();
  const l = lang as Language;

  const dynamicCategories = useMemo(() => {
    const uniqueCats = new Map();

    HAND_TOUCH_PRODUCTS.forEach((product) => {
      const catNameFr = product.category.fr;
      if (!uniqueCats.has(catNameFr)) {
        // On crée un ID propre pour l'URL (ex: "Sets Cadeaux" devient "sets-cadeaux")
        const catId = catNameFr.toLowerCase().replace(/\s+/g, '-');
        
        uniqueCats.set(catNameFr, {
          id: catId,
          title: product.category,
          image: product.images[0],
          // MODIFICATION ICI : On ajoute la catégorie dans le lien URL
          link: `/products?category=${catId}`,
        });
      }
    });

    return Array.from(uniqueCats.values());
  }, []);

  return (
<section className="py-20 sm:py-32 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-12">
        
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-gray-400 mb-4">
            L'Univers Hand Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 leading-tight">
            Savoir-Faire & Créations
          </h2>
          <div className="w-8 h-[1px] bg-gray-300 mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
          {dynamicCategories.map((cat) => (
            <Link 
              key={cat.id} 
              href={cat.link}
              className="group relative w-full aspect-[4/5] overflow-hidden bg-[#F9F7F6] block cursor-pointer"
            >
              <CategoryImage src={cat.image} alt={cat.title[l]} />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 flex items-end justify-between gap-2">
                <h3 className="font-serif text-sm sm:text-base text-white leading-snug">
                  {cat.title[l]}
                </h3>
                
                <div className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30 transition-transform duration-500 group-hover:bg-white group-hover:text-gray-900">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-500 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}