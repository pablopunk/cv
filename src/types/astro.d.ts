/// <reference types="astro/client" />

import type { TranslationKey } from '../i18n/translations'

declare namespace App {
  interface Locals {
    t: (key: TranslationKey) => string
  }
}
