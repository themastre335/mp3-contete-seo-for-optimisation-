import { Language } from '../types/language';

export const translations = {
  en: {
    languageName: 'English',
    title: 'YouTube to MP3 Converter',
    description: 'Convert your favorite YouTube videos to MP3 format instantly',
    // ... existing translations ...
  },
  cs: {
    languageName: 'Čeština',
    title: 'Konvertor YouTube do MP3',
    description: 'Okamžitě převeďte svá oblíbená YouTube videa do formátu MP3',
    // ... same keys as English with Czech translations
  },
  tr: {
    languageName: 'Türkçe',
    title: 'YouTube MP3 Dönüştürücü',
    description: 'Favori YouTube videolarınızı anında MP3 formatına dönüştürün',
  },
  // Add all other languages similarly
  ja: {
    languageName: '日本語',
    title: 'YouTube MP3 コンバーター',
    description: 'お気に入りのYouTube動画をMP3形式に即座に変換',
  },
  // ... continue for all languages
} as const;

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'ar', name: 'عربي', flag: '🇸🇦' },
  { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
  { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'ro', name: 'Română', flag: '🇷🇴' },
  { code: 'zh', name: '中文(繁體)', flag: '🇹🇼' }
];

export type TranslationKey = keyof typeof translations.en;