import { defineMiddleware } from 'astro:middleware'
import { getLangFromUrl, useTranslations } from './i18n/utils'

export const onRequest = defineMiddleware((context, next) => {
  const lang = getLangFromUrl(context.url)
  const t = useTranslations(lang)

  // Store the translation function in locals
  context.locals.t = t

  return next()
})
