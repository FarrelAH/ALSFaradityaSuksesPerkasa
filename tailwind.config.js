module.exports = {
  content: ['./src/*.html'],
  theme: {
    extend: {
      colors: {
        'blue-jumbotron': '#003556',
      },
    }
  },
  variants: {},
  plugins: [require("daisyui")],
};
