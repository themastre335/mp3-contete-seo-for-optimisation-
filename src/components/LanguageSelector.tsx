import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SUPPORTED_LANGUAGES } from '../translations';
import { Languages } from 'lucide-react';

export function LanguageSelector() {
  const { language, t } = useLanguage();

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 hover:bg-white/20 transition">
        <Languages className="w-5 h-5" />
        <span>{SUPPORTED_LANGUAGES.find(lang => lang.code === language)?.name}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg overflow-hidden hidden group-hover:block">
        <div className="max-h-96 overflow-y-auto py-1">
          {SUPPORTED_LANGUAGES.map((lang) => (
            <a
              key={lang.code}
              href={`/${lang.code}`}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 transition"
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}