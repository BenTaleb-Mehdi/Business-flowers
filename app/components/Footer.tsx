"use client";

import Link from "next/link";
import { useLanguage } from "@/app/components/LanguageProvider";
import { 
  FOOTER_CONTENT, 
  BRAND_NAME, 
  CONTACT_EMAIL, 
  CONTACT_PHONE_DISPLAY, 
  INSTAGRAM_URL, 
  FACEBOOK_URL,
  TARGET_PHONE_NUMBER
} from "@/src/data/content";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  const footerLinks = [
    { label: t.nav.boutique, href: "/products" },
    { label: t.nav.about,    href: "/about" },
    { label: t.nav.blog,     href: "/blog" },
    { label: t.nav.contact,  href: "/contact" },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 sm:pt-24 pb-10 sm:pb-12 relative overflow-hidden z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* ── MAIN GRID ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 sm:pb-16 border-b border-[#333333]">

          {/* 1. Brand (4 cols) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5 sm:space-y-6">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-white">
              {BRAND_NAME}
            </h3>
            <p className="text-[10px] text-gray-400 max-w-xs leading-loose font-medium">
              {FOOTER_CONTENT.tagline}
            </p>
            <p className="text-[10px] text-[#6A4C4C] font-bold tracking-widest uppercase pt-1">
              {FOOTER_CONTENT.targeting}
            </p>
          </div>

          {/* 2. Nav Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-white mb-6 sm:mb-8">
              {f.discoverLabel}
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {footerLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-[10px] text-gray-400 hover:text-white transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact info (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-white mb-6 sm:mb-8">
              {f.contactLabel}
            </h4>
            <div className="space-y-3 sm:space-y-4 text-[10px] text-gray-400 font-medium">
              <div className="pt-3 sm:pt-4 space-y-3 sm:space-y-4">
                <p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </p>
                <p>
                  <a href={`tel:${TARGET_PHONE_NUMBER}`} className="hover:text-white transition-colors">
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* 4. Socials (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-white mb-6 sm:mb-8">
              {f.socialsLabel}
            </h4>
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-gray-400 hover:text-white transition-colors duration-300 font-medium flex items-center gap-3"
              >
                <svg className="h-3.5 w-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-gray-400 hover:text-white transition-colors duration-300 font-medium flex items-center gap-3"
              >
                <svg className="h-3.5 w-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>

        </div>

        {/* ── SUB-FOOTER ─────────────────────────────────────── */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-[9px] font-bold tracking-[0.2em] uppercase text-gray-600">
          <p>{FOOTER_CONTENT.copyright}</p>
          <div className="flex space-x-4 sm:space-x-6">
            <span className="hover:text-gray-400 transition-colors cursor-default">{f.city1}</span>
            <span className="hover:text-gray-400 transition-colors cursor-default">{f.city2}</span>
            <span className="hover:text-gray-400 transition-colors cursor-default">{f.country}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}