/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
    },
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

