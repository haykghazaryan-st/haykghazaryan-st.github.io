module.exports = function (config) {
  return {
    html: {
      fontFamily: config("theme.fontFamily.Rubik"),
    },
    body: {
      fontSize: config("theme.fontSize.base"),
    },
  };
};
