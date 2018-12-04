const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ROOT = __dirname;
const SRC = path.join(__dirname, 'src');
const DEST = path.join(ROOT, 'dist');

module.exports = {
  entry: path.join(SRC, 'index.tsx'),
  output: {
    path: DEST,
    filename: 'build.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
    modules: [
      path.join(ROOT, 'src'),
      path.join('node_modules'),
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {loader: 'css-loader'},
            {loader: 'sass-loader'}
          ]
        }),
      },
    ]
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
      }
    }),
    new ExtractTextPlugin({
      filename: "style.css"
    }),
  ]
}
