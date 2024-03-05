/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundColor: { // 可以扩展样式类
        "custom-gray": '#333',
        "custom-gray2": '#424242'
      },
      height: {
        40: '40px',
        100: '100px'
      },
      width: {
        1226: '1226px',
        120: '120px',
        320: '320px'
      },
      lineHeight: {
        100: '100px'
      },
      borderColor: {
        "custom-gray": '#424242'
      },
      marginLeft: {
        13: '13px'
      },
      textColor: {
        "custom-light-gray": '#b0b0b0',
        "custom-gray": '#424242'
      },
      textColor: {
        "custom-gray": '#b0b0b0'
      },
      padding: {
        7: '7px'
      },
      zIndex: {
        50: 50
      }
    },
  },
  plugins: [],
}
