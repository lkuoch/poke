const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Meta
const AppMeta = require("./meta.json");

module.exports = {
  entry: ["babel-polyfill", "./src/App/index.js"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".css"],
    alias: {
      App: path.resolve("./src/App"),
      Assets: path.resolve("./src/Assets"),
      Components: path.resolve("./src/Components"),
      Containers: path.resolve("./src/Containers"),
      Content: path.resolve("./src/Content"),
      Middlewares: path.resolve("./src/Middlewares"),
      Services: path.resolve("./src/Services"),
      Shared: path.resolve("./src/Shared"),
      Styles: path.resolve("./src/Styles"),
      Utils: path.resolve("./src/Utils")
    }
  },
  devServer: {
    port: 3000,
    https: true
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
