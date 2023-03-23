const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },

    extend: {
      fontFamily: {
         mont: ["MONT", 'cursive'],
      },

      colors: {
        'spawn-white' : '#F1F2F3',
        'spawn-purple' : '#1E0521',
        'spawn-violet' : '#C82586',
      }


    },
  },
 
}
