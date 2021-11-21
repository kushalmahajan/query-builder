module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      display: ['Oswald']
    }
  },
  variants: {},
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.js'],
    css: ['./dist/index.css']
  },
  plugins: [require('tailwindcss'), require('autoprefixer')]
}
