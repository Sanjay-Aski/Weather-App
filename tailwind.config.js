/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4f8cff', // vibrant blue
          DEFAULT: '#2563eb', // blue-600
          dark: '#1e40af', // blue-800
        },
        secondary: {
          light: '#fbbf24', // yellow-400
          DEFAULT: '#f59e42', // custom orange
          dark: '#b45309', // yellow-800
        },
        accent: {
          light: '#34d399', // green-400
          DEFAULT: '#10b981', // green-600
          dark: '#047857', // green-800
        },
        background: {
          light: '#f3f4f6', // gray-100
          DEFAULT: '#f9fafb', // gray-50
          dark: '#1e293b', // slate-800
        },
        surface: {
          light: '#ffffff',
          dark: '#334155', // slate-700
        },
        text: {
          light: '#1e293b', // slate-800
          dark: '#f1f5f9', // slate-100
        },
      },
    },
  },
  plugins: [
    // Adding the custom plugin for hiding scrollbars
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
}
