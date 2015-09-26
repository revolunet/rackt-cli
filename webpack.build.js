const path = require('path');
const webpack = require('webpack');
const BASE_DIR = process.cwd();
const COMPONENT_FILE = process.env.COMPONENT_FILE;
const COMPONENT_NAME = process.env.COMPONENT_NAME;
const plugins = [];

function getPackageMain() {
  return require(path.resolve(BASE_DIR, 'package.json')).main;
}

if (process.env.MINIFY) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
  COMPONENT_FILE += '.min';
}

module.exports = {
  entry: path.resolve(BASE_DIR, getPackageMain()),
  output: {
    filename: COMPONENT_FILE + '.js',
    path: path.resolve(BASE_DIR, 'dist/'),
    library: COMPONENT_NAME,
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'React',
    'react/addons': 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: path.resolve(process.env.RACKT_PATH, 'node_modules/babel-loader')
      }
    ]
  },
  plugins: plugins
};
