module.exports = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  async rewrites() {
    return [
      {
        source: '/count.js',
        destination: 'https://gc.zgo.at/count.js',
        locale: false,
      },
      {
        source: '/goat',
        destination: 'https://cvpablopunk.goatcounter.com/count',
        locale: false,
      },
    ]
  },
}
