/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        background : "#fff",
        surface : "#111111",
        primary : "#8b5cf6",
        secondary : "#3b82f6"
      },
      fontFamily: {
        sans : ['Inter' , 'sans-serif'],
      }
    },
  },
  plugins: [],
}

