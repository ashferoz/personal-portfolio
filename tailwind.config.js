/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        proxima: ["proxima-nova", "sans-serif"],
        ivy: ["ivypresto-display", "serif"],
      }
    },
  },
  plugins: [],
}

