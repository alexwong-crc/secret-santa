/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require('./webpack.base');

module.exports = {
  ...baseConfig,
  mode: 'development',
  // Can't use hashes as names in dev mode
  output: {
    ...baseConfig.output,
    publicPath: 'http://localhost:3000/',
    filename: 'bundle.js',
    chunkFilename: '[name].chunk.js',
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    port: 3000,
    hot: true,
    overlay: true,
  },
};
