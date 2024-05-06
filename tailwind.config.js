/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        RobotoMedium: ["RobotoMedium"],
        RobotoSemibold: ["RobotoSemibold"],
      },
      colors: {
        'main': '#33afa6',
        'primary': '#2383bc',
        'red': '#b22830',
        'green': '#006400',
        'hoverGreen': '#004500'
      }
    },
  },
  plugins: [],
}