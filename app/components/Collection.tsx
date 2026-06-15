"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useLanguage } from "@/app/components/LanguageProvider";
import { HAND_TOUCH_PRODUCTS, type MultilingualProductItem } from "@/src/data/prestigeProducts";
import type { Language } from "@/src/data/translations";
import OrderModal from "./OrderModal"; 
import ProductCard from "./ProductCard";

function ProductImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);
  if (hasError) {
    return <div className="absolute inset-0 bg-gradient-to-br from-[#F9F0EE] to-[#E8DEDA]" />;
  }
  return (
    <Image
      src={src.startsWith('/') ? src : `/${src}`}
      alt={alt}
      fill
      className="object-cover sm:object-contain p-0 sm:p-16"
      onError={() => setHasError(true)}
    />
  );
}

export default function Collection() {
  const { t, lang } = useLanguage();
  const l = lang as Language;

  const [selectedProduct, setSelectedProduct] = useState<MultilingualProductItem | null>(null);
  
  // Modal & Slider States
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Localization strings
  const localStrings = {
    fr: {
      viewDetails: "Voir les détails",
      orderModel: "Commander ce modèle",
      featuresLabel: "Caractéristiques",
    },
    en: {
      viewDetails: "View details",
      orderModel: "Order this model",
      featuresLabel: "Features",
    },
    es: {
      viewDetails: "Ver detalles",
      orderModel: "Pedir este modelo",
      featuresLabel: "Características",
    },
    ar: {
      viewDetails: "عرض التفاصيل",
      orderModel: "طلب هذا الموديل",
      featuresLabel: "المميزات",
    },
  };

  const currentStrings = localStrings[l] || localStrings.fr;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedProduct || isOrderModalOpen) {
      document.body.style.overflow = "hidden";
      if (!isOrderModalOpen) setCurrentSlide(0);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProduct, isOrderModalOpen]);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollPosition = sliderRef.current.scrollLeft;
    const slideWidth = sliderRef.current.clientWidth;
    setCurrentSlide(Math.round(scrollPosition / slideWidth));
  };

  const scrollToSlide = (index: number) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollTo({
      left: index * sliderRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const nextSlide = () => {
    if (selectedProduct && currentSlide < selectedProduct.images.length - 1)
      scrollToSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) scrollToSlide(currentSlide - 1);
  };

  // --- 1. PRODUCT DETAILS MODAL ---
  const productModal = mounted
    ? createPortal(
        <div
          className={`fixed inset-0 z-[99998] bg-white transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
            selectedProduct ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {selectedProduct && (
            <>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedProduct(null);
                }}
                className="absolute top-6 right-6 md:top-10 md:right-10 z-[100000] w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-md rounded-full shadow-md border border-gray-100 hover:bg-gray-100 hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <svg className="w-5 h-5 text-gray-900 transition-transform duration-300 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col md:flex-row w-full h-full relative z-10">
                <div className="relative w-full md:w-1/2 h-[55vh] md:h-full bg-[#F9F7F6]">
                  <div
                    ref={sliderRef}
                    onScroll={handleScroll}
                    className="flex w-full h-full overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth relative z-0"
                  >
                    {selectedProduct.images.map((img, idx) => (
                      <div key={idx} className="relative min-w-full h-full snap-center flex-shrink-0">
                        <ProductImage src={img} alt={`${selectedProduct.title[l]} - View ${idx + 1}`} />
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
                    <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400 mb-5 block">
                      {selectedProduct.subtitle[l]}
                    </span>
                    <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-[1.1] mb-8">
                      {selectedProduct.title[l]}
                    </h2>
                    <div className="w-8 h-[1px] bg-gray-300 mb-8" />
                    <p className="text-[15px] text-gray-500 leading-relaxed font-serif italic mb-12">
                      {selectedProduct.description[l]}
                    </p>
                    <h4 className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-900 mb-6 font-sans">
                      {currentStrings.featuresLabel}
                    </h4>
                    <ul className="space-y-4 mb-14">
                      {selectedProduct.features[l].map((feature, idx) => (
                        <li key={idx} className="flex items-start text-xs text-gray-500 tracking-wider">
                          <span className="mr-4 text-[#6A4C4C] mt-1.5">
                            <div className="w-1.5 h-1.5 rounded-none bg-[#6A4C4C]" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => setIsOrderModalOpen(true)}
                      className="inline-flex items-center justify-center px-12 py-5 text-[10px] font-bold tracking-[0.25em] uppercase bg-[#1A1A1A] text-white hover:bg-[#6A4C4C] transition-colors duration-500 w-full sm:w-auto cursor-pointer"
                    >
                      {currentStrings.orderModel}
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>,
        document.body
      )
    : null;

  // Render only the top 3 products for the Home Page preview
  const homeProducts = HAND_TOUCH_PRODUCTS.slice(0, 3);

  return (
    <section id="collection" className="py-24 sm:py-32 bg-[#FAFAFA] relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* ---------------- SECTION HEADER ---------------- */}
        {/* CHANGEMENT ICI : items-start sur mobile, md:items-end sur desktop */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6 md:gap-8">
          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-900 leading-loose">
              Les Collections<br className="hidden sm:block" /> De Prestige
            </h2>
            <div className="w-6 h-[2px] bg-gray-300 mt-4" />
          </div>
          <p className="text-sm text-gray-500 max-w-md leading-relaxed font-serif italic text-left">
            Découvrez nos assortiments haut de gamme entièrement personnalisés pour sublimer votre réception.
          </p>
        </div>

        {/* ---------------- 3-COLUMN GRID (Home Page Preview) ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeProducts.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              lang={l}
              viewDetailsText={currentStrings.viewDetails}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>

      </div>

      {/* RENDER MODALS */}
      {productModal}
      
      {/* Composant de commande partagé */}
      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
        product={selectedProduct} 
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />
    </section>
  );
}