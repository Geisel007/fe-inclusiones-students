import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { en, es } from '../lang'

const detectionOptions = {
  order: ['navigator', 'cookie', 'sessionStorage', 'localStorage']
}

const resources = {
  en: {
    translation: en
  },
  es: {
    translation: es
  }
}

i18n.use(LanguageDetector).use(initReactI18next).init({
  detection: detectionOptions,
  compatibilityJSON: 'v3',
  resources,
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
