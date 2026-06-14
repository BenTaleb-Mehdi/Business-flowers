"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS_CONTENT, ProductItem } from "@/src/data/content";

const CATEGORIES = ["Toutes", ...Array.from(new Set(PRODUCTS_CONTENT.map(p => p.category)))];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Toutes");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
      setCurrentSlide(0);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedProduct]);

  const filteredProducts = activeCategory === "Toutes" 
    ? PRODUCTS_CONTENT 
    : PRODUCTS_CONTENT.filter(p => p.category === activeCategory);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollPosition = sliderRef.current.scrollLeft;
    const slideWidth = sliderRef.current.clientWidth;
    setCurrentSlide(Math.round(scrollPosition / slideWidth));
  };

  const scrollToSlide = (index: number) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollTo({ left: index * sliderRef.current.clientWidth, behavior: "smooth" });
  };

  const nextSlide = () => {
    if (selectedProduct && currentSlide < selectedProduct.images.length - 1) scrollToSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) scrollToSlide(currentSlide - 1);
  };

  const productModal = mounted ? createPortal(
    <div className={`fixed inset-0 z-[99999] bg-white transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${selectedProduct ? "translate-y-0" : "translate-y-full"}`}>
      {selectedProduct && (
        <>
          <button 
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedProduct(null); }}
            className="absolute top-6 right-6 md:top-10 md:right-10 z-[100000] w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-md rounded-full shadow-md border border-gray-100 hover:bg-gray-100 hover:scale-105 transition-all duration-300 group cursor-pointer"
          >
            <svg className="w-5 h-5 text-gray-900 transition-transform duration-300 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col md:flex-row w-full h-full relative z-10">
            <div className="relative w-full md:w-1/2 h-[55vh] md:h-full bg-[#F9F7F6]">
              <div ref={sliderRef} onScroll={handleScroll} className="flex w-full h-full overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth relative z-0">
                {selectedProduct.images.map((img, idx) => (
                  <div key={idx} className="relative min-w-full h-full snap-center flex-shrink-0">
                    <Image src={img} alt={`${selectedProduct.title} - View ${idx + 1}`} fill className="object-cover sm:object-contain p-0 sm:p-16" />
                  </div>
                ))}
              </div>

              {selectedProduct.images.length > 1 && (
                <>
                  <button onClick={prevSlide} disabled={currentSlide === 0} className={`absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/70 backdrop-blur-md rounded-full border border-gray-200 transition-all duration-300 shadow-sm ${currentSlide === 0 ? "opacity-0 pointer-events-none" : "opacity-100 hover:bg-white hover:scale-105"}`}>
                    <svg className="w-4 h-4 text-gray-900 ml-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button onClick={nextSlide} disabled={currentSlide === selectedProduct.images.length - 1} className={`absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/70 backdrop-blur-md rounded-full border border-gray-200 transition-all duration-300 shadow-sm ${currentSlide === selectedProduct.images.length - 1 ? "opacity-0 pointer-events-none" : "opacity-100 hover:bg-white hover:scale-105"}`}>
                    <svg className="w-4 h-4 text-gray-900 mr-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" /></svg>
                  </button>
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-white/60 backdrop-blur-md px-3 py-2 rounded-full border border-gray-200 shadow-sm">
                    {selectedProduct.images.map((_, idx) => (
                      <button key={idx} onClick={() => scrollToSlide(idx)} className={`transition-all duration-300 rounded-full ${currentSlide === idx ? "w-4 h-1.5 bg-gray-900" : "w-1.5 h-1.5 bg-gray-400 hover:bg-gray-600"}`} />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="w-full md:w-1/2 h-[45vh] md:h-full overflow-y-auto px-8 py-12 sm:p-16 lg:p-24 flex flex-col bg-white">
              <div className="max-w-md mx-auto md:mx-0 my-auto pb-12 md:pb-0">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400 mb-5 block">{selectedProduct.subtitle}</span>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-[1.1] mb-8">{selectedProduct.title}</h2>
                <div className="w-8 h-[1px] bg-gray-300 mb-8" />
                <p className="text-[15px] text-gray-500 leading-relaxed font-serif italic mb-12">{selectedProduct.description}</p>
                <h4 className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-900 mb-6">Caractéristiques</h4>
                <ul className="space-y-4 mb-14">
                  {selectedProduct.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-500 tracking-wider">
                      <span className="mr-4 text-[#6A4C4C] mt-1.5"><div className="w-1.5 h-1.5 rounded-none bg-[#6A4C4C]" /></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/#order" onClick={() => setSelectedProduct(null)} className="inline-flex items-center justify-center px-12 py-5 text-[10px] font-bold tracking-[0.25em] uppercase bg-[#6A4C4C] text-white hover:bg-gray-900 transition-colors duration-500 w-full sm:w-auto cursor-pointer">
                  Commander ce modèle
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>,
    document.body
  ) : null;

  return (
    <>
      {/* ---------------- MOBILE FILTER BUTTON ---------------- */}
      <div className="mb-12">
        <button 
          onClick={() => setIsMobileFilterOpen(true)}
          className="lg:hidden flex items-center justify-between border-b border-gray-200 pb-4 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-900 w-full"
        >
          <span>Filtrer par catégorie</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
        </button>
      </div>

      {/* ---------------- LAYOUT: STICKY SIDEBAR + GRID ---------------- */}
      <div className="flex flex-col lg:flex-row gap-12 xl:gap-24 relative items-start">
        
        {/* SIDEBAR (Sticky on Desktop) */}
        <aside className={`fixed inset-y-0 left-0 z-50 w-[85vw] max-w-[350px] bg-[#F9F7F6] p-8 lg:p-0 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] lg:sticky lg:top-32 lg:translate-x-0 lg:w-48 lg:bg-transparent lg:z-0 lg:flex-shrink-0 h-fit ${isMobileFilterOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full lg:shadow-none"}`}>
          <button onClick={() => setIsMobileFilterOpen(false)} className="lg:hidden absolute top-6 right-6 w-8 h-8 flex flex-col items-center justify-center group">
            <span className="w-5 h-[1.5px] bg-gray-900 rotate-45 translate-y-[0.75px]" />
            <span className="w-5 h-[1.5px] bg-gray-900 -rotate-45 -translate-y-[0.75px]" />
          </button>

          <div className="space-y-10 pt-10 lg:pt-0">
            <div>
              <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-900 mb-6">Catégories</h3>
              <ul className="space-y-4">
                {CATEGORIES.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => { setActiveCategory(category); setIsMobileFilterOpen(false); }}
                      className={`text-xs tracking-wider transition-all duration-300 ${activeCategory === category ? "text-[#6A4C4C] font-bold translate-x-2" : "text-gray-500 hover:text-gray-900 hover:translate-x-1"}`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-8 h-[1px] bg-gray-200 hidden lg:block" />
            <div>
              <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-900 mb-6">Trier par</h3>
              <ul className="space-y-4">
                <li><button className="text-xs tracking-wider text-gray-500 hover:text-gray-900 transition-colors">Nouveautés</button></li>
                <li><button className="text-xs tracking-wider text-gray-500 hover:text-gray-900 transition-colors">Prix croissant</button></li>
                <li><button className="text-xs tracking-wider text-gray-500 hover:text-gray-900 transition-colors">Prix décroissant</button></li>
              </ul>
            </div>
          </div>
        </aside>

        {isMobileFilterOpen && <div className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsMobileFilterOpen(false)} />}

        {/* PRODUCT GRID */}
        <div className="flex-1 w-full">
          <div className="mb-8 hidden lg:block">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
              {filteredProducts.length} Résultat(s)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="group flex flex-col cursor-pointer border border-transparent hover:border-gray-100 transition-colors pb-6"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative w-full aspect-[4/5] bg-[#F9F7F6] overflow-hidden mb-6">
                  <Image src={product.images[0]} alt={product.title} fill className="object-cover sm:object-contain p-8 transition-transform duration-[2s] ease-out group-hover:scale-105" />
                  <div className="absolute bottom-0 left-0 w-full h-12 bg-[#6A4C4C] flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
                    <span className="text-[9px] tracking-[0.2em] text-white uppercase font-bold">Voir les détails</span>
                  </div>
                </div>
                <div className="flex flex-col px-4 text-center sm:text-left">
                  <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-500 font-serif italic">€ {product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-32 flex flex-col items-center justify-center text-center">
              <p className="font-serif italic text-2xl text-gray-400 mb-4">Aucune création trouvée.</p>
              <button onClick={() => setActiveCategory("Toutes")} className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6A4C4C] border-b border-[#6A4C4C] pb-1">
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </div>

      {productModal}

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </>
  );
}