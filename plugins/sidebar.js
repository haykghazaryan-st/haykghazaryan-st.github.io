module.exports = function (config) {
  return {
    ".sidebar": {
      width: "280px",
      flexShrink: 0,
      marginRight: config("theme.spacing.16"),
      overflow: 'auto',
      position: '-webkit-sticky',
      position: 'sticky',
      top: config("theme.spacing.4"),

      li: {

        '&:first-child': {

            a: {
                paddingTop: 0
            }
        },

        'a': {
            display: 'block',
            opacity: 0.5,
            padding: `${config("theme.spacing.4")}`,
            fontWeight: config("theme.fontWeight.bold"),
            borderBottomWidth: config('theme.borderWidth.default'),

            '&:hover': {
                opacity: 1
            },
        }
      },
    },
  };
};
