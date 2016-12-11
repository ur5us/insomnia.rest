import webpack from 'webpack';
import path from 'path';
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const libraryName = 'app';
const isDev = process.env.NODE_ENV !== 'production';

let plugins;
let outputFile;
let devtool;
let env;
let stripePubKey;

if (isDev) {
  plugins = [];
  outputFile = `${libraryName}.js`;
  devtool = 'eval-source-map';
  env = 'development';
  stripePubKey = 'pk_test_MbOhGu5jCPvr7Jt4VC6oySdH';
} else {
  plugins = [new UglifyJsPlugin({minimize: true, sourceMap: false})];
  outputFile = `${libraryName}.js`;
  devtool = 'source-map';
  env = 'production';
  stripePubKey = 'pk_live_lntbVSXY3v1RAytACIQJ5BBH';
}

export default {
  entry: [
    path.resolve('./src/index.js'),
    'whatwg-fetch'
  ],
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
  plugins: [
    ...plugins,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
      'process.env.STRIPE_PUB_KEY': JSON.stringify(stripePubKey),
    })
  ]
};
