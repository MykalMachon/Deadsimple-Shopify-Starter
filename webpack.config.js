const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    'assets/index': './src/app/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/'),
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {},
      },
      {
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  absoluteRuntime: false,
                  corejs: false,
                  helpers: true,
                  regenerator: true,
                  useESModules: false,
                  version: '7.0.0-beta.0',
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CopyPlugin({
      patterns: [
        { from: './src/assets/**', to: 'assets/', flatten: true },
        { from: './src/styles/**', to: 'assets/', flatten: true },
        { from: './src/config/**', to: 'config/', flatten: true },
        {
          context: './src/liquid/',
          from: '**/*',
          to: path.resolve(__dirname, 'dist/'),
        },
        { from: './src/locales/**', to: 'locales/', flatten: true },
      ],
    }),
  ],
};
