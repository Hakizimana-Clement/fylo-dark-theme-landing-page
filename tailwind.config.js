/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      fontFamily: {
        OpenSans: ["Open-Sans, sans-serif"],
        Raleway: ["Raleway, sans-serif"],
      },

      colors: {
        primary: {
          "intro-and-email-sign-up-background": " hsl(217, 28%, 15%))",
          "main-background": "hsl(218, 28%, 13%)",
          "footer-background": " hsl(216, 53%, 9%)",
          "testimonials-background": " hsl(216, 53%, 9%)",
        },
        accent: {
          "Blue-(inside-call-to-action gradient)": "hsl(198, 60%, 50%",
          "Cyan-(inside-call-to-action gradient)": "hsl(176, 68%, 64%",
          "Light-Red-(error)": "hsl(0, 100%, 63%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
        },
      },
    },

    variants: {
      extend: {
        backgroundColor: ["active"],
      },
    },
    plugins: [],
  },
};
