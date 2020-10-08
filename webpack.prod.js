/* eslint-disable import/no-extraneous-dependencies */

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  performance: {
    hints: false,
  },
  stats: {
    modules: false,
    entrypoints: false,
  },
});
