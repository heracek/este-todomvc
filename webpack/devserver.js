/* @flow weak */

"use strict"

var gutil = require('gulp-util')
var path = require('path')
var webpack = require('webpack')
var webpackDevServer = require('webpack-dev-server')

module.exports = function(webpackConfig) {
  return function(callback) {
    // It seems webpackDevServer doesn't emit errors, so we can't use gulp-notify.
    // Webpack callback does not work with webpackDevServer as well.
    new webpackDevServer(webpack(webpackConfig), {
      contentBase: 'http://localhost:8888',
      hot: true,
      publicPath: webpackConfig.output.publicPath,
      // Unfortunately quiet swallows everything even error so it can't be used.
      quiet: false,
      // No info filters only initial compilation it seems.
      noInfo: true,
      // Remove console.log mess during watch.
      stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
      }
    }).listen(8888, 'localhost', function(err) {
      // Callback is called only once, can't be used to catch compilation errors.
      if (err)
        throw new gutil.PluginError('webpack-dev-server', err)
      gutil.log('[webpack-dev-server]', 'localhost:8888/build/client.js')
      callback()
    })
  }
}
