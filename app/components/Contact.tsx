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

    // Encodage du texte pour qu'il soit valide dans une URL (gestion des espaces, sauts de ligne...)
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Nettoyage du numéro de téléphone cible (garde uniquement les chiffres)
    // Assurez-vous d'avoir TARGET_PHONE_NUMBER dans votre fichier content.ts
    const cleanPhone = (TARGET_PHONE_NUMBER || CONTACT_PHONE_DISPLAY).replace(/[^0-9]/g, "");

    // Création du lien et ouverture dans un nouvel onglet
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-white pt-36 sm:pt-40 pb-20 sm:pb-24 relative z-10">
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
              <div></div>
            </div>
          </div>

          {/* ── RIGHT: Contact Form ────────────────────────── */}
          <div className="w-full lg:w-7/12">
            <div className="bg-[#F9F7F6] p-6 sm:p-10 md:p-16 relative">
              
              {/* Ajout du onSubmit sur le formulaire */}
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
                  className="px-10 sm:px-12 py-4 sm:py-5 text-[10px] font-bold tracking-[0.25em] uppercase bg-[#6A4C4C] text-white hover:bg-gray-900 transition-colors duration-500 w-full sm:w-auto"
                >
                  {c.sendButton}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}