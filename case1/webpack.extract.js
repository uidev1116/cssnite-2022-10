const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts')
const sass = require('sass');

module.exports = {
  entry: {
    extract: `${__dirname}/src/index.scss`,
  },
  output: {
    path: `${__dirname}/dest/`,
    filename: '[name].js',
    clean: true,
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
  ],
};