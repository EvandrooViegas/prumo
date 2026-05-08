"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "@/lib/i18n";

const LanguageContext = createContext({ lang: "pt", setLang: () => {}, t: translations.pt });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("pt");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("prumo-lang");
    if (saved === "pt" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("prumo-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = { lang, setLang, t: translations[lang] };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
