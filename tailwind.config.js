module.exports = {
  purge: {
    enabled: true,
    content: ['./views/**/*.ejs', './public/js/main.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: {
          200: '#D9F5F1',
          500: '#00BFA5',
          600: '#2D8C7F',
          900: '#064038',
        },
        yellow: {
          100: "#FFE4BC",
          400: "#FFCC80",
          500: "#FFC266",
          600: "#FDAE54",
        }
      },
      maxWidth: {
        '1/4': '25%',
        '1/3': '33%',
        '1/2': '50%',
        '2/3': '66%',
        '3/4': '75%',
      },
      transitionProperty: {
        'max-h': 'max-height',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}