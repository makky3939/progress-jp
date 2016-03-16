gulp           = require 'gulp'
reactify       = require 'reactify'
babelify       = require 'babelify'
gulpBrowserify = require 'gulp-browserify'
gulpPlumber    = require 'gulp-plumber'
gulpConnect    = require 'gulp-connect'
gulpUglify     = require 'gulp-uglify'
licensify      = require 'licensify'
runSequence    = require 'run-sequence'

gulp.task 'js:app', ->
  gulp.src '../src/index.js'
    .pipe gulpPlumber
      errorHandler: (err) ->
        console.log err
        this.emit 'end'
    .pipe gulpBrowserify
      insertGlobals: false
      transform: [babelify, reactify]
      plugin: 'licensify'
    .pipe gulpPlumber.stop()
    .pipe gulp.dest '../dst/assets'
    .pipe gulpConnect.reload()

gulp.task 'js:worker', ->
  gulp.src '../src/worker.js'
    .pipe gulpPlumber
      errorHandler: (err) ->
        console.log err
        this.emit 'end'
    .pipe gulpBrowserify
      insertGlobals: false
      transform: [reactify]
      plugin: 'licensify'
    .pipe gulpPlumber.stop()
    .pipe gulp.dest '../dst/assets'
    .pipe gulpConnect.reload()

gulp.task 'js', ->
  runSequence ['js:app', 'js:worker']
