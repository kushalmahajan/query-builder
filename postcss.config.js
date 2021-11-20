module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      display: ['Oswald']
    }
  },
  variants: {},
  purge: ['./src/**/*.html', './src/**/*.js'],
  plugins: [require('tailwindcss'), require('autoprefixer')]
}
