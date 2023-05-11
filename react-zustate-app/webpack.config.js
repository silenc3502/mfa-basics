const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const deps = require("./package.json").dependencies;

module.exports = {
  mode: "development",
  entry: "./src/index",

  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3007,
    historyApiFallback: true,
    hot: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers':
            'X-Requested-With, content-type, Authorization',
    },
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env','@babel/preset-react'] },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'reactZustateApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Sample': './src/bootstrap.js',
        "./ZustateCounter": "./src/components/ZustateCounter.js"
      },
      shared: {
        ...deps,
        react: { singleton: true, requiredVersion: '^18.2.0' },
        "react-dom": { singleton: true, requiredVersion: '^18.2.0' }
      },
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      chunks: ['main'],
    }),
    new ExternalTemplateRemotesPlugin(),
  ],
};