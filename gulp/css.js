/*
  sass.js
  ===========
  compiles sass from assets folder with the govuk_modules
  also includes sourcemaps
*/

const gulp = require('gulp')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const postcssImport = require('postcss-import')
const mqpacker = require('css-mqpacker')
const csswring = require('csswring')
const gulpif = require('gulp-if')
const argv = require('yargs').argv
const concat = require('gulp-concat')
const isProd = (argv.prod === undefined) ? false : true;
const livereload = require('gulp-livereload');
const rename = require('gulp-rename')
const config = require('./config.json')

gulp.task('css', () => {
  let compile = gulp.src([config.paths.assets + 'css/pod.css', config.paths.components + '**/**.css'])
  .pipe(postcss([
    autoprefixer,
    postcssImport
  ]))
    .pipe(gulpif(isProd, postcss([
      mqpacker,
      csswring
    ])
    ))
    .pipe(concat('pod.css'))
    .pipe(gulp.dest(config.paths.public + 'css/'))
    .pipe(livereload());
})
