/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        maintext: '#4F3A7E',
        mainbg: '#3DDDF2',
      }
    },
  },
  plugins: [],
  darkMode: ['class', '.darkmode'],
}
