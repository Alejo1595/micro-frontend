const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const mfShell = withModuleFederationPlugin({
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});

mfShell.output.publicPath = 'http://localhost:5500/'

module.exports = mfShell;
