/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        secondary: "hsl(var(--color-secondary) / <alpha-value>)",
        body: "hsl(var(--body-bg) / <alpha-value>)",
        item: "hsl(var(--item-bg) / <alpha-value>)",
        danger: "hsl(var(--color-danger) / <alpha-value>)",
        "danger-light": "hsl(var(--color-danger-light) / <alpha-value>)",
        "wild-blue": "hsl(var(--color-wild-blue) / <alpha-value>)",
        cinder: "hsl(var(--color-cinder) / <alpha-value>)",
        "regent-gray": "hsl(var(--color-regent-gray) / <alpha-value>)",
        "link-water": "hsl(var(--color-link-water) / <alpha-value>)",
      },
      textColor: {
        default: "hsl(var(--text) / <alpha-value>)",
        "btn-secondary": "hsl(var(--btn-secondary-text) / <alpha-value>)",
        "btn-dark": "hsl(var(--btn-dark-text) / <alpha-value>)",
        draft: "hsl(var(--draft-text) / <alpha-value>)",
        detail: "hsl(var(--detail) / <alpha-value>)",
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
        xs: "1.3rem",
      },

      boxShadow: {
        default: "0 10px 10px -10px rgba(72,84,159,0.1)",
      },
      backgroundColor: {
        "btn-secondary": "hsl(var(--btn-secondary-bg) / <alpha-value>)",
        "btn-secondary-hover":
          "hsl(var(--btn-secondary-hover) / <alpha-value>)",
        "btn-dark": "hsl(var(--btn-dark-bg) / <alpha-value>)",
        "btn-dark-hover": "hsl(var(--btn-dark-hover) / <alpha-value>)",
        sidebar: "hsl(var(--sidebar-bg) / <alpha-value>)",
        draft: "var(--draft-bg)",
        amount: "hsl(var(--amount) / <alpha-value>)",
        modal: "rgba(0, 0, 0, 0.5)",
      },

      keyframes: {
        ripple: {
          "0%": {
            transform: "scale(0.8)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(2.4)",
            opacity: "0",
          },
        },
      },

      animation: {
        ripple: "1.2s ease-in-out 0s infinite normal none running ripple",
      },
    },
    borderColor: {
      input: "hsl(var(--input-border) / <alpha-value>)",
      "input-focus": "hsl(var(--input-border-focus) / <alpha-value>)",
    },
  },
  plugins: [],
};
