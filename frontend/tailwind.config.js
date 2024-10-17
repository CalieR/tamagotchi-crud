/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      honk: ['Honk', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1.25rem',
      screens: {
        xl: '120px',
        '2xl': '1200px',
      },
    },
  },
  daisyui: {
    themes: ['cyberpunk', 'acid'],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
