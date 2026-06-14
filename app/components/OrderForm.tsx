"use client";

import { useState } from "react";
import { ORDER_FORM_CONTENT, generateWhatsAppLink } from "@/src/data/content";

export default function OrderForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("tanger");
  const [products, setProducts] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  
  const [errors, setErrors] = useState<{ name?: string; date?: string; products?: string }>({});

  const handleProductChange = (productName: string) => {
    if (products.includes(productName)) {
      setProducts(products.filter((p) => p !== productName));
    } else {
      setProducts([...products, productName]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple Validation
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "Le nom complet est requis.";
    if (!date) newErrors.date = "La date de l'événement est requise.";
    if (products.length === 0) newErrors.products = "Veuillez sélectionner au moins une prestation.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Map city slug to user-friendly label
    const cityLabelMap: Record<string, string> = {
      tanger: "Tanger",
      tetouan: "Tétouan",
      autre: "Autre Ville (Maroc)"
    };

    // Generate link and redirect
    const waLink = generateWhatsAppLink({
      name,
      date,
      city: cityLabelMap[city] || city,
      products,
      notes
    });

    window.open(waLink, "_blank");
  };

  return (
    <section id="order" className="py-32 bg-[#F9F7F6] relative">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        
        {/* ---------------- SECTION HEADER ---------------- */}
        <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-400 mb-6">
            Demande d'Atelier
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight mb-6">
            {ORDER_FORM_CONTENT.title}
          </h2>
          <div className="w-8 h-[1px] bg-gray-300 mb-8" />
          <p className="text-sm text-gray-500 leading-relaxed font-serif italic">
            {ORDER_FORM_CONTENT.subtitle}
          </p>
        </div>

        {/* ---------------- INTERACTIVE FORM ---------------- */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 sm:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] space-y-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16">
            
            {/* Name Input */}
            <div className="flex flex-col space-y-3 relative group">
              <label htmlFor="client-name" className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 group-focus-within:text-gray-900 transition-colors">
                {ORDER_FORM_CONTENT.fields.nameLabel} <span className="text-[#6A4C4C]">*</span>
              </label>
              <input
                id="client-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={ORDER_FORM_CONTENT.fields.namePlaceholder}
                className="border-b border-gray-200 focus:border-gray-900 py-3 text-xs text-gray-900 outline-none transition-colors bg-transparent placeholder-gray-300"
              />
              {errors.name && <p className="text-[10px] text-red-500 absolute -bottom-5 left-0">{errors.name}</p>}
            </div>

            {/* Date Input */}
            <div className="flex flex-col space-y-3 relative group">
              <label htmlFor="event-date" className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 group-focus-within:text-gray-900 transition-colors">
                {ORDER_FORM_CONTENT.fields.dateLabel} <span className="text-[#6A4C4C]">*</span>
              </label>
              <input
                id="event-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border-b border-gray-200 focus:border-gray-900 py-3 text-xs text-gray-900 outline-none transition-colors bg-transparent uppercase tracking-wider"
              />
              {errors.date && <p className="text-[10px] text-red-500 absolute -bottom-5 left-0">{errors.date}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16">
            {/* City Input */}
            <div className="flex flex-col space-y-3 group">
              <label htmlFor="event-city" className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 group-focus-within:text-gray-900 transition-colors">
                {ORDER_FORM_CONTENT.fields.cityLabel}
              </label>
              <select
                id="event-city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="border-b border-gray-200 focus:border-gray-900 py-3 text-xs text-gray-900 outline-none transition-colors bg-transparent uppercase tracking-wider cursor-pointer appearance-none"
              >
                {ORDER_FORM_CONTENT.fields.cityOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Placeholder / Layout alignment */}
            <div className="hidden sm:block" />
          </div>

          {/* Products Multi-Checkboxes */}
          <div className="flex flex-col space-y-6 relative">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
              {ORDER_FORM_CONTENT.fields.productsLabel} <span className="text-[#6A4C4C]">*</span>
            </span>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                "Dragées Personnalisées",
                "Chocolat Personnalisé",
                "Cartes d'Invitation"
              ].map((prod) => {
                const isChecked = products.includes(prod);
                return (
                  <label
                    key={prod}
                    className={`flex items-center justify-center p-6 border cursor-pointer select-none transition-all duration-300 text-center ${
                      isChecked
                        ? "border-gray-900 bg-gray-50"
                        : "border-gray-100 hover:border-gray-300 bg-white"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleProductChange(prod)}
                      className="hidden" // Hide native checkbox for a cleaner box-selection look
                    />
                    <div className="flex flex-col items-center gap-3">
                      {/* Minimalist Check Indicator */}
                      <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${isChecked ? "border-gray-900 bg-gray-900" : "border-gray-300"}`}>
                        {isChecked && (
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className={`text-[10px] font-bold tracking-[0.15em] uppercase ${isChecked ? "text-gray-900" : "text-gray-500"}`}>
                        {prod}
                      </span>
                    </div>
                  </label>
                );
              })}
            </div>
            {errors.products && <p className="text-[10px] text-red-500 absolute -bottom-5 left-0">{errors.products}</p>}
          </div>

          {/* Notes Textarea */}
          <div className="flex flex-col space-y-3 group">
            <label htmlFor="notes" className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 group-focus-within:text-gray-900 transition-colors">
              {ORDER_FORM_CONTENT.fields.notesLabel}
            </label>
            <textarea
              id="notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={ORDER_FORM_CONTENT.fields.notesPlaceholder}
              className="border-b border-gray-200 focus:border-gray-900 py-3 text-xs text-gray-900 outline-none transition-colors bg-transparent resize-none placeholder-gray-300"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-8 flex justify-center">
            <button
              type="submit"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center px-16 py-5 text-[10px] font-bold tracking-[0.25em] uppercase bg-[#6A4C4C] text-white overflow-hidden transition-all duration-500 hover:bg-gray-900"
            >
              <span className="relative z-10 flex items-center gap-4">
                {ORDER_FORM_CONTENT.fields.submitText}
                <svg
                  className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}