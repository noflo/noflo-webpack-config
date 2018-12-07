const path = require('path');

module.exports = {
  entry: {
    test: require.resolve('noflo-runtime-headless/spec/build/webpack.entry.js'),
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
              baseDir: __dirname,
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
        test: /\.s$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.coffee$/,
        use: [
          {
            loader: 'coffee-loader',
            options: {
              transpile: {
                presets: ['@babel/preset-env'],
              },
            },
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
  },
  node: {
    child_process: 'empty',
    fs: 'empty',
  },
};
