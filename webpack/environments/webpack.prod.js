const webpack = require("webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

// Config file
const buildHelper = require("../util/buildHelper");
const tsConfigFile = buildHelper.getTsConfigFile("production");

module.exports = {
  mode: "production",
  devtool: "source-map",
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
