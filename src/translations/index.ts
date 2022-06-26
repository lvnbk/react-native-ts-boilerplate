import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en, vi } from './resources/index'

export const defaultNS = 'translation'
export const resources = {
  en: {
    translation: en,
  },
} as const

i18n.use(initReactI18next).init({
  resources: {
    vi: { translation: en },
    en: { translation: vi },
  },
  lng: 'en',
})

export default i18n
