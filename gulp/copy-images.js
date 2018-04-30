/*
  copy.js
  ===========
  copies images and javascript folders to public
*/

const gulp = require('gulp')
const imagemin = require('gulp-imagemin') 
const livereload = require('gulp-livereload');
const config = require('./config.json')

gulp.task('copy-images', function () {
  return gulp.src(config.paths.assets + 'img/**')
  .pipe(imagemin({ progressive: true }))
  .pipe(gulp.dest(config.paths.public + 'img/'))
  .pipe(livereload());
})


