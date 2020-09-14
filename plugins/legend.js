module.exports = function (config) {
  return {
    ".legend": {
      display: "flex",
      alignItems: "center",
      margin: `${config("theme.spacing.6")} 0`,

      h6: {
        textTransform: "capitalize",
        fontWeight: config("theme.fontWeight.bold"),
        flexShrink: 0,
      },

      "&::after": {
        content: '""',
        display: "block",
        height: "1px",
        backgroundColor: config("theme.colors.gray"),
        marginLeft: config("theme.spacing.8"),
        width: "100%",
      },

      "&.legend-center": {
        "&::before": {
          content: '""',
          display: "block",
          height: "1px",
          backgroundColor: config("theme.colors.gray"),
          marginRight: config("theme.spacing.8"),
          width: "100%",
        },
      },
    },
  };
};
