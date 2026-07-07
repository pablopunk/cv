import { experimental_AstroContainer } from 'astro/container'
import reactClientRenderer from '@astrojs/react/client.js'
import reactServerRenderer from '@astrojs/react/server.js'
import { expect, test } from 'vitest'

import EsPage from '../pages/es/index.astro'
import IndexPage from '../pages/index.astro'
import { useTranslations } from '../i18n/utils'

async function renderPage(component: typeof IndexPage, pathname: string, lang: 'en' | 'es') {
  const container = await experimental_AstroContainer.create()
  container.addServerRenderer({ renderer: reactServerRenderer })
  container.addClientRenderer({
    name: '@astrojs/react',
    entrypoint: reactClientRenderer,
  })

  return container.renderToString(component, {
    request: new Request(`https://example.com${pathname}`),
    locals: {
      t: useTranslations(lang),
    },
  })
}

test('pages render without errors', async () => {
  await expect(renderPage(IndexPage, '/', 'en')).resolves.toContain('Pablo P Varela')
  await expect(renderPage(EsPage, '/es/', 'es')).resolves.toContain('Pablo P Varela')
})

test('language switching works', async () => {
  const enHtml = await renderPage(IndexPage, '/', 'en')
  expect(enHtml).toContain('href="/es/"')
  expect(enHtml).toContain('English')

  const esHtml = await renderPage(EsPage, '/es/', 'es')
  expect(esHtml).toContain('href="/"')
  expect(esHtml).toContain('Español')
})
