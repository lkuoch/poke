const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Meta
const AppMeta = require("./util/meta.json");

module.exports = {
  entry: "./src/Core/index.tsx",
  devtool: "inline-source=map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    port: 3000,
    https: true,
    clientLogLevel: "silent",
    contentBase: "./dist",
    hot: true,
    stats: 'errors-warnings'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      favicon: path.resolve("./src/Assets/Site/favicon.ico")
    }),
    new HtmlWebpackPlugin({
      title: AppMeta.AppTitle,
      template: path.resolve("./src/Core/index.html")
    }),
  ],
  output: {
    path: path.resolve("../", "dist"),
    publicPath: "/",
    filename: "bundle.js"
  }
};
