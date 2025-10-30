import esTranslations from './es.json'

const translations: Record<string, Record<string, string>> = {
  es: esTranslations,
}

export type TranslationFunction = (key: string) => string

export function getTranslation(locale: string, key: string): string {
  if (locale === 'en') return key
  return translations[locale]?.[key] || key
}

export function createTranslator(locale: string): TranslationFunction {
  return (key: string) => getTranslation(locale, key)
}