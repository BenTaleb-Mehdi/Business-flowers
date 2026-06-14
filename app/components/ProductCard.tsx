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

  // Vérifier s'il y a une deuxième image pour l'effet au survol
  const hasSecondImage = product.images.length > 1;

  return (
    <div 
      className="group flex flex-col cursor-pointer"
      onClick={onClick}
    >
      {/* 
        CADRE DE L'IMAGE : 
        - aspect-[4/5] garde la même taille (hauteur/largeur) pour toutes les cartes
        - p-0 (pas de padding) pour que l'image prenne tout l'espace
      */}
      <div className="relative w-full aspect-[4/5] bg-[#F9F7F6] overflow-hidden mb-6">
        
        {/* Voile sombre très subtil au survol pour faire ressortir le texte */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700 z-10" />

        {hasError ? (
          <div className="absolute inset-0 bg-[#F9F7F6]" />
        ) : (
          <>
            {/* 
              IMAGE PRINCIPALE : 
              - object-cover permet à l'image de remplir 100% de la boîte
            */}
            <Image
              src={product.images[0]}
              alt={product.title[lang]}
              fill
              className={`object-cover object-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110 ${
                hasSecondImage ? "group-hover:opacity-0" : ""
              }`}
              onError={() => setHasError(true)}
            />

            {/* DEUXIÈME IMAGE (Fondu au survol) */}
            {hasSecondImage && (
              <Image
                src={product.images[1]}
                alt={`${product.title[lang]} - vue 2`}
                fill
                className="object-cover object-center absolute inset-0 opacity-0 transition-all duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:opacity-100 group-hover:scale-110 z-0"
              />
            )}
          </>
        )}

        {/* Bouton "Glassmorphism" au centre */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
          <div className="bg-white/95 backdrop-blur-sm px-6 py-3 text-[9px] sm:text-[10px] tracking-[0.2em] text-gray-900 uppercase font-bold shadow-lg flex items-center gap-2 whitespace-nowrap">
            {viewDetailsText}
          </div>
        </div>
      </div>

      {/* INFORMATIONS DU PRODUIT */}
      <div className="flex flex-col text-left px-1">
        <h3 className="text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase text-gray-900 mb-2 transition-colors duration-300 group-hover:text-[#6A4C4C]">
          {product.title[lang]}
        </h3>
        <p className="text-[13px] sm:text-sm text-gray-500 font-serif italic">
          € {product.price}
        </p>
      </div>
    </div>
  );
}