var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var config = {
  context: __dirname + "/app",
  entry: {
    index: "./index.js",
    navbar: "./navbar.js",
  },

  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
    chunkFilename: "[id].chunk.js",
  },
  
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]'),
        include: __dirname + "/app"
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new CommonsChunkPlugin({
        filename: "commons.js",
        name: "commons"
    })
  ]
};
module.exports = config;