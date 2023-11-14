const path = require('path');
const { createConfig } = require('@edx/frontend-build');
const CopyPlugin = require('copy-webpack-plugin');

const config = createConfig('webpack-prod');

config.plugins.push(
  new CopyPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, './public/static'),
        to: path.resolve(__dirname, './dist/static'),
      },
    ],
  }),
);

config.devtool = false;

config.cache = {
  type: 'filesystem',
  cacheDirectory: path.resolve(__dirname, '.cache'),
};

config.plugins = config.plugins
  .filter(plugin => (plugin.constructor.name !== 'NewRelicPlugin'))
  .filter(plugin => (plugin.constructor.name !== 'HtmlWebpackNewRelicPlugin'))
  .filter(plugin => (plugin.constructor.name !== 'BundleAnalyzerPlugin'));

module.exports = config;
