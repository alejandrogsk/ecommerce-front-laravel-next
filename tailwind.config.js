const colors = require('tailwindcss/colors')



module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'homebg': "linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/homebg.jpg')",
        'laptopbg': "linear-gradient(to right bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/homelaptopbg.jpg')",
        'phonebg': "linear-gradient(to right bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/homephonebg.jpg')",
        'sofasbg': "linear-gradient(to right bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/homesofabg.jpg')"
      }),
      colors:{
        cyan: colors.cyan
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
