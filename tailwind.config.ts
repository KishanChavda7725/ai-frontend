/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(250 250 250)',
        foreground: 'rgb(15 15 15)',
        muted: 'rgb(243 243 243)',
        ring: 'rgb(59 130 246)',
      },
    },
  },
  plugins: [],
};
