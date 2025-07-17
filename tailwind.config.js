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
        'badger-red': '#c5050c',
        'cool-grey': '#646464',
        'main-bg': '#121212',
        'secondary-bg': '#1e1e1e',
        'surface-hover': '#2a2a2a',
        'primary-text': '#e0e0e0',
        'secondary-text': '#a0a0a0',
        'allthenticate-blue': '#0e0ef5',
        'allthenticate-green': '#09e670'
      }
    },
  },
  plugins: [],
}

