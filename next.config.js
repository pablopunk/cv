module.exports = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  async rewrites() {
    return [
      {
        source: '/(es|en)/count.js',
        destination: 'https://gc.zgo.at/count.js',
        locale: false,
      },
      {
        source: '/(es|en)/goat',
        destination: 'https://cvpablopunk.goatcounter.com/count',
        locale: false,
      },
    ]
  },
}
