import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationEN from '../src/components/LanguageSelect/locales/en/translation.json'
import translationHI from '../src/components/LanguageSelect/locales/hi/translation.json'
import translationTE from '../src/components/LanguageSelect/locales/te/translation.json'

const fallbackLng = ['en']
const availableLanguages = ['en', 'hi']

const resources = {
  en: {
    translation: translationEN
  },
  hi: {
    translation: translationHI
  },
  te: {
    translation: translationTE
  }
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,

    detection: {
      checkWhitelist: true
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false
    }
  })

export default i18n
