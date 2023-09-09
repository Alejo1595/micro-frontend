const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const mfShell = withModuleFederationPlugin({
  remotes: {
    mf_navbar: "https://navbar-react-mf.netlify.app/remoteEntry.js",
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});

// mfShell.output.publicPath = 'https://shell-mf.netlify.app/'
mfShell.output.publicPath = "http://localhost:5500/";

module.exports = mfShell;
