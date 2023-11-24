/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '100px',
        sm: '428px',
        md: '810px',
        lg: '1440px',
        xl: '1920px',
      },
      colors: {
        'active': '#5688e5',
        'inactive': '#fff'
      }
    },
  },
  plugins: [],
}

