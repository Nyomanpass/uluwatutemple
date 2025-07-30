// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translation.json';
import idTranslation from './locales/id/translation.json';
import zhTranslation from './locales/zh/translation.json';
import koTranslation from './locales/ko/translation.json';
import hiTranslation from './locales/hi/translation.json'

i18n
  .use(LanguageDetector) // Mendeteksi bahasa dari browser
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // React sudah aman dari XSS
    },
    resources: {
      en: {
        translation: enTranslation
      },
      id: {
        translation: idTranslation
      },
      zh: {
        translation: zhTranslation
      },
      ko: {
        translation: koTranslation
      },
      hi: {
        translation: hiTranslation
      }
    }
  });

export default i18n;
