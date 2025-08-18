/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure this covers your JS/TS/JSX/TSX files
  ],
  theme: {
    extend: {
      fontFamily:{
        inria: ['Inria Serif', 'serif'],
      }
    },
  },
  plugins: [],
}
