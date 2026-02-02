/** @type {import('tailwindcss').Config} */
export default {
    content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
        ],
    theme: {
          extend: {
                  colors: {
                            navy: {
                                        50: '#E8EBF0',
                                        100: '#C5CCD9',
                                        200: '#9EABC0',
                                        300: '#7789A7',
                                        400: '#596F94',
                                        500: '#3B5681',
                                        600: '#2D4166',
                                        700: '#1F2D4A',
                                        800: '#0A1628',
                                        900: '#050B14',
                            },
                            gold: {
                                        50: '#FBF7EC',
                                        100: '#F5EBCE',
                                        200: '#EEDA9E',
                                        300: '#E7C96F',
                                        400: '#DFBA4F',
                                        500: '#D4AF37',
                                        600: '#B8942B',
                                        700: '#8C7121',
                                        800: '#604E16',
                                        900: '#342B0C',
                            },
                  },
                  fontFamily: {
                            sans: ['Inter', 'system-ui', 'sans-serif'],
                  },
          },
    },
    plugins: [],
}
