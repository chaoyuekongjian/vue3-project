/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontSize: {
        35: '35px'
      },
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
      },
      borderRadius: {
        15: '15%'
      },
      brightness: {
        100: "1",
        115: "1.15",
        130: "1.3",
        145: "1.45",
      },
      boxShadow: {
        custom: '0 0 0.1em rgba(0, 0, 0, 0.3)'
      },
      keyframes: {
        slide: {
          '0%': {
            transform: 'translateX(0)',
            filter: 'brightness(1)'
          },
          '100%': {
            transform: 'translateX(120px)',
            filter: 'brightness(1.45)'
          }
        },
        "jump-off-1": {
          "0%": { transform: "rotate(0deg)" },
          "15%": { transform: "rotate(0deg)" },
          "35%": {
            transformOrigin: "-50% center",
            transform: "rotate(-180deg)",
          },
          "100%": {
            transformOrigin: "-50% center",
            transform: "rotate(-180deg)",
          },
        },
        "jump-off-2": {
          "0%": { transform: "rotate(0deg)" },
          "30%": { transform: "rotate(0deg)" },
          "50%": {
            transformOrigin: "-50% center",
            transform: "rotate(-180deg)",
          },
          "100%": {
            transformOrigin: "-50% center",
            transform: "rotate(-180deg)",
          },
        },
        "jump-off-3": {
          "0%": { transform: "rotate(0deg)" },
          "45%": { transform: "rotate(0deg)" },
          "65%": {
            transformOrigin: "-50% center",
            transform: "rotate(-180deg)",
          },
          "100%": {
            transformOrigin: "-50% center",
            transform: "rotate(-180deg)",
          },
        },
        "jump-off-4": {
          "0%": { transform: "rotate(0deg)" },
          "60%": { transform: "rotate(0deg)" },
          "80%": {
            transformOrigin: "-50% center",
            transform: "rotate(-180deg)",
          },
          "100%": {
            transformOrigin: "-50% center",
            transform: "rotate(-180deg)",
          },
        },
        "jump-down-1": {
          "5%": { transform: "scale(1, 1)" },
          "15%": {
            transformOrigin: "center bottom",
            transform: "scale(1.3, 0.7)",
          },
          "20%": {
            transformOrigin: "center bottom",
            transform: "scale(0.8, 1.4)",
          },
          "25%": {
            transformOrigin: "center bottom",
            transform: "scale(0.8, 1.4)",
          },
          "40%": {
            transformOrigin: "center top",
            transform: "scale(1.3, 0.7)",
          },
          "55%": { transform: "scale(1, 1)" },
          "100%": { transform: "scale(1, 1)" },
        },
        "jump-down-2": {
          "20%": { transform: "scale(1, 1)" },
          "30%": {
            transformOrigin: "center bottom",
            transform: "scale(1.3, 0.7)",
          },
          "35%": {
            transformOrigin: "center bottom",
            transform: "scale(0.8, 1.4)",
          },
          "40%": {
            transformOrigin: "center bottom",
            transform: "scale(0.8, 1.4)",
          },
          "55%": {
            transformOrigin: "center top",
            transform: "scale(1.3, 0.7)",
          },
          "70%": { transform: "scale(1, 1)" },
          "100%": { transform: "scale(1, 1)" },
        },
        "jump-down-3": {
          "35%": { transform: "scale(1, 1)" },
          "45%": {
            transformOrigin: "center bottom",
            transform: "scale(1.3, 0.7)",
          },
          "50%": {
            transformOrigin: "center bottom",
            transform: "scale(0.8, 1.4)",
          },
          "55%": {
            transformOrigin: "center bottom",
            transform: "scale(0.8, 1.4)",
          },
          "70%": {
            transformOrigin: "center top",
            transform: "scale(1.3, 0.7)",
          },
          "85%": { transform: "scale(1, 1)" },
          "100%": { transform: "scale(1, 1)" },
        },
        "jump-down-4": {
          "50%": { transform: "scale(1, 1)" },
          "60%": {
            transformOrigin: "center bottom",
            transform: "scale(1.3, 0.7)",
          },
          "65%": {
            transformOrigin: "center bottom",
            transform: "scale(0.8, 1.4)",
          },
          "70%": {
            transformOrigin: "center bottom",
            transform: "scale(0.8, 1.4)",
          },
          "85%": {
            transformOrigin: "center top",
            transform: "scale(1.3, 0.7)",
          },
          "100%": { transform: "scale(1, 1)" },
        },
      },
      // 定义 animation
      animation: {
        slide: "slide 1.5s ease-in-out infinite alternate",
        "jump-off-1": "jump-off-1 1.5s ease-in-out infinite alternate",
        "jump-off-2": "jump-off-2 1.5s ease-in-out infinite alternate",
        "jump-off-3": "jump-off-3 1.5s ease-in-out infinite alternate",
        "jump-off-4": "jump-off-4 1.5s ease-in-out infinite alternate",
        "jump-down-1": "jump-down-1 1.5s ease-in-out infinite alternate",
        "jump-down-2": "jump-down-2 1.5s ease-in-out infinite alternate",
        "jump-down-3": "jump-down-3 1.5s ease-in-out infinite alternate",
        "jump-down-4": "jump-down-4 1.5s ease-in-out infinite alternate",
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      backgroundColor: ['group-hover'],
      textColor: ['group-hover'],
    }
  },
  plugins: [],
}
