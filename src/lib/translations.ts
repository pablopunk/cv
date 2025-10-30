import esTranslations from './es.json'

const translations = {
  es: esTranslations,
} as const

export type TranslationFunction = (key: string) => string

export function getTranslation(locale: string, key: string): string {
  if (locale === 'en') return key // English is the default
  return translations[locale as keyof typeof translations]?.[key] || key
}

export function createTranslator(locale: string): TranslationFunction {
  return (key: string) => getTranslation(locale, key)
}