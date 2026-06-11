import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  adapter: vercel(),
  output: 'hybrid',
  experimental: {
    serverIslands: true,
  },
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
