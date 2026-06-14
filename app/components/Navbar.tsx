"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { NAVBAR_CONTENT } from "@/src/data/content";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll listener for the header border effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/95 backdrop-blur-md py-4 border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]"
            : "bg-transparent py-6 border-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full flex items-center justify-between">
          
          {/* 1. Left: Brand Logo */}
          <div className="flex-shrink-0 relative z-20">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-17 h-17 transition-transform duration-500 group-hover:scale-105 opacity-80">
                 <Image 
                   src="/images/logo.png" 
                   alt="Logo" 
                   fill
                   className="object-contain grayscale"
                 />
              </div>
              <span className="text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-900">
                {NAVBAR_CONTENT.logoText}
              </span>
            </a>
          </div>

          {/* 2. Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-8 lg:space-x-12 absolute left-1/2 -translate-x-1/2">
            {NAVBAR_CONTENT.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-[9px] lg:text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-gray-900 transition-colors duration-300 group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-gray-900 -translate-x-1/2 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
              </a>
            ))}
          </nav>

          {/* 3. Right: CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center justify-end gap-6 z-20">
            {/* Desktop CTA */}
            <a
              href="#order"
              className="hidden md:inline-flex items-center justify-center px-8 py-3 text-[9px] font-bold tracking-[0.2em] uppercase border border-gray-200 text-gray-900 hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-all duration-500"
            >
              {NAVBAR_CONTENT.ctaText}
            </a>

            {/* Mobile Hamburger / Close Icon */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-end gap-1.5 w-8 h-8 group z-[80] relative"
              aria-label="Toggle Menu"
            >
              <span className={`h-[1.5px] bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? "w-8 rotate-45 translate-y-[7.5px]" : "w-6 group-hover:w-8"}`} />
              <span className={`w-8 h-[1.5px] bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`h-[1.5px] bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? "w-8 -rotate-45 -translate-y-[7.5px]" : "w-4 group-hover:w-6"}`} />
            </button>
          </div>

        </div>
      </header>

      {/* ---------------- MOBILE MENU DRAWER SECTION ---------------- */}
      
      {/* Dark Overlay Backdrop */}
      <div 
        className={`fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-[60] transition-opacity duration-500 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Left Slide-in Drawer */}
      <aside 
        className={`fixed top-0 left-0 bottom-0 w-[85vw] max-w-[400px] bg-[#F9F7F6] z-[70] shadow-2xl flex flex-col justify-between pt-32 pb-12 px-8 md:hidden transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Navigation Links */}
        <nav className="flex flex-col space-y-6">
          {NAVBAR_CONTENT.links.map((link, index) => (
            <div 
              key={link.label}
              className={`overflow-hidden transition-all duration-500 delay-${index * 100} ${
                isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-4xl text-gray-900 hover:text-gray-500 transition-colors block"
              >
                {link.label}
              </a>
            </div>
          ))}
        </nav>

        {/* Mobile Footer Info & CTA */}
        <div className={`transition-all duration-700 delay-300 flex flex-col gap-8 ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="h-[1px] w-full bg-gray-200" />
          
          <a
            href="#order"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase bg-[#6A4C4C] text-white hover:bg-gray-900 transition-colors"
          >
            {NAVBAR_CONTENT.ctaText}
          </a>

          <div className="flex justify-between items-center text-[9px] tracking-[0.2em] uppercase text-gray-400 font-bold">
            <span>Atelier Maroc</span>
            <span>Est. 2024</span>
          </div>
        </div>
      </aside>
    </>
  );
}