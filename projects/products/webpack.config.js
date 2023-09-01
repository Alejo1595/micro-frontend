const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const productMF = withModuleFederationPlugin({
  name: "products",

  exposes: {
    "./listProduct": "./projects/products/src/app/products/products.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});

productMF.output.publicPath = "http://localhost:5600/";

module.exports = productMF;
