'use client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import nextI18nextConfig from '@/next-i18next.config';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ...nextI18nextConfig,
    lng: 'pt',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      order: ['queryString', 'cookie'],
      caches: ['cookie'],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
