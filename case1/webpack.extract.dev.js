const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const extract = require('./webpack.extract.js');

module.exports = merge(extract, {
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
      template: 'extract.html'
    })
  ]
});