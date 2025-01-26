/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'digital-seed': '#1AC78D',
        'primary': '#B84C37',
        'primary-dark': '#993c29',
        'secondary': '#5b5452',
        'secondary-dark': '#423a38',
        'disabled': '#afafaf',
        'dark': '#1D1E19',
        'light': '#fafafa',
        'button': '#efefef',
      },
      fontFamily: {
        'raleway': ['Raleway'],
        'lexend': ['Lexend'],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

