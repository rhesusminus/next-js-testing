module.exports = {
  purge: [
    './components/**/*.js',
    './components/**/*.ts',
    './components/**/*.jsx',
    './components/**/*.tsx',
    './pages/**/*.js',
    './pages/**/*.ts',
    './pages/**/*.jsx',
    './pages/**/*.tsx'
  ],
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')]
}
