/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
      padding: "3rem",
    },
    screens: {
      sm: '480px',
      // @media (min-width: 480px) { ... }
      md: '768px',
      // @media (min-width: 768px) { ... }
      lg: '976px',
      // @media (min-width: 976px) { ... }
      xl: '1440px',
      // @media (min-width: 1440px) { ... }
    },
    extend: {

    }
  },
  plugins: [],
}

// content: ["./*.{html}"],
  // content: ["./*.html"],
  // content: ["./*.{html}"],
  // content: ["./**/*.{html,js}"],