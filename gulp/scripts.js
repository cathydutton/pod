/*
  sass.js
  ===========
  compiles sass from assets folder with the govuk_modules
  also includes sourcemaps
*/

const gulp = require('gulp')
const gulpif = require('gulp-if')
const argv = require('yargs').argv
const concat = require('gulp-concat')
const isProd = (argv.prod === undefined) ? false : true;
const uglify = require('gulp-uglifyes');

const livereload = require('gulp-livereload');

const config = require('./config.json')

gulp.task('scripts', () => {
  return gulp.src([config.paths.assets + 'js/*.js'])
    
  
    .pipe(gulpif(isProd, uglify({
      warnings: true,
      ecma: 8
    })))

    .pipe(concat('pod.js'))
    .pipe(gulp.dest(config.paths.public + 'js/'))
    .pipe(livereload())
})

