/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'badger-red': '#c5050c',
        'cool-grey': '#646464',
        'red-1000': '#1E0000'
      }
    },
  },
  plugins: [],
}

