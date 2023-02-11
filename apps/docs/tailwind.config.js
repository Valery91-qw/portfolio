/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'text-color': 'var(--text-color)',
        'hover-text-color': 'var(--hover-text-color)',
      }
    },
  },
  plugins: [],
}
