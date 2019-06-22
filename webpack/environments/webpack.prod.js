const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new Dotenv({
      path: "./keys/.env.production"
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader]
      }
    ]
  },
  devServer: {
    contentBase: "./dist"
  }
};
