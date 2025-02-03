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
                'edit': '#4D5160'
            },
            fontFamily: {
                heading: ['montserrat', 'sans-serif'],
                body: ['montserrat', 'sans-serif'],
            },
            backgroundImage: {
                'blue-white-gradient': 'linear-gradient(45deg, #0600c2 0%, #eae9fc 100%)',
                'black-gradient': 'linear-gradient(black, black) padding-box',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': {opacity: 0, transform: 'translateY(10px)'},
                    '100%': {opacity: 1, transform: 'translateY(0)'},
                }
            }
        },
    },
    plugins: [],
}

