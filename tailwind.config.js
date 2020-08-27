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
      st: "#2d2e31",
      white: "#ffffff",
      gray: "#c4c4c4",
      lightGray: "#dfe0e1",
      blue: "#0546d8",
      lightBlue: "#2270EE",
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
    },
    inset: {
      "1/2": "50%",
    },
    extend: {
      zIndex: {
        2: 2,
      },
      width: {
        "35/2": "17.5rem",
        "9/2": "4.5rem",
      },
      height: {
        30: "7.5rem",
        88: "22rem",
        "9/2": "4.5rem",
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
  variants: {},
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
