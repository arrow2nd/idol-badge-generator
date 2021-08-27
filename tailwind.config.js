module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    safelist: ['hover:text-green-500', 'hover:text-imas']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        imas: '#FF74B8'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
