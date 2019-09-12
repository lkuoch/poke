const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

// Meta
const AppMeta = require("./meta.json");

module.exports = {
  entry: "./src/App/index.tsx",
  devtool: "inline-source=map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".ts", ".tsx", ".js", ".jsx", ".css"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve("./tsconfig.json")
      })
    ]
  },
  devServer: {
    port: 3000,
    https: true,
    clientLogLevel: "silent",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      favicon: path.resolve("./src/Assets/Site/favicon.ico")
    }),
    new HtmlWebpackPlugin({
      title: AppMeta.AppTitle,
      template: path.resolve("./src/App/index.html")
    })
  ],
  output: {
    path: path.resolve("../", "dist"),
    publicPath: "/",
    filename: "bundle.js"
  }
};
