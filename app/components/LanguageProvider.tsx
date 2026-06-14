"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import {
  type Language,
  SUPPORTED_LANGUAGES,
  translations,
} from "@/src/data/translations";

// ── Types ──────────────────────────────────────────────────
type NestedValue = string | readonly string[] | readonly NestedValue[] | { readonly [key: string]: NestedValue };

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations[Language];
  isRTL: boolean;
}

// ── Context ────────────────────────────────────────────────
const LanguageContext = createContext<LanguageContextValue | null>(null);

// ── Provider ───────────────────────────────────────────────
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("fr");

  // On mount: read saved language from localStorage (client only)
  useEffect(() => {
    try {
      const saved = localStorage.getItem("ht-lang") as Language | null;
      if (saved && SUPPORTED_LANGUAGES.some((l) => l.code === saved)) {
        setLangState(saved);
      }
    } catch {
      // localStorage not available (SSR guard)
    }
  }, []);

  // When language changes: persist + update <html> dir & lang attributes
  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("ht-lang", newLang);
    } catch {
      // ignore
    }
    const langConfig = SUPPORTED_LANGUAGES.find((l) => l.code === newLang);
    if (langConfig) {
      document.documentElement.setAttribute("dir", langConfig.dir);
      document.documentElement.setAttribute("lang", newLang);
    }
  }, []);

  // Sync dir attribute on initial load too
  useEffect(() => {
    const langConfig = SUPPORTED_LANGUAGES.find((l) => l.code === lang);
    if (langConfig) {
      document.documentElement.setAttribute("dir", langConfig.dir);
      document.documentElement.setAttribute("lang", lang);
    }
  }, [lang]);

  const isRTL = lang === "ar";
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ── Hook ───────────────────────────────────────────────────
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return ctx;
}
