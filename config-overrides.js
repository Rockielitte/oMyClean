const { override, useBabelRc, disableEsLint } = require("customize-cra");

module.exports = {
  webpack: override(
    useBabelRc(),

    disableEsLint()
  ),
};
