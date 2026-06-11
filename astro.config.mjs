import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  adapter: vercel({
    isr: {
      expiration: 60 * 60 * 24,
    },
  }),
  output: 'server',
  server: {
    host: true,
  },
  site: 'https://cv.pablopunk.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
})
