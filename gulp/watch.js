/*
  watch.js
  ===========
  watches sass/js/images
*/

const gulp = require('gulp')
const livereload = require('gulp-livereload');
const config = require('./config.json')

gulp.task('watch-css', function () {
  livereload.listen();
  return gulp.watch(config.paths.assets + 'css/**', {cwd: './'}, ['css'])
})

gulp.task('watch-images', function () {
  livereload.listen();
  return gulp.watch(config.paths.assets + 'img/**', {cwd: './'}, ['copy-images'])
})

gulp.task('watch-scripts', function () {
  livereload.listen();
  return gulp.watch(config.paths.assets + 'js/**', {cwd: './'}, ['scripts'])
})
