import webpack from 'webpack';
import path from 'path';
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const libraryName = 'app';
const isDev = process.env.NODE_ENV !== 'production';

let plugins;
let outputFile;
let devtool;

if (isDev) {
  plugins = [new UglifyJsPlugin({minimize: true})];
  outputFile = `${libraryName}.js`;
  devtool = 'eval-source-map';
} else {
  plugins = [];
  outputFile = `${libraryName}.js`;
  devtool = 'source-map';
}

export default {
  entry: path.resolve('./src/index.js'),
  devtool,
  output: {
    path: path.resolve('./static/javascript/build'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components|.*\.min\.js)/
      }
    ]
  },
  resolve: {
    alias: {
      'node-forge': './lib/forge.min.js'
    },
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  plugins: plugins
};
