'use strict';
const path = require('path');

module.exports = {
  mode: 'development',
  target: ['web', 'es6'],

  context: path.resolve(__dirname, 'com.web3p.file', 'src'),
  entry: {
//  menu: './menu.js',
//  tree: './tree.js',
    file: './file.js',
  },
  output: {
    path: path.resolve(__dirname, 'com.web3p.file', 'web', 'js'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.htm$/i,
        type: 'asset/source',
      },
    ]
  },

  resolve: {
    alias: {
      commons: path.resolve(__dirname, 'commons'),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '.'),
    },
    port: 8085,
  },
};
// [name]: './[name].js',
// debug: node --inspect-brk node_modules/webpack/bin/webpack.js