module.exports = {
  //mode: 'jit',
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#434C65',
      'secondary': '#4C667D',
      'tertiary': '#4C4D7D',
      'quatenery': '#493B73',
      'bronze' : '#CD7F32'
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#434C65',
      'secondary': '#4C667D',
      'tertiary': '#4C4D7D',
      'quatenery': '#493B73',
    }),
    extend: {},
  },
  variants: {
  extend: {},
  },
  plugins: [],
};
