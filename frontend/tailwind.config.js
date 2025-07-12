/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui' ;
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,mjs,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
    daisyui: {
    themes: [  "coffee","forest","synthwave","aqua","luxury"],
  },
}