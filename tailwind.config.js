/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundColors: { // 可以扩展样式类
        "custom-grayscale": '#333'
      },
      height: {
        40: '40px'
      },
      textColor: {
        "custom-gray": '#b0b0b0'
      },
      padding: {
        1: '16px'
      }
    },
  },
  plugins: [],
}
