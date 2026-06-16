"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/app/components/LanguageProvider";
import { SUPPORTED_LANGUAGES } from "@/src/data/translations";
import { BRAND_NAME } from "@/src/data/content";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);

  const currentLangConfig = SUPPORTED_LANGUAGES.find((l) => l.code === lang);

  useEffect(() => {
    if (!isLangDropdownOpen && !isMobileLangOpen) return;
    const handleClose = () => {
      setIsLangDropdownOpen(false);
      setIsMobileLangOpen(false);
    };
    window.addEventListener("click", handleClose);
    return () => window.removeEventListener("click", handleClose);
  }, [isLangDropdownOpen, isMobileLangOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  const pathname = usePathname();
  // Only the home page has a dark hero — everywhere else always use white navbar
  const isLight = pathname !== "/" || isScrolled || isMobileMenuOpen;

  const navLinks = [
    { label: t.nav.home,     href: "/" },
    { label: t.nav.boutique, href: "/products" },
    { label: t.nav.about,    href: "/about" },
    { label: t.nav.blog,     href: "/blog" },
    { label: t.nav.contact,  href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
          isMobileMenuOpen ? "z-[99999]" : "z-50"
        } ${
          isLight
            ? "bg-white/96 backdrop-blur-md py-4 border-b border-gray-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]"
            : "bg-transparent py-6 border-b border-white/10"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 w-full flex items-center justify-between">

          {/* Brand */}
          <div className="flex-shrink-0 relative z-20">
            <Link href="/" className="flex items-center gap-3 group">
              <span
                className={`text-[11px] md:text-xs font-bold tracking-[0.28em] uppercase transition-colors duration-500 ${
                  isLight ? "text-gray-900" : "text-white"
                }`}
              >
                {BRAND_NAME}
              </span>
            </Link>
          </div>

          {/* Center Nav */}
          <nav className="hidden md:flex items-center justify-center space-x-10 lg:space-x-14 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[9px] lg:text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 group py-2 ${
                  isLight
                    ? "text-gray-500 hover:text-gray-900"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 w-0 h-[1px] -translate-x-1/2 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 ${
                    isLight ? "bg-gray-900" : "bg-white"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right: Lang + CTA + Hamburger */}
          <div className="flex items-center gap-4 z-20">

            {/* Desktop Lang Dropdown */}
            <div className="relative hidden md:inline-block">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLangDropdownOpen((p) => !p);
                }}
                className={`flex items-center gap-2 px-3 py-2 text-[9px] font-bold tracking-[0.15em] uppercase border transition-all duration-300 rounded-sm ${
                  isLight
                    ? "border-gray-200 text-gray-700 hover:border-gray-400 bg-white"
                    : "border-white/20 text-white/70 hover:border-white/50 bg-white/5"
                }`}
              >
                <span>{currentLangConfig?.flag}</span>
                <span>{currentLangConfig?.label}</span>
                <svg
                  className={`w-2.5 h-2.5 transition-transform duration-300 ${isLangDropdownOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`absolute right-0 mt-2 w-32 bg-white border border-gray-100 rounded-sm shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 origin-top-right ${
                  isLangDropdownOpen
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="py-1">
                  {SUPPORTED_LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setIsLangDropdownOpen(false); }}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 text-[9px] font-bold tracking-[0.15em] uppercase text-left transition-colors duration-200 ${
                        lang === l.code
                          ? "bg-gray-900 text-white"
                          : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </span>
                      {lang === l.code && <span className="text-[8px]">✓</span>}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop CTA */}
            <Link
              href="#order"
              className={`hidden md:inline-flex items-center justify-center px-8 py-3 text-[9px] font-bold tracking-[0.2em] uppercase border transition-all duration-500 ${
                isLight
                  ? "border-gray-200 text-gray-900 hover:bg-gray-900 hover:border-gray-900 hover:text-white"
                  : "border-white/30 text-white hover:bg-white hover:text-black"
              }`}
            >
              {t.nav.cta}
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-end gap-1.5 w-8 h-8 group z-[80] relative"
              aria-label="Toggle Menu"
            >
              {[
                isMobileMenuOpen ? "w-8 rotate-45 translate-y-[7.5px]" : "w-6 group-hover:w-8",
                isMobileMenuOpen ? "opacity-0 w-8" : "opacity-100 w-8",
                isMobileMenuOpen ? "w-8 -rotate-45 -translate-y-[7.5px]" : "w-4 group-hover:w-6",
              ].map((cls, i) => (
                <span
                  key={i}
                  className={`h-[1.5px] transition-all duration-300 ${cls} ${
                    isLight ? "bg-gray-900" : "bg-white"
                  }`}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[99990] transition-opacity duration-500 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-[85vw] max-w-[400px] bg-[#F9F7F6] z-[99995] shadow-2xl flex flex-col justify-between pt-28 pb-12 px-8 md:hidden transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link, index) => (
            <div
              key={link.href}
              className={`overflow-hidden transition-all duration-500 ${
                isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? `${index * 60}ms` : "0ms" }}
            >
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-4xl text-gray-900 hover:text-[#C8966C] transition-colors block"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>

        <div
          className={`transition-all duration-700 delay-300 flex flex-col gap-6 ${
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="h-[1px] w-full bg-gray-200" />

          {/* Mobile Lang */}
          <div className="relative w-full">
            <span className="block text-[8px] font-bold tracking-widest uppercase text-gray-400 mb-2">Lang:</span>
            <button
              onClick={(e) => { e.stopPropagation(); setIsMobileLangOpen((p) => !p); }}
              className="w-full flex items-center justify-between px-4 py-3 border border-gray-200 rounded-sm text-[10px] font-bold tracking-[0.15em] uppercase text-gray-700 bg-white"
            >
              <span className="flex items-center gap-2">
                <span>{currentLangConfig?.flag}</span>
                <span>{currentLangConfig?.label}</span>
              </span>
              <svg
                className={`w-3 h-3 text-gray-400 transition-transform duration-300 ${isMobileLangOpen ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`absolute left-0 right-0 bottom-full mb-2 bg-white border border-gray-200 rounded-sm shadow-lg z-50 transition-all duration-300 origin-bottom ${
                isMobileLangOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="py-1">
                {SUPPORTED_LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setIsMobileLangOpen(false); setIsMobileMenuOpen(false); }}
                    className={`w-full flex items-center justify-between px-4 py-3 text-[10px] font-bold tracking-[0.15em] uppercase text-left transition-colors duration-200 ${
                      lang === l.code ? "bg-gray-900 text-white" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </span>
                    {lang === l.code && <span className="text-[9px]">✓</span>}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="#order"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase bg-gray-900 text-white hover:bg-[#C8966C] transition-colors duration-500"
          >
            {t.nav.cta}
          </Link>

          <div className="flex justify-between items-center text-[9px] tracking-[0.2em] uppercase text-gray-400 font-bold">
            <span>Atelier Maroc</span>
            <span>Est. 2024</span>
          </div>
        </div>
      </aside>
    </>
  );
}