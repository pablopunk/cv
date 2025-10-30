import { defineMiddleware } from 'astro:middleware'
import { createTranslator } from './lib/translations'

export const onRequest = defineMiddleware((context, next) => {
  const locale = context.url.pathname.startsWith('/es') ? 'es' : 'en'
  context.locals._ = createTranslator(locale)
  return next()
})
