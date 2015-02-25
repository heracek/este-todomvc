/* @flow weak */

"use strict"

var webpack = require('webpack')
var gutil = require('gulp-util')

module.exports = function(webpackConfig) {
  return function(callback) {
    webpack(webpackConfig, function(err, stats) {
      if (err)
        throw new gutil.PluginError('webpack', err)

      // TODO: Check if it stops travis/circleci on build error.
      gutil.log('[webpack]', stats.toString({
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
      }))
      callback()
    })
  }
}
