/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require('./webpack.base');

module.exports = {
  ...baseConfig,
  mode: 'production',
};
