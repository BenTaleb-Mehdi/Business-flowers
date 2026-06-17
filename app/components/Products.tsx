"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useSearchParams } from "next/navigation"; // <-- IMPORT AJOUTÉ
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

export default function Products() {
  const { t, lang } = useLanguage();
  const l = lang as Language;

  // <-- LECTURE DE L'URL AJOUTÉE -->
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState("");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<MultilingualProductItem | null>(null);
  
  // Modal & Slider States
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Localization strings
  const localStrings = {
    fr: {
      all: "Toutes",
      filterBy: "Filtrer par catégorie",
      categories: "Catégories",
      sortBy: "Trier par",
      sortNew: "Nouveautés",
      sortAsc: "Prix croissant",
      sortDesc: "Prix décroissant",
      results: "Résultat(s)",
      noProducts: "Aucune création trouvée.",
      resetFilters: "Réinitialiser les filtres",
      viewDetails: "Voir les détails",
      orderModel: "Commander ce modèle",
      featuresLabel: "Caractéristiques",
    },
    en: {
      all: "All",
      filterBy: "Filter by category",
      categories: "Categories",
      sortBy: "Sort by",
      sortNew: "New Arrivals",
      sortAsc: "Price: Low to High",
      sortDesc: "Price: High to Low",
      results: "Result(s)",
      noProducts: "No creations found.",
      resetFilters: "Reset filters",
      viewDetails: "View details",
      orderModel: "Order this model",
      featuresLabel: "Features",
    },
    es: {
      all: "Todas",
      filterBy: "Filtrer por categoría",
      categories: "Categorías",
      sortBy: "Ordenar por",
      sortNew: "Novedades",
      sortAsc: "Precio: menor a mayor",
      sortDesc: "Precio: mayor a menor",
      results: "Resultado(s)",
      noProducts: "No se encontraron creaciones.",
      resetFilters: "Restablecer filtros",
      viewDetails: "Ver detalles",
      orderModel: "Pedir este modelo",
      featuresLabel: "Características",
    },
    ar: {
      all: "الكل",
      filterBy: "تصفية حسب الفئة",
      categories: "الفئات",
      sortBy: "ترتيب حسب",
      sortNew: "جديدنا",
      sortAsc: "السعر: من الأقل إلى الأعلى",
      sortDesc: "السعر: من الأعلى إلى الأقل",
      results: "نتائج",
      noProducts: "لم يتم العثور على أي منتج.",
      resetFilters: "إعادة ضبط التصفية",
      viewDetails: "عرض التفاصيل",
      orderModel: "طلب هذا الموديل",
      featuresLabel: "المميزات",
    },
  };

  const currentStrings = localStrings[l] || localStrings.fr;

  // <-- LOGIQUE DE FILTRAGE INITIAL VIA URL AJOUTÉE -->
  useEffect(() => {
    setMounted(true);
    
    if (categoryFromUrl) {
      // On cherche un produit dont l'ID de catégorie correspond à l'URL
      const matchedProduct = HAND_TOUCH_PRODUCTS.find(
        (p) => p.category.fr.toLowerCase().replace(/\s+/g, '-') === categoryFromUrl
      );
      
      if (matchedProduct) {
        // On sélectionne le nom de la catégorie dans la langue actuelle
        setActiveCategory(matchedProduct.category[l]);
      } else {
        setActiveCategory(currentStrings.all);
      }
    } else {
      setActiveCategory(currentStrings.all);
    }
  }, [categoryFromUrl, currentStrings.all, l]);

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

  const CATEGORIES = [
    currentStrings.all,
    ...Array.from(new Set(HAND_TOUCH_PRODUCTS.map((p) => p.category[l]))),
  ];

  const filteredProducts =
    activeCategory === currentStrings.all
      ? HAND_TOUCH_PRODUCTS
      : HAND_TOUCH_PRODUCTS.filter((p) => p.category[l] === activeCategory);

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

  return (
    <>
      <div className="mb-12">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="lg:hidden flex items-center justify-between border-b border-gray-200 pb-4 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-900 w-full"
        >
          <span>{currentStrings.filterBy}</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 xl:gap-24 relative items-start">
        {/* S-Sidebar dyal l-mobile & Desktop */}
       {/* S-Sidebar dyal l-mobile & Desktop */}
        <aside
          className={`fixed inset-y-0 left-0 z-[99999] lg:z-0 w-[280px] bg-[#F9F7F6] p-8 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] lg:sticky lg:top-32 lg:translate-x-0 lg:w-64 lg:bg-white/50 lg:backdrop-blur-md lg:border lg:border-white/60 lg:shadow-[0_4px_20px_rgb(0,0,0,0.03)] lg:rounded-2xl lg:flex-shrink-0 h-screen lg:h-fit overflow-y-auto pb-32 lg:pb-8 lg:-ml-6 ${
            isMobileFilterOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full lg:shadow-none"
          }`}
        >
          {/* Bouton fermer */}
          <button
            onClick={() => setIsMobileFilterOpen(false)}
            className="lg:hidden absolute top-6 right-6 w-8 h-8 flex flex-col items-center justify-center group z-50 cursor-pointer"
          >
            <span className="w-5 h-[1.5px] bg-gray-900 rotate-45 translate-y-[0.75px]" />
            <span className="w-5 h-[1.5px] bg-gray-900 -rotate-45 -translate-y-[0.75px]" />
          </button>

          {/* Contenu du filtre */}
          <div className="space-y-10 pt-12 lg:pt-0">
            <div>
              <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-900 mb-6">
                {currentStrings.categories}
              </h3>
              <ul className="space-y-4">
                {CATEGORIES.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => {
                        setActiveCategory(category);
                        setIsMobileFilterOpen(false);
                      }}
                      className={`text-xs tracking-wider transition-all duration-300 ${
                        activeCategory === category
                          ? "text-[#6A4C4C] font-bold translate-x-2"
                          : "text-gray-600 hover:text-gray-900 hover:translate-x-1" /* <-- Ktaba rje3naha mghem9a chwia (text-gray-600) */
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-8 h-[1px] bg-gray-300 hidden lg:block" />
            <div>
              <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-900 mb-6">
                {currentStrings.sortBy}
              </h3>
              <ul className="space-y-4">
                <li>
                  <button className="text-xs tracking-wider text-gray-600 hover:text-gray-900 transition-colors">{currentStrings.sortNew}</button>
                </li>
                <li>
                  <button className="text-xs tracking-wider text-gray-600 hover:text-gray-900 transition-colors">{currentStrings.sortAsc}</button>
                </li>
                <li>
                  <button className="text-xs tracking-wider text-gray-600 hover:text-gray-900 transition-colors">{currentStrings.sortDesc}</button>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        <div className="flex-1 w-full">
          <div className="mb-8 hidden lg:block">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
              {filteredProducts.length} {currentStrings.results}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
                lang={l}
                viewDetailsText={currentStrings.viewDetails}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-32 flex flex-col items-center justify-center text-center">
              <p className="font-serif italic text-2xl text-gray-400 mb-4">{currentStrings.noProducts}</p>
              <button
                onClick={() => setActiveCategory(currentStrings.all)}
                className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6A4C4C] border-b border-[#6A4C4C] pb-1"
              >
                {currentStrings.resetFilters}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* OVERLAY S-Sadd (Portal style outside the flex container to handle body-level background clicks) */}
      {isMobileFilterOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-[99990] lg:hidden cursor-pointer" 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsMobileFilterOpen(false);
          }} 
        />
      )}

      {/* RENDER MODALS */}
      {productModal}

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
        
        /* RADICAL FIX: Hide specific overlaying chat elements only when filters are active */
        ${isMobileFilterOpen ? `
          div[class*="fixed"], 
          div[class*="absolute"],
          button[class*="fixed"],
          button[class*="absolute"],
          iframe, 
          .tawk-min-container,
          #chat-widget-container { 
            &:not([class*="z-[99995]"]):not([class*="z-[99999]"]):not([class*="z-50"]):not([class*="z-[99990]"]) {
              display: none !important;
            }
          }
        ` : ''}
      `,
        }}
      />
    </>
  );
}