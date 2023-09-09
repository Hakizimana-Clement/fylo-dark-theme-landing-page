/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      fontFamily: {
        "Open Sans": ["Open Sans', sans-serif"],
        Raleway: ["Raleway', sans-serif"],
      },

      colors: {
        primary: {
          "dark_blue(intro and email sign up background)":
            " hsl(217, 28%, 15%))",
          "dark_blue(main background)": "hsl(218, 28%, 13%)",
          "dark_blue(footer background)": " hsl(216, 53%, 9%)",
          "dark_blue(testimonials background)": " hsl(216, 53%, 9%)",
        },
        accent: {
          "Cyan (inside call-to-action gradient)": "hsl(176, 68%, 64%)",
          "Blue (inside call-to-action gradient)": "hsl(198, 60%, 50%)",
          "Light Red (error)": "hsl(0, 100%, 63%)",
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
