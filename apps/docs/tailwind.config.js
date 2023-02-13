/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'text-color-primary': 'var(--text-color-primary)',
        'text-color-secondary': 'var(--text-color-secondary)',
        'hover-text-color': 'var(--hover-text-color)',
      }
    },
  },
  plugins: [],
}
