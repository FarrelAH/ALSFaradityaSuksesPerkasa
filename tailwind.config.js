module.exports = {
  content: ['./src/*.html'],
  safelist: [
    'carousel-item-next',
    'carousel-item-left',
    'carousel-item-prev,',
    'carousel-item-right'
  ],
  theme: {
  },
  variants: {},
  plugins: [require("daisyui")],
};
