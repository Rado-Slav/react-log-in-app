import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './translations/en.json';
import bgTranslation from './translations/bg.json';

// Initialize i18next
i18n
  .use(initReactI18next) // Pass i18n instance to react-i18next.
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      bg: {
        translation: bgTranslation,
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;