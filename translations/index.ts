const es = require('./es.json')

const translations = {
  es,
}

let locale = 'en'

export function init(l): void {
  locale = l
}

export function _(str): string {
  if (translations[locale]?.[str]) {
    return translations[locale]?.[str]
  }

  // console.log(`"${str}": "${str}"`)

  return str
}
