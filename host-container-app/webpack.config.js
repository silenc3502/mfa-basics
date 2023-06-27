const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:3001/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3001,
    historyApiFallback: true,
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
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { modules: true } },
          { loader: "postcss-loader" },
        ],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "host_container_app",
      filename: "remoteEntry.js",
      remotes: {
        vueModuleApp: 'vueModuleApp@http://localhost:3002/remoteEntry.js',
        reactModuleApp: 'reactModuleApp@http://localhost:3003/remoteEntry.js',
        vueNavigationPageModule: 'vueNavigationPageModule@http://localhost:3004/remoteEntry.js',
        vueRealNaviBar: 'vueRealNaviBar@http://localhost:3005/remoteEntry.js',
        reactZustandStateModule: 'reactZustandStateModule@http://localhost:3006/remoteEntry.js',
        reactZustateAppModule:  'reactZustateApp@http://localhost:3007/remoteEntry.js',
        reactQueryAppModule: 'reactQueryApp@http://localhost:3008/remoteEntry.js',
        reactTypescriptBoard: 'reactTypescriptBoard@http://localhost:3009/remoteEntry.js',
        vuetifyTailwindBoardApp: 'vuetifyTailwindBoardApp@http://localhost:3010/remoteEntry.js'
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: deps["react-router-dom"]
        },
        'react-query': {
          singleton: true,
          requiredVersion: deps["react-query"]
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
