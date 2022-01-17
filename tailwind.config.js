module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: ['hover:text-green-500', 'hover:text-imas'],
  theme: {
    extend: {
      colors: {
        imas: '#FF74B8'
      }
    }
  },
  plugins: []
}
