const webpack = require("webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const Dotenv = require("dotenv-webpack");

// Config file
const buildHelper = require("../shared/buildHelper");
const tsConfigFile = buildHelper.getTsConfigFile("development")

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: tsConfigFile
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".ts", ".tsx", ".js", ".jsx", ".css"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: tsConfigFile
      })
    ]
  },
};
