import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  // enable all built-in daisyUI themes so you can test any theme (e.g. "caramellatte")
  daisyui: { themes: ["valentine", "lemonade"]}
}