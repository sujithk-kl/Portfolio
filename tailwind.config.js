/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        boxShadow: {
          'glow-light': '0 0 15px rgba(96, 165, 250, 0.7)',
          'glow-dark': '0 0 15px rgba(236, 72, 153, 0.7)',
        },
      },
    },
    plugins: [],
  }
  