module.exports = function (config) {
  return {
    ".article": {
      display: "flex",
      alignItems: "flex-start",
      padding: `${config("theme.spacing.10")} 0`,

      "&.with-border": {
        borderBottomWidth: config("theme.borderWidth.default"),
        borderBottomColor: config("theme.colors.gray"),
      },

      ".article-body": {
        overflow: "hidden",
      },

      ".more": {
        display: "inline-flex",
        alignItems: "center",
        textTransform: "uppercase",
        color: config("theme.colors.blue"),
        marginTop: config("theme.spacing.8"),
        fontWeight: config("theme.fontWeight.bold"),

        img: {
          marginLeft: config("theme.spacing.6"),
        },
      },
    },
  };
};
