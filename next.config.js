module.exports = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  async rewrites() {
    return [
      {
        source: 'goat',
        destination: 'https://gc.zgo.at/count.js',
      },
    ]
  },
}
