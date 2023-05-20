/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        primary: '#33C7C7',
        primary2:'#F2F9FD',
        primary3:'#B8B8B8'
      }
    },
  },
  plugins: [],
}

