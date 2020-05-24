/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name]-[contenthash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { test: /\.ts|x$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  plugins: [
    // Specify the html template
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../src/index.html'),
    }),
    // Use .tsconfig to help bundle the typescript with each change
    new ForkTSCheckerWebpackPlugin({
      tsconfig: path.resolve(__dirname, '../../tsconfig.json'),
      async: false,
      checkSyntacticErrors: true,
    }),
  ],
  // Split the src code to smaller chunks to allow for optimisation and caching
  optimization: {
    // This will hash the modules so local imports will not affect node_modules import
    moduleIds: 'hashed',
    // This extracts the runtime code from the app's code
    // This has been fixed in the later webpack versions but still considered best practice
    runtimeChunk: 'single',
    // Splits the node_modules to a separate file as this changes less often than src code
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
