/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-background)',
        secondary: 'var(--color-background-secondary)',
        accent: 'var(--color-background-accent)',
        'accent-hover': 'var(--color-text-accent-hover)',
      },
      textColor: {
        primary: 'var(--color-text)',
        muted: 'var(--color-text-muted)',
        accent: 'var(--color-text-accent)',
        'accent-hover': 'var(--color-text-accent-hover)',
      },
      borderColor: {
        primary: 'var(--color-text)',
        muted: 'var(--color-border-muted)',
        accent: 'var(--color-text-accent)',
      },
      fontFamily: {
        base: ['Lato', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        card: '2px 2px 15px 2px var(--color-shadow)',
        'card-hover': '2px 2px 20px 6px var(--color-shadow)',
      },
      dropShadow: {
        card: '0px 2px 15px var(--color-shadow)',
      },
      transitionProperty: {
        card: 'box-shadow transform',
      },
    },
  },
  // New feature to fix hover on touch devices
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
