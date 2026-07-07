import { expect, test } from 'vitest'

import { translations } from '../i18n/translations'

test('resume data loads', () => {
  expect(translations.en['personal.name']).toBe('Pablo P Varela')
  expect(translations.en['personal.title']).toBe('Full Stack Developer')
  expect(translations.en['company.maze']).toBe('Maze')
  expect(translations.es['section.experience']).toBe('Experiencia')
  expect(translations.es['personal.country']).toBe('España')
})
