/*
  tasks.js
  ===========
  defaults wraps generate-assets, watch and server
*/

const gulp = require('gulp')
const runSequence = require('run-sequence')

gulp.task('default', function (done) {
  runSequence('generate-assets',
                'watch',
                //'audit',
                'server', done)
})

gulp.task('generate-assets', function (done) {
  runSequence('clean',
                'css',
                'scripts',
                'copy-images', done)
})


gulp.task('watch', function (done) {
  runSequence('watch-css',
               'watch-scripts',
               'watch-images', done)
})




