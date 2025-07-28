/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'metaverse-purple': '#7c3aed',
        'metaverse-blue': '#2563eb',
        'metaverse-pink': '#ec4899',
        'metaverse-green': '#10b981',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}