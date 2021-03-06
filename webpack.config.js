const path = require('path');
const webpack = require('webpack');

let entryPath = 'webpack.entry.js';
try {
  entryPath = require.resolve('noflo-runtime-headless/spec/build/webpack.entry.js');
} catch (e) {
  // Ignore
}

module.exports = {
  entry: {
    test: entryPath,
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].js',
  },
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /noflo([\\]+|\/)lib([\\]+|\/)loader([\\]+|\/)register.js$/,
        use: [
          {
            loader: 'noflo-component-loader',
            options: {
              graph: null,
              debug: true,
              baseDir: process.cwd(),
              manifest: {
                runtimes: ['noflo'],
                discover: true,
              },
              runtimes: [
                'noflo',
                'noflo-browser',
              ],
            },
          },
        ],
      },
      {
        test: /\.coffee$/,
        use: [
          {
            loader: 'coffee-loader',
          },
        ],
      },
      {
        test: /\.fbp$/,
        use: [
          {
            loader: 'fbp-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.coffee', '.js'],
    fallback: {
      assert: false,
      child_process: false,
      constants: false,
      events: require.resolve('events/'),
      fs: false,
      os: false,
      path: require.resolve('path-browserify'),
      process: require.resolve('process'),
      util: require.resolve('util/'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: ['process'],
    }),
  ],
};
