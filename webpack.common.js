/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const { ProgressPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const globImporter = require('node-sass-glob-importer');
const glob = require('glob');
const pathToComponentScripts = glob.sync(path.resolve('layouts', 'partials/components')+'/*/*.js');

module.exports = {
  entry: [
    path.resolve('src', 'js', 'main.js'),
    path.resolve('src', 'scss', 'main.scss'),
  ],
  output: {
    path: path.resolve('static', 'assets'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // /node_modules\/(?![some_package|some_other_package])/
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer(),
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                importer: globImporter(),
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new ProgressPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
    }),
  ],
};
