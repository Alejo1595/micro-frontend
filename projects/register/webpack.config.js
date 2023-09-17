const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const registerMF = withModuleFederationPlugin({

  name: 'register',

  exposes: {
    './register': './projects/register/src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

registerMF.output.publicPath = 'http://localhost:5700/';

module.exports = registerMF;
