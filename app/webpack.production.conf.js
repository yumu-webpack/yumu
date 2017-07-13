var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
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
}

// 复制html文件
var copyHtml = function() {
  var htmlBox = [];
  var htmlList = glob.sync('./html/*.html');
  var len = htmlList.length;
  for(var i = 0; i < len; i++) {
    htmlBox.push({
      from: htmlList[i],
      to: __dirname + '/dist'
    });
  }
  return htmlBox;
}

module.exports = {
  entry: getEntry('./src/page/*/index.js'),

  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("[name].css"),
    new CopyWebpackPlugin(copyHtml(), {
      ignore: [],
      copyUnmodified: true,
      debug:"debug"
    })
  ],
  //其他解决方案配置
  resolve: {

  }
}
