module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        eczar: ['Eczar', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#98DCF3',
          dark: '#8BC8DC',
        },
        secondary: {
          DEFAULT: '#F9EA07',
          dark: '#E8DA0A',
        },
      },
      scale: {
        10: '.10',
        25: '.25',
      },
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      rotate: ['group-hover'],
      scale: ['group-hover'],
      opacity: ['group-hover'],
      height: ['group-hover'],
    },
  },
  plugins: [],
};
