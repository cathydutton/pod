/*
  nodemon.js
  ===========
  uses nodemon to run a server, watches for javascript and json changes
*/

const fs = require('fs')
const path = require('path')
const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const livereload = require('gulp-livereload');

const config = require('./config.json')

gulp.task('server', function () {
  livereload.listen();
  nodemon({
    script: 'app.js',
    ext: 'js, json, njk',
    ignore: [config.paths.public + '*',
      config.paths.assets + '*',
      config.paths.nodeModules + '*']
  }).on('restart', function(){
		// when the app has restarted, run livereload.
		gulp.src('app.js')
			.pipe(livereload())
	}).on('quit', function () {
    // remove .port.tmp if it exists
    try {
      fs.unlinkSync(path.join(__dirname, '/../.port.tmp'))
    } catch (e) {}

    process.exit(0)
  })
})  


