import webpack from 'webpack';
import path from 'path';

const libraryName = 'app';
const isDev = process.env.NODE_ENV !== 'production';

let outputFile;
let devtool;
let env;
let stripePubKey;

if (isDev) {
  outputFile = `${libraryName}.min.js`;
  devtool = 'source-map';
  env = 'development';
  stripePubKey = 'pk_test_MbOhGu5jCPvr7Jt4VC6oySdH';
} else {
  outputFile = `${libraryName}.min.js`;
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
    path: path.resolve('./site/static/javascript/build'),
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
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  externals: {
    'node-forge': 'forge'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
      'process.env.STRIPE_PUB_KEY': JSON.stringify(stripePubKey),
    })
  ]
};
