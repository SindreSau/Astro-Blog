/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-background)',
        secondary: 'var(--color-background-secondary)',
      },
      textColor: {
        primary: 'var(--color-text)',
        muted: 'var(--color-text-muted)',
        accent: 'var(--color-text-accent)',
      },
      fontFamily: {
        base: ['Lato', 'sans-serif'],
        heading: ['Cabin Sketch', 'cursive'],
      },
    },
  },
  plugins: [],
};
