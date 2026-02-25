/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100%) rotate(0deg)'},
          '100%': { transform: 'rotate(360deg) translateX(100%) rotate(-360deg)'}
        },
      },
      animation: {
        orbit: 'orbit 4s linear infinite'
      },
      colors: {
        'badger-red': '#7f1d2a',
        'cool-grey': '#646464',
        'main-bg': '#0d0d0e',
        'secondary-bg': '#171719',
        'surface-hover': '#19191b',
        'surface': '#111112',
        'border': '#2b2b2f',
        'primary-text': '#e4e4e7',
        'secondary-text': '#a1a1aa',
        'primary': '#7f1d2a',
        'primary-hover': '#991b2d',
        'allthenticate-blue': '#0e0ef5',
        'allthenticate-green': '#09e670',
        'nav-yellow': '#d19f2a',
        'nav-blue': '#008c95',
        'cpp-blue': '#00599c',
        'cpp-light': '#659AD2',
        'schneider-orange': '#f3601c',
        'cherry-red': '#d2042d',
      }
    },
  },
  plugins: [],
}

