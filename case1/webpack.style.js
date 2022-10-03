const sass = require('sass');

module.exports = {
  entry: {
    styles: `${__dirname}/src/index.scss`,
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
            loader: 'style-loader',
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
};