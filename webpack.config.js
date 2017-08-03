const path = require('path');
const webpack = require('webpack');

const port = process.env.PORT || '8080';

const config = {
  context: __dirname,
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, './renderer.js'),
    `webpack-hot-middleware/client?path=http://localhost:${port}/__webpack_hmr`,
  ],
  target: 'electron-renderer',
  devtool: "source-map",
  output: {
    filename: 'renderer.bundle.js',
    path: __dirname + '/bundle',
    publicPath: `http://localhost:${port}/bundle/`,
    libraryTarget: 'commonjs2'
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'renderer.js')
        ],
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'react-hmre']
        }
      },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.tsx?$/, loader: "awesome-typescript-loader"
      },
      {
        enforce: "pre", test: /\.js$/, loader: "source-map-loader"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};

module.exports = config;
