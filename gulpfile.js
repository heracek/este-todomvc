var bg = require('gulp-bg')
var gulp = require('gulp')
var makeWebpackConfig = require('./webpack/makeconfig')
var webpackBuild = require('./webpack/build')
var webpackDevServer = require('./webpack/devserver')
var yargs = require('yargs')

var args = yargs
  .alias('p', 'production')
  .argv

gulp.task('env', function() {
  process.env.NODE_ENV = args.production ? 'production' : 'development'
})

gulp.task('build-webpack', (args.production ? webpackBuild : webpackDevServer)
  (makeWebpackConfig(!args.production)))

gulp.task('build', ['build-webpack'])

gulp.task('server', ['env', 'build'], bg('node', 'src/server'))

gulp.task('default', ['server'])
