/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Add this line to ensure Tailwind purges unused styles in your React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

