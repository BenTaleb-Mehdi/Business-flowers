"use client";

import { useState } from "react";
import Image from "next/image";
import type { MultilingualProductItem } from "@/src/data/prestigeProducts";
import type { Language } from "@/src/data/translations";

interface ProductCardProps {
  product: MultilingualProductItem;
  lang: Language;
  viewDetailsText: string;
  onClick: () => void;
}

export default function ProductCard({ product, lang, viewDetailsText, onClick }: ProductCardProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div 
      className="flex flex-col cursor-pointer group"
      onClick={onClick}
    >
      {/* ── CADRE DE L'IMAGE ───────────────────────────────────── */}
      {/* overflow-hidden est crucial ici pour que le zoom ne déborde pas */}
      <div className="relative w-full aspect-[4/5] bg-[#F9F7F6] overflow-hidden mb-5 sm:mb-6">
        
        {hasError ? (
          <div className="absolute inset-0 bg-[#F9F7F6]" />
        ) : (
          <Image
            src={product.images[0].startsWith('/') ? product.images[0] : `/${product.images[0]}`}
            alt={product.title[lang]}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // Zoom extrêmement lent et doux (2 secondes)
            className="object-cover object-center transition-transform duration-[2s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
            onError={() => setHasError(true)}
          />
        )}
      </div>

      {/* ── INFORMATIONS DU PRODUIT ────────────────────────────── */}
      <div className="flex flex-col items-center text-center px-2">
        {/* Titre avec transition de couleur */}
        <h3 className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-gray-900 mb-2 sm:mb-3 transition-colors duration-500 group-hover:text-[#6A4C4C]">
          {product.title[lang]}
        </h3>
        
        {/* Prix (Statique) */}
        <p className="text-[13px] sm:text-sm text-gray-500 font-serif italic mb-4 sm:mb-5">
          € {product.price}
        </p>

        {/* Lien "Voir les détails" avec soulignement animé minimaliste */}
        <div className="relative inline-block overflow-hidden pb-1">
          <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-900 transition-colors duration-300">
            {viewDetailsText}
          </span>
          {/* La ligne noire qui se glisse de la gauche vers la droite */}
          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-900 -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
        </div>
      </div>
    </div>
  );
}