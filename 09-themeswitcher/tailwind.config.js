/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode:"class",//this has to be added in order for dark theme to work
  theme: {
    extend: {},
  },
  plugins: [],
}

