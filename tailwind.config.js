/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        primary: 'poppins'
      },
      colors: {
        utama : '#000000',
        kedua: '#120F0E',
        ketiga: '#1B1715'
      }
    },
  },
  plugins: [],
}

