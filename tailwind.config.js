const plugin = require("tailwindcss/plugin");
const base = require("./plugins/base");
const { headingsBase, heading } = require("./plugins/headings");
const article = require("./plugins/article");
const legend = require("./plugins/legend");
const bottomNav = require("./plugins/bottom-nav");
const sidebar = require("./plugins/sidebar");

module.exports = {
  purge: [],
  theme: {
    colors: {
      primary: "#000000",
      black: "#444445",
      st: "#2d2e31",
      white: "#ffffff",
      gray: "#c4c4c4",
      semiGray: "#F0F0F0",
      lightGray: "#dfe0e1",
      blue: "#0546d8",
      cadetblue: "#eaeff2",
      lightBlue: "#2270EE",
      yellow: "#FBF4A6",
    },
    fontSize: {
      xxs: "12px",
      xs: "14px",
      sm: "16px",
      base: "20px",
      lg: "24px",
      xl: "28px",
      "2xl": "30px",
      "3xl": "34px",
      "4xl": "40px",
      "5xl": "48px",
      "6xl": "64px",
    },
    fontFamily: {
      Rubik: "Rubik",
      Barlow: "Barlow Condensed",
    },
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1200px",
      },
    },

    extend: {
      inset: {
        "1/2": "50%",
      },
      zIndex: {
        2: 2,
      },
      width: {
        75: "18.75rem",
        70: "17.5rem",
        18: "4.5rem",
      },
      height: {
        15: "3.75rem",
        30: "7.5rem",
        88: "22rem",
        18: "4.5rem",
        "84px": "84px",
      },
      spacing: {
        100: "25rem",
      },
      maxHeight: {
        40: "160px",
      },
      minHeight: {
        88: "22rem",
      },
    },
  },
  variants: {
    borderWidth: ["responsive", "last", "hover", "focus"],
  },
  plugins: [
    plugin(function ({ addBase, addComponents, config }) {
      addBase(base(config));
      addBase(headingsBase(config));
      addComponents(heading(config));
      addComponents(article(config));
      addComponents(legend(config));
      addComponents(bottomNav(config));
      addComponents(sidebar(config));
    }),
  ],
};
