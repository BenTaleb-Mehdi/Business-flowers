"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/app/components/LanguageProvider";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, TARGET_PHONE_NUMBER } from "@/src/data/content";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  // 1. État pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: ""
  });

  // 2. Fonction pour mettre à jour l'état quand l'utilisateur tape
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Fonction pour envoyer sur WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Formatage du message avec des sauts de ligne et du texte en gras (*)
    const whatsappMessage = 
`*Nouveau message depuis le site web* ✨

*👤 Nom :* ${formData.name}
*📞 Téléphone :* ${formData.phone}
*📝 Sujet :* ${formData.subject || "Non spécifié"}
*💬 Message :*
${formData.message}`;

    // Encodage du texte pour qu'il soit valide dans une URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Nettoyage du numéro de téléphone cible
    const cleanPhone = (TARGET_PHONE_NUMBER || CONTACT_PHONE_DISPLAY).replace(/[^0-9]/g, "");

    // Création du lien et ouverture dans un nouvel onglet
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    window.open(waUrl, "_blank");
  };

  return (
    // 1. On utilise <main> au lieu de div
    <main className="relative min-h-screen">

      {/* ── BACKGROUND FIXE (Zewa9a Royal & Glows) ── */}
      <div className="fixed inset-0 w-screen h-screen bg-[#FCFAF8] pointer-events-none z-[-1] overflow-hidden">
        
        {/* Cadre Haute Couture */}
        <div className="absolute top-2 left-2 right-2 bottom-2 md:top-4 md:left-4 md:right-4 md:bottom-4 border border-[#6A4C4C] opacity-[0.15] md:opacity-[0.20]" />
        <div className="absolute top-4 left-4 right-4 bottom-4 md:top-6 md:left-6 md:right-6 md:bottom-6 border border-[#6A4C4C] opacity-[0.08] md:opacity-[0.12]" />

        {/* Sceau de Luxe - Haut Gauche */}
        <svg 
          className="absolute -top-16 -left-16 w-[250px] h-[250px] opacity-[0.12] md:-top-32 md:-left-32 md:w-[600px] md:h-[600px] text-[#6A4C4C] md:opacity-[0.20] transition-all duration-500" 
          viewBox="0 0 200 200" fill="none" stroke="currentColor" 
        >
          <g transform="translate(100, 100)">
            <circle cx="0" cy="0" r="80" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="72" strokeWidth="0.5" />
            <path d="M 0,-72 C 25,-72 35,-35 72,0 C 35,35 25,72 0,72 C -25,72 -35,35 -72,0 C -35,-35 -25,-72 0,-72 Z" strokeWidth="1.5" />
            <path d="M 0,-55 C 15,-55 20,-20 55,0 C 20,20 15,55 0,55 C -15,55 -20,20 -55,0 C -20,-20 -15,-55 0,-55 Z" transform="rotate(45)" strokeWidth="1" />
            <circle cx="0" cy="0" r="15" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="8" strokeWidth="0.5" />
            <path d="M 0,-8 L 0,8 M -8,0 L 8,0" strokeWidth="0.5" />
          </g>
        </svg>

        {/* Sceau de Luxe - Bas Droite */}
        <svg 
          className="absolute -bottom-20 -right-20 w-[300px] h-[300px] opacity-[0.10] md:-bottom-40 md:-right-40 md:w-[700px] md:h-[700px] text-[#6A4C4C] md:opacity-[0.15] rotate-180 transition-all duration-500" 
          viewBox="0 0 200 200" fill="none" stroke="currentColor" 
        >
          <g transform="translate(100, 100)">
            <circle cx="0" cy="0" r="80" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="72" strokeWidth="0.5" />
            <path d="M 0,-72 C 25,-72 35,-35 72,0 C 35,35 25,72 0,72 C -25,72 -35,35 -72,0 C -35,-35 -25,-72 0,-72 Z" strokeWidth="1.5" />
            <path d="M 0,-55 C 15,-55 20,-20 55,0 C 20,20 15,55 0,55 C -15,55 -20,20 -55,0 C -20,-20 -15,-55 0,-55 Z" transform="rotate(45)" strokeWidth="1" />
            <circle cx="0" cy="0" r="15" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="8" strokeWidth="0.5" />
            <path d="M 0,-8 L 0,8 M -8,0 L 8,0" strokeWidth="0.5" />
          </g>
        </svg>

        {/* Glows (Lumières douces) */}
        <div className="absolute top-[-10vh] left-[-10vw] w-[80vw] md:w-[45vw] h-[80vw] md:h-[45vw] bg-[#E8DEDA] rounded-full blur-[80px] md:blur-[100px] opacity-50" />
        <div className="absolute bottom-[-10vh] right-[-10vw] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] bg-[#F5EBE9] rounded-full blur-[100px] md:blur-[140px] opacity-50" />
      </div>

      {/* ── CONTENU DE LA PAGE (Sans bg-white) ── */}
      <div className="pt-36 sm:pt-40 pb-20 sm:pb-24 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

          {/* ── PAGE HEADER ─────────────────────────────────── */}
          <div className="mb-16 sm:mb-20">
            <div className="flex items-center gap-3 text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">
              <Link href="/" className="hover:text-gray-900 transition-colors">{c.breadcrumbHome}</Link>
              <span>/</span>
              <span className="text-gray-900">{c.breadcrumbCurrent}</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-24">

            {/* ── LEFT: Contact Info ─────────────────────────── */}
            <div className="w-full lg:w-5/12 flex flex-col">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-gray-900 leading-tight mb-6 sm:mb-8 whitespace-pre-line">
                {c.title}
              </h1>
              <div className="w-8 h-[1px] bg-gray-300 mb-10 sm:mb-12" />

              <div className="space-y-10 sm:space-y-12">
                <div>
                  <h4 className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">{c.coordsLabel}</h4>
                  <p className="text-sm text-gray-900 font-serif italic mb-2">{CONTACT_EMAIL}</p>
                  <p className="text-sm text-gray-900 font-serif italic">{CONTACT_PHONE_DISPLAY}</p>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Contact Form ────────────────────────── */}
            <div className="w-full lg:w-7/12">
              {/* J'ai changé bg-[#F9F7F6] par bg-white/60 avec backdrop-blur pour un effet zaj de luxe */}
              <div className="bg-white/60 backdrop-blur-md border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-10 md:p-16 relative rounded-2xl">
                
                <form className="space-y-8 sm:space-y-10" onSubmit={handleSubmit}>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                    
                    {/* Champ Nom */}
                    <div className="flex flex-col space-y-3">
                      <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">{c.nameLabel} *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-b border-gray-300 focus:border-gray-900 py-3 text-xs text-gray-900 outline-none transition-colors bg-transparent"
                      />
                    </div>
                    
                    {/* Champ Téléphone */}
                    <div className="flex flex-col space-y-3">
                      <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">{c.phoneLabel} *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="border-b border-gray-300 focus:border-gray-900 py-3 text-xs text-gray-900 outline-none transition-colors bg-transparent"
                      />
                    </div>
                  </div>

                  {/* Champ Sujet */}
                  <div className="flex flex-col space-y-3">
                    <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">{c.subjectLabel}</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="border-b border-gray-300 focus:border-gray-900 py-3 text-xs text-gray-900 outline-none transition-colors bg-transparent"
                    />
                  </div>

                  {/* Champ Message */}
                  <div className="flex flex-col space-y-3">
                    <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">{c.messageLabel} *</label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="border-b border-gray-300 focus:border-gray-900 py-3 text-xs text-gray-900 outline-none transition-colors bg-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-10 sm:px-12 py-4 sm:py-5 text-[10px] font-bold tracking-[0.25em] uppercase bg-[#6A4C4C] text-white hover:bg-gray-900 transition-colors duration-500 w-full sm:w-auto rounded-none"
                  >
                    {c.sendButton}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}