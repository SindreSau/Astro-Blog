/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'dark-background': '#1a1a1a',
        'dark-background-secondary': '#2a2a2a',
        'dark-darker': '#121212',
        'light-background': '#fff',
        'light-background-secondary': '#e5e5e5',
        'light-darker': '#ccccda',
      },

      primary: {
        light: '#ff0',
        DEFAULT: '#ff0',
        dark: '#abc',
      },
    },
  },
  plugins: [],
};
