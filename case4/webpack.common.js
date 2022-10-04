module.exports = {
  entry: {
    bundle: `${__dirname}/src/index.js`,
  },
  output: {
    path: `${__dirname}/dest/`,
    filename: '[name].js',
    chunkFilename: `[name].chunk.js?date=${new Date().getTime()}`,
    clean: true,
  },
};