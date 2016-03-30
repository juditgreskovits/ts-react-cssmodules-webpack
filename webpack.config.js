var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin=require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/dev-server',
      './src/app.tsx'
    ],
    admin_app: './src/admin_app.tsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
     extensions: ['', '.jsx', '.ts', '.js', '.tsx', '.css', '.less']
  },
  module: {
    loaders: [
      { test: /\.ts$/,
        loaders: ['react-hot', 'ts-loader'],
        include: path.join(__dirname, 'src') },
      { test: /\.tsx$/,
        loaders: ['react-hot', 'ts-loader'],
        include: path.join(__dirname, 'src') },
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'),
        include: path.join(__dirname, 'src') }
    ]
  },
  plugins: [
      new ExtractTextPlugin("styles.css", {allChunks: true})
  ],
  postcss: function() {
      return [require("postcss-cssnext")()]
  }
}
