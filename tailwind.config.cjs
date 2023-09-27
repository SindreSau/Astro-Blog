/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-background': '#1a1a1a',
        'light-background': '#f5f5f5',
      },
    },
  },
  plugins: [],
};
