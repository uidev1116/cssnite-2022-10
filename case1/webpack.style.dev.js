const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const style = require('./webpack.style.js');

module.exports = merge(style, {
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
      template: 'style.html'
    })
  ]
});