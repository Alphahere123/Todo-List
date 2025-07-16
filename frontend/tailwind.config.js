/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui' ;
export default {
  content: [
    "./index.html",
    "./src/**/*.{mdx', 'md', 'jsx', 'js', 'tsx', 'ts'}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
    daisyui: {
    themes: [  "coffee","forest","synthwave","aqua","luxury"],
  },
}
