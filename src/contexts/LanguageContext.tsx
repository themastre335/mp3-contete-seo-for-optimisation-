import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, SUPPORTED_LANGUAGES } from '../translations';
import type { TranslationKey } from '../translations';
import type { LanguageCode } from '../types/language';

type LanguageContextType = {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Get language from URL path or default to 'en'
  const getInitialLanguage = (): LanguageCode => {
    const path = window.location.pathname;
    const langCode = path.split('/')[1];
    return SUPPORTED_LANGUAGES.some(lang => lang.code === langCode) ? langCode : 'en';
  };

  const [language, setLanguage] = useState<LanguageCode>(getInitialLanguage());

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = language;
    
    // Update canonical and alternate links
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${window.location.origin}/${language}`);
    }
  }, [language]);

  const t = (key: TranslationKey): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};