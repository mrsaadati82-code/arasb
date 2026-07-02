export type Locale = 'fa' | 'en' | 'ar';

export interface LanguageConfig {
  code: Locale;
  name: string;
  nativeName: string;
  direction: 'rtl' | 'ltr';
}

export const LANGUAGES: Record<Locale, LanguageConfig> = {
  fa: { code: 'fa', name: 'Persian', nativeName: 'فارسی', direction: 'rtl' },
  en: { code: 'en', name: 'English', nativeName: 'English', direction: 'ltr' },
  ar: { code: 'ar', name: 'Arabic', nativeName: 'العربية', direction: 'rtl' },
};

export const DEFAULT_LOCALE: Locale = 'en';

export function detectLocale(): Locale {
  // 1. Check URL path prefix
  const path = window.location.pathname;
  for (const code of Object.keys(LANGUAGES) as Locale[]) {
    if (path === `/${code}` || path.startsWith(`/${code}/`)) {
      return code;
    }
  }
  // 2. Check localStorage
  const saved = localStorage.getItem('arasb-locale');
  if (saved && LANGUAGES[saved as Locale]) {
    return saved as Locale;
  }
  // 3. Default
  return DEFAULT_LOCALE;
}

export function setDocumentDirection(locale: Locale) {
  const lang = LANGUAGES[locale];
  document.documentElement.lang = locale;
  document.documentElement.dir = lang.direction;
  // Also update font-css.php query to bust cache if needed
}

export type TranslationKey = string;

// Simple translation map - will be populated from API
export type TranslationMap = Record<TranslationKey, string>;
