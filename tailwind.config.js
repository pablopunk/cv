module.exports = {
  purge: ['pages/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  mode: 'JIT',
  theme: {
    extend: {
      colors: {
        fg: 'var(--color-fg)',
        bg: 'var(--color-bg)',
        bg2: 'var(--color-bg2)',
        accent: 'var(--color-accent)',
        accent2: 'var(--color-accent2)',
      },
      borderColor: (theme) => ({
        ...theme('colors'),
        DEFAULT: 'var(--color-border)',
      }),
      screens: {
        print: { raw: 'print' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
