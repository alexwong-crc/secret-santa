/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require('./webpack.base');

module.exports = {
  ...baseConfig,
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name]-[contenthash].js',
  },
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
