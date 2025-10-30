/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare global {
  interface Window {
    __toggleDarkMode: () => void
  }
}

export {}