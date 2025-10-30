/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { TranslationFunction } from './lib/translations'

declare namespace App {
  interface Locals {
    _: TranslationFunction
  }
}
