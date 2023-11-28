/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'smallMobile': "350px",
      'mobile': '400px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  plugins: [],
  }
}

