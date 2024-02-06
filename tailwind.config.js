/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        default: "hsl(var(--text) / <alpha-value>)",
      },
      fontFamily: {
        "sans-serif": ["League Spartan", "sans-serif"],
      },
      letterSpacing: {
        xl: "-1px",
        lg: "-0.75px",
        md: "-0.25px",
      },

      lineHeight: {
        xl: "3.3rem",
        lg: "2.4rem",
        md: "2.2rem",
        sm: "1.8rem",
        xs: "1.5rem",
      },

      fontWeight: {
        medium: 500,
        bold: 700,
      },

      fontSize: {
        lg: "3.6rem",
        md: "2.4rem",
        sm: "1.5rem",
        body: "1.3rem",
      },

      backgroundColor: {
        body: "hsl(var(--body-bg) / <alpha-value>)",
        item: "hsl(var(--item-bg) / <alpha-value>)",
      },

      boxShadow: {
        default: "0 10px 10px -10px #48549F",
      },
    },
  },
  plugins: [],
};
