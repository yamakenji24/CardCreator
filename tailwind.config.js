module.exports = {
  purge: ["./src/**/*.{ts, tsx}"],

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
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer"
  ],
}
