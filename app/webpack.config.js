var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OpenBrowserWebpackPlugin = require("open-browser-webpack-plugin");
var webpack = require("webpack");
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var glob = require('glob');

var getEntry = function(pathDir) {
  var entryLists = {},
      files = glob.sync(pathDir);
  var len = files.length;
  for(var i = 0; i < len; i++) {
    var getPath = files[i];
    var dirName = /.*\/(page\/)(.*?)(\/index)\.js/.exec(files[i])[2];
    entryLists[dirName] = files[i];
  }
  return entryLists;
  // entryLists得到形如一下格式的文件
  // {
  //   'home': './src/js/page/home/index.js',
  //   'list': './src/js/page/list/index.js'
  //   ........
  // }
}

module.exports = {
  devtool: 'source-map',
  entry: getEntry('./src/page/*/index.js'),

  output: {
    filename: '[name].js',
    path: __dirname + '/html',
    devtool: 'source-map'
  },

  devServer: {
    contentBase: __dirname + '/html/',
    historyApiFallback: true,
    port: 8080,
    // compress: isProd,
    inline: true,
    hot: true //开发模式支持热更新
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(["style-loader","css-loader"])
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
        devtool: 'source-map'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },

  repository: "dushao103500/redux-spa-example",

  // 插件项
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("[name].css"),
    new OpenBrowserWebpackPlugin({
      url: 'http://localhost:8080'
    })
  ],
  //其他解决方案配置
  resolve: {

  }
}
