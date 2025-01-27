/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#eae9fc',
        'background': '#010104',
        'primary': '#3a31d8',
        'secondary': '#020024',
        'accent': '#0600c2',
      },
      fontFamily: {
        heading: ['montserrat', 'sans-serif'],
        body: ['montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)'},
          '100%': { opacity: 1, transform: 'translateY(0)'},
        }
      }
    },
  },
  plugins: [],
}

