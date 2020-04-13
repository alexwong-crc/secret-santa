const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTSCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { test: /\.ts|x$/, loader: "babel-loader", exclude: /node_modules/ },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new ForkTSCheckerWebpackPlugin({
      tsconfig: path.resolve(__dirname, "tsconfig.json"),
      async: false,
      checkSyntacticErrors: true,
    }),
  ],
  devtool: "cheap-eval-source-map",
  devServer: {
    port: 3000,
    hot: true,
    overlay: true,
  },
};
