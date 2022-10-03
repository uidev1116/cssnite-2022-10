const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const StylelintPlugin = require('stylelint-webpack-plugin');
const sass = require('sass');

module.exports = {
  entry: {
    bundle: `${__dirname}/src/index.scss`,
  },
  output: {
    path: `${__dirname}/dest/`,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: true,
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: sass,
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // CSSファイルを吐き出した際に出る空のJavaScriptファイルを削除
    new RemoveEmptyScriptsPlugin(),
    // cssの書き出し
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    // StyleLint
    new StylelintPlugin({
      configFile: 'stylelint.config.js',
      context: './src',
      emitError: true,
      emitWarning: true,
      failOnError: false,
      fix: true,
    }),
  ],
};