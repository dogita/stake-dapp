/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      screens: {
        "sm":"320px",
        "md":"768px",
        "lg":"1024px",
        },
        boxShadow: {
          '3xl': '0px 0px 15px 0px rgba(0, 200, 80, 0.5)',
          '5xl': '-1px -1px 25px 8px rgba(0, 200, 80, 0.3)',
        },
    },
  },
  plugins: [],
}

