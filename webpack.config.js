let path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app', 'build')
  },

  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.(js|jsx)$/, use: 'babel-loader' }
    ]
  },

  watch: true
};