const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    hot: false,
    static: {
      directory: path.join(__dirname, 'dest')
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
});