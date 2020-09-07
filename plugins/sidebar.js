module.exports = function (config) {
  return {
    ".sidebar": {
      width: "280px",
      flexShrink: 0,
      marginRight: config("theme.spacing.16"),
      overflow: "auto",
      position: "-webkit-sticky",
      position: "sticky",
      top: config("theme.spacing.12"),

      li: {
        borderBottomWidth: config("theme.borderWidth.default"),
        paddingTop: "6px",
        paddingBottom: "6px",

        a: {
          display: "block",
          opacity: 0.5,
          padding: config("theme.spacing.2"),
          fontWeight: config("theme.fontWeight.bold"),

          "&.active": {
            backgroundColor: config("theme.colors.yellow"),
            opacity: 1,
          },

          "&:hover": {
            opacity: 1,
          },
        },
      },
    },
  };
};
