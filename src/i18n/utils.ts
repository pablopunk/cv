import { translations, defaultLang, type Language, type TranslationKey } from './translations'
import { getRelativeLocaleUrl } from 'astro:i18n'

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/')
  if (lang in translations) return lang as Language
  return defaultLang
}

export function useTranslations(lang: Language) {
  return function t(key: TranslationKey): string {
    return translations[lang][key] || translations[defaultLang][key] || key
  }
}

export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, l: string = lang) {
    return getRelativeLocaleUrl(l, path)
  }
}