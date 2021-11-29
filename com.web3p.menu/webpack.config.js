'use strict';

const path = require('path');

module.exports = {
  mode: 'development',
  target: ['web', 'es6'],
  context: path.resolve(__dirname, 'public/src'),
  entry: {
    menu: './menu/menu.js'
  },
  output: {
    path: path.resolve(__dirname, 'public/assets/js'),
    filename: pathData => '[name].js'
  },
  module: {
    rules: [{
      test: /\.htm$/i,
      exclude: /node_modules/,
      loader: "html-loader",
      options: {
        sources: false, // Disables attributes processing
      },
    }, ]
  },
};