"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useLanguage } from "@/app/components/LanguageProvider";
import { TARGET_PHONE_NUMBER } from "@/src/data/content";
import type { MultilingualProductItem } from "@/src/data/prestigeProducts";
import type { Language } from "@/src/data/translations";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: MultilingualProductItem | null;
}

export default function OrderModal({ isOpen, onClose, product }: OrderModalProps) {
  const { lang } = useLanguage();
  const l = lang as Language;
  const [mounted, setMounted] = useState(false);

  // État du formulaire
  const [orderForm, setOrderForm] = useState({
    name: "",
    phone: "",
    address: "",
    message: ""
  });

  // Traductions uniquement pour le formulaire de commande
  const localStrings = {
    fr: {
      orderTitle: "Finaliser la commande",
      nameLabel: "Nom Complet *",
      phoneLabel: "Téléphone *",
      addressLabel: "Adresse de livraison *",
      messageLabel: "Message (Optionnel)",
      sendOrder: "Valider la commande",
    },
    en: {
      orderTitle: "Complete your order",
      nameLabel: "Full Name *",
      phoneLabel: "Phone Number *",
      addressLabel: "Delivery Address *",
      messageLabel: "Message (Optional)",
      sendOrder: "Complete Order",
    },
    es: {
      orderTitle: "Finalizar el pedido",
      nameLabel: "Nombre Completo *",
      phoneLabel: "Teléfono *",
      addressLabel: "Dirección de entrega *",
      messageLabel: "Mensaje (Opcional)",
      sendOrder: "Confirmar Compra",
    },
    ar: {
      orderTitle: "إتمام الطلب",
      nameLabel: "الاسم الكامل *",
      phoneLabel: "رقم الهاتف *",
      addressLabel: "عنوان التوصيل *",
      messageLabel: "رسالة (اختياري)",
      sendOrder: "تأكيد الطلب",
    },
  };

  const currentStrings = localStrings[l] || localStrings.fr;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;

    const text = `Bonjour, je souhaite commander ce modèle :\n\n💐 *Produit* : ${product.title[l]}\n💶 *Prix* : € ${product.price}\n\n*Mes informations :*\n👤 *Nom* : ${orderForm.name}\n📞 *Téléphone* : ${orderForm.phone}\n📍 *Adresse* : ${orderForm.address}\n📝 *Message* : ${orderForm.message || "Aucun message"}`;

    const cleanPhone = TARGET_PHONE_NUMBER.replace(/[^0-9]/g, "");
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
    
    window.open(url, "_blank");
    
    // Réinitialiser le formulaire et fermer
    setOrderForm({ name: "", phone: "", address: "", message: "" });
    onClose();
  };

  if (!mounted) return null;

  return createPortal(
    <div className={`fixed inset-0 z-[100005] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      {/* Dark Blurred Overlay */}
      <div 
        className={`absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      
      {/* Right-Side Slide-in Drawer */}
      <div className={`absolute top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-2xl flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-serif text-2xl text-gray-900">{currentStrings.orderTitle}</h3>
          <button onClick={onClose} className="w-8 h-8 flex flex-col items-center justify-center group">
            <span className="w-5 h-[1.5px] bg-gray-900 rotate-45 translate-y-[0.75px] transition-transform group-hover:rotate-90" />
            <span className="w-5 h-[1.5px] bg-gray-900 -rotate-45 -translate-y-[0.75px] transition-transform group-hover:rotate-0" />
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="flex-1 overflow-y-auto px-8 py-8 hide-scrollbar">
          
          {/* Product Summary */}
          {product && (
            <div className="flex items-center gap-6 mb-10 bg-[#F9F7F6] p-4">
              <div className="relative w-20 h-24 flex-shrink-0 bg-white">
                <Image src={product.images[0]} alt={product.title[l]} fill className="object-cover p-2" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-900 mb-1 leading-tight">
                  {product.title[l]}
                </span>
                <span className="text-sm text-gray-500 font-serif italic">
                  € {product.price}
                </span>
              </div>
            </div>
          )}

          {/* Minimalist Form */}
          <form id="shared-order-form" onSubmit={handleOrderSubmit} className="space-y-8">
            <div className="flex flex-col space-y-2 group">
              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 group-focus-within:text-gray-900 transition-colors">
                {currentStrings.nameLabel}
              </label>
              <input required type="text" value={orderForm.name} onChange={(e) => setOrderForm({...orderForm, name: e.target.value})} className="border-b border-gray-200 focus:border-gray-900 py-2 text-xs text-gray-900 outline-none transition-colors bg-transparent" />
            </div>

            <div className="flex flex-col space-y-2 group">
              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 group-focus-within:text-gray-900 transition-colors">
                {currentStrings.phoneLabel}
              </label>
              <input required type="tel" value={orderForm.phone} onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})} className="border-b border-gray-200 focus:border-gray-900 py-2 text-xs text-gray-900 outline-none transition-colors bg-transparent" />
            </div>

            <div className="flex flex-col space-y-2 group">
              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 group-focus-within:text-gray-900 transition-colors">
                {currentStrings.addressLabel}
              </label>
              <input required type="text" value={orderForm.address} onChange={(e) => setOrderForm({...orderForm, address: e.target.value})} className="border-b border-gray-200 focus:border-gray-900 py-2 text-xs text-gray-900 outline-none transition-colors bg-transparent" />
            </div>

            <div className="flex flex-col space-y-2 group">
              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 group-focus-within:text-gray-900 transition-colors">
                {currentStrings.messageLabel}
              </label>
              <textarea rows={4} value={orderForm.message} onChange={(e) => setOrderForm({...orderForm, message: e.target.value})} className="border-b border-gray-200 focus:border-gray-900 py-2 text-xs text-gray-900 outline-none transition-colors bg-transparent resize-none" />
            </div>
          </form>
        </div>

        {/* Sticky Bottom Action Button */}
        <div className="p-8 border-t border-gray-100 bg-white">
          <button form="shared-order-form" type="submit" className="w-full px-8 py-5 text-[10px] font-bold tracking-[0.25em] uppercase bg-[#1A1A1A] text-white hover:bg-[#6A4C4C] transition-colors duration-500 flex justify-center items-center">
            {currentStrings.sendOrder}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}