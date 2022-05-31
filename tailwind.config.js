module.exports = {
  content: ['./src/*.html'],
  safelist: [
    '!bg-blue-jumbotron',
    'bg-blue-jumbotron',
    'carousel-item-next',
    'carousel-item-left',
    'carousel-item-prev,',
    'carousel-item-right'
  ],
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
