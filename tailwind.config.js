module.exports = {
  content: ['./src/*.html'],
  safelist: [
    'carousel-item-next',
    'carousel-item-left',
    'carousel-item-prev,',
    'carousel-item-right'
  ],
  theme: {
    colors: {
      'blue-jumbotron': '#003556',
    },
  },
  variants: {},
  plugins: [require("daisyui")],
};
