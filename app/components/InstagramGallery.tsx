"use client";

import Image from "next/image";
import { INSTAGRAM_URL } from "@/src/data/content";

export default function InstagramGallery() {
  // Remplacez ces images par vos vraies photos Instagram
  const instaPosts = [
    "/images/products/Henna/image1.jpeg",
    "/images/products/Chocolats/image3.jpeg",
    "/images/products/Dragées/image2.jpeg",
    "/images/products/Accessoires/image7.jpeg",
  ];

  return (
<section className="py-20 sm:py-32 bg-transparent relative z-10 overflow-hidden">      {/* Header Instagram */}
      <div className="py-16 sm:py-20 text-center">
        <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-gray-400 mb-4 block">
          Rejoignez l'univers
        </span>
        <a 
          href={INSTAGRAM_URL}// Remplacez par votre lien
          target="_blank" 
          rel="noopener noreferrer"
          className="font-serif text-2xl sm:text-3xl text-gray-900 hover:text-[#6A4C4C] transition-colors duration-300"
        >
          @handtouch_official
        </a>
      </div>

      {/* Grille d'images sans espace (Full bleed) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 w-full">
        {instaPosts.map((post, idx) => (
          <a 
            key={idx} 
          href={INSTAGRAM_URL}
            target="_blank" 
            rel="noopener noreferrer"
            className="relative w-full aspect-square group overflow-hidden bg-[#F9F7F6]"
          >
            <Image
              src={post}
              alt={`Instagram post ${idx + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay sombre au survol avec icône Insta */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}