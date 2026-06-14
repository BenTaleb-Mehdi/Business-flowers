"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { PRODUCTS_CONTENT, ProductItem } from "@/src/data/content";

export default function Collection() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Mount check for React Portal to avoid Next.js hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scrolling when modal is open & reset slider
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
      setCurrentSlide(0);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedProduct]);

  // Handle native scroll/swipe to update the active dot indicator
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollPosition = sliderRef.current.scrollLeft;
    const slideWidth = sliderRef.current.clientWidth;
    const newSlide = Math.round(scrollPosition / slideWidth);
    setCurrentSlide(newSlide);
  };

  // Scroll to a specific slide index
  const scrollToSlide = (index: number) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollTo({
      left: index * sliderRef.current.clientWidth,
      behavior: "smooth"
    });
  };

  // Handlers for the Left/Right arrow buttons
  const nextSlide = () => {
    if (selectedProduct && currentSlide < selectedProduct.images.length - 1) {
      scrollToSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      scrollToSlide(currentSlide - 1);
    }
  };

  // The Fullscreen Modal (Extracted to use with Portal)
  const productModal = mounted ? createPortal(
    <div 
      className={`fixed inset-0 z-[99999] bg-white transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        selectedProduct ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {selectedProduct && (
        <>
          {/* Close Button (Absolute, highest z-index) */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setSelectedProduct(null);
            }}
            aria-label="Fermer"
            className="absolute top-6 right-6 md:top-10 md:right-10 z-[100000] w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-md rounded-full shadow-md border border-gray-100 hover:bg-gray-100 hover:scale-105 transition-all duration-300 group cursor-pointer"
          >
            <svg className="w-5 h-5 text-gray-900 transition-transform duration-300 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Inner Wrapper for Layout */}
          <div className="flex flex-col md:flex-row w-full h-full relative z-10">
            
            {/* Left Side: Horizontal Swipeable Image Slider */}
            <div className="relative w-full md:w-1/2 h-[55vh] md:h-full bg-[#F9F7F6]">
              <div 
                ref={sliderRef}
                onScroll={handleScroll}
                className="flex w-full h-full overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth relative z-0"
              >
                {selectedProduct.images.map((img, idx) => (
                  <div key={idx} className="relative min-w-full h-full snap-center flex-shrink-0">
                    <Image
                      src={img}
                      alt={`${selectedProduct.title} - View ${idx + 1}`}
                      fill
                      className="object-cover sm:object-contain p-0 sm:p-16"
                    />
                  </div>
                ))}
              </div>

              {/* Slider Navigation Buttons */}
              {selectedProduct.images.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    aria-label="Image précédente"
                    className={`absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/70 backdrop-blur-md rounded-full border border-gray-200 transition-all duration-300 shadow-sm ${
                      currentSlide === 0 ? "opacity-0 pointer-events-none" : "opacity-100 hover:bg-white hover:scale-105"
                    }`}
                  >
                    <svg className="w-4 h-4 text-gray-900 ml-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={nextSlide}
                    disabled={currentSlide === selectedProduct.images.length - 1}
                    aria-label="Image suivante"
                    className={`absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/70 backdrop-blur-md rounded-full border border-gray-200 transition-all duration-300 shadow-sm ${
                      currentSlide === selectedProduct.images.length - 1 ? "opacity-0 pointer-events-none" : "opacity-100 hover:bg-white hover:scale-105"
                    }`}
                  >
                    <svg className="w-4 h-4 text-gray-900 mr-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-white/60 backdrop-blur-md px-3 py-2 rounded-full border border-gray-200 shadow-sm">
                    {selectedProduct.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => scrollToSlide(idx)}
                        aria-label={`Aller à l'image ${idx + 1}`}
                        className={`transition-all duration-300 rounded-full ${
                          currentSlide === idx 
                            ? "w-4 h-1.5 bg-gray-900" 
                            : "w-1.5 h-1.5 bg-gray-400 hover:bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Right Side: Scrollable Details */}
            <div className="w-full md:w-1/2 h-[45vh] md:h-full overflow-y-auto px-8 py-12 sm:p-16 lg:p-24 flex flex-col bg-white">
              <div className="max-w-md mx-auto md:mx-0 my-auto pb-12 md:pb-0">
                
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400 mb-5 block">
                  {selectedProduct.subtitle}
                </span>
                
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-[1.1] mb-8">
                  {selectedProduct.title}
                </h2>
                
                <div className="w-8 h-[1px] bg-gray-300 mb-8" />
                
                <p className="text-[15px] text-gray-500 leading-relaxed font-serif italic mb-12">
                  {selectedProduct.description}
                </p>

                <h4 className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-900 mb-6">
                  Caractéristiques
                </h4>
                
                <ul className="space-y-4 mb-14">
                  {selectedProduct.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-500 tracking-wider">
                      <span className="mr-4 text-[#6A4C4C] mt-1.5">
                        <div className="w-1.5 h-1.5 rounded-none bg-[#6A4C4C]" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#order"
                  onClick={() => setSelectedProduct(null)}
                  className="inline-flex items-center justify-center px-12 py-5 text-[10px] font-bold tracking-[0.25em] uppercase bg-[#6A4C4C] text-white hover:bg-gray-900 transition-colors duration-500 w-full sm:w-auto cursor-pointer"
                >
                  Commander ce modèle
                </a>
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
      <section id="collection" className="py-32 bg-[#FAFAFA] relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          {/* SECTION HEADER */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-900 leading-loose">
                Les Collections<br />De Prestige
              </h2>
              <div className="w-6 h-[2px] bg-gray-300 mt-4" />
            </div>
            <p className="text-sm text-gray-500 max-w-md leading-relaxed font-serif italic">
              Découvrez nos assortiments haut de gamme entièrement personnalisés pour sublimer votre réception.
            </p>
          </div>

          {/* 3-COLUMN GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS_CONTENT.map((product) => (
              <div
                key={product.id}
                className="group bg-white relative flex flex-col overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Product Thumbnail */}
                <div className="relative aspect-[4/3] w-full bg-[#F9F7F6] p-8 overflow-hidden">
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    fill
                    sizes="(max-w-7xl) 33vw, 100vw"
                    className="object-cover sm:object-contain transition-transform duration-[2s] ease-out group-hover:scale-105"
                  />
                </div>

                {/* Grid Product Info */}
                <div className="flex-1 flex flex-col p-8 sm:p-10 pb-16">
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">
                    {product.subtitle}
                  </span>
                  <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-900 mb-4">
                    {product.title}
                  </h3>
                </div>

                {/* Hover CTA Bar */}
                <div className="absolute bottom-0 left-0 w-full h-14 bg-[#1A1A1A] flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
                  <span className="text-[9px] tracking-[0.25em] text-white uppercase font-bold flex items-center gap-3">
                    Voir les détails
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RENDER THE PORTALED MODAL */}
      {productModal}

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </>
  );
}