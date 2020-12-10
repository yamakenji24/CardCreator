module.exports = {
  purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'crd': '40rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
