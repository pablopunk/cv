# AGENTS.md

## Repository Overview

- **Name:** cv.pablopunk.com
- **Version:** 1.0.0
- **License:** MIT

## Scripts

- `dev`: astro dev server on port 1234
- `start`: start astro dev server
- `build`: build for production
- `preview`: preview production build
- `astro`: astro CLI
- `lint`, `format`, `check`, `check:ci`: biome linting and formatting commands

## Astro Configuration (astro.config.mjs)

- Integrations:
  - react
  - tailwind
- Server:
  - host: true
- i18n:
  - defaultLocale: en
  - locales: [en, es]
  - routing:
    - prefixDefaultLocale: false

## TypeScript Configuration (tsconfig.json)

- Extends `astro/tsconfigs/strict`
- Compiler options:
  - jsx: react-jsx
  - baseUrl: .
  - paths:
    - `@/*` -> `src/*`

## Tailwind CSS Configuration (tailwind.config.js)

- Content: all astro, html, js, jsx, md, mdx, svelte, ts, tsx, vue files under src
- Dark mode: class
- Theme extensions:
  - colors: fg, bg, bg2, accent, accent2 mapped to CSS variables
  - borderColor default set to CSS variable
- Print media query screen added

## Source Directory Structure (src/)

- components/
  - Astro components like Button, CVPage, Education, Experience, LanguagePicker, Other, Section, Side, Skill, Skills, T, TopButtons
  - React components: PrintButton.tsx, ThemeToggle.tsx
- i18n/
  - translations.ts, utils.ts
- layouts/
  - Layout.astro
- pages/
  - index.astro
  - es/index.astro (Spanish locale)
- styles/
  - global.css
- types/
  - astro.d.ts
- env.d.ts
- middleware.ts

---
This document summarizes key configuration, scripts and structure relevant for LLM agents working with the cv-astro repository.

> **Note:** If you make significant changes to the repository, such as adding or removing scripts, modifying config files, or restructuring the source directories, please update this AGENTS.md file to keep it accurate and helpful.
