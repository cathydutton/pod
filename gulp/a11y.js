/*
  a11y.js
  ===========
  A plugin for a11y to run accessibility audits on html files.
*/

const gulp = require('gulp')
var a11y = require('gulp-a11y');

const config = require('./config.json')

gulp.task('audit', function () {
  return gulp.src([config.paths.views + '**/**.njk', config.paths.components + '**/*.njk'])
    .pipe(a11y({
      //viewportSize: '800x600',
    }))
    .pipe(a11y.reporter());
});
