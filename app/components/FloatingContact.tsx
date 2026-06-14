"use client";

import { useState, useEffect } from "react";
import { TARGET_PHONE_NUMBER } from "@/src/data/content";
import Chatbot from "./Chatbot"; // Importation du nouveau Chatbot

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Afficher le bouton Scroll to Top après 400px de scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Numéro WhatsApp propre
  const cleanPhone = TARGET_PHONE_NUMBER.replace(/[^0-9]/g, "");
  const waUrl = `https://wa.me/${cleanPhone}`;

  return (
    <>
      {/* ── 1. LE CHATBOT (S'affiche en bas à gauche via son propre composant) ── */}
      <Chatbot />

      {/* ── 2. WHATSAPP ET RETOUR EN HAUT (En bas à droite) ── */}
      <div className="fixed bottom-6 right-6 z-[9998] flex flex-col items-end gap-3">
        
        {/* Bouton Retour en haut (Apparaît au scroll) */}
        <button
          onClick={scrollToTop}
          className={`w-10 h-10 sm:w-12 sm:h-12 bg-white border border-gray-100 text-gray-900 rounded-full flex items-center justify-center shadow-lg hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
            showScrollTop 
              ? "translate-y-0 opacity-100" 
              : "translate-y-10 opacity-0 pointer-events-none"
          }`}
          title="Retour en haut"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 15l7-7 7 7" />
          </svg>
        </button>

        {/* Bouton WhatsApp */}
        <a 
          href={waUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-lg text-gray-900 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 group"
          title="Nous contacter sur WhatsApp"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 0C5.385 0 0 5.385 0 12.032c0 2.128.553 4.204 1.605 6.033L.201 24l6.082-1.597c1.764.957 3.743 1.464 5.748 1.464 6.646 0 12.031-5.384 12.031-12.031C24 5.384 18.677 0 12.031 0zm0 21.968c-1.802 0-3.565-.484-5.111-1.397l-.367-.217-3.799 1.001.996-3.705-.238-.378a10.12 10.12 0 01-1.543-5.35c0-5.59 4.549-10.14 10.14-10.14 5.591 0 10.141 4.55 10.141 10.14s-4.55 10.14-10.14 10.14zM17.6 14.385c-.305-.152-1.805-.89-2.084-.991-.28-.102-.484-.152-.688.152-.204.305-.788.991-.967 1.194-.178.204-.356.229-.661.076-1.849-.915-3.321-2.062-4.595-3.921-.202-.295.204-.27.8-.865.152-.152.228-.305.305-.508.076-.203.038-.381-.038-.533-.076-.152-.688-1.656-.942-2.268-.247-.594-.497-.513-.688-.523-.178-.009-.382-.009-.586-.009-.204 0-.535.076-.814.381-.28.305-1.07 1.043-1.07 2.542 0 1.5 1.095 2.951 1.248 3.155.153.204 2.152 3.284 5.213 4.607 2.054.89 2.735.966 3.653.813.918-.152 2.723-1.114 3.104-2.184.381-1.07.381-1.983.267-2.184-.114-.204-.419-.305-.724-.457z"/>
          </svg>
        </a>

      </div>
    </>
  );
}