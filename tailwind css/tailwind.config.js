/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
      },
      colors: {
        primary: '#1F0B0B',
        secondary: '#FFBE42',
        whity: '#F4E5D7',
        warmy: '#F2B678',
        browny: '#2D3021',
        darky: '#262626'
      },
    },
  },
  plugins: [],
}

