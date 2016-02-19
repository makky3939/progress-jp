gulp           = require 'gulp'
reactify       = require 'reactify'
gulpBrowserify = require 'gulp-browserify'
gulpPlumber    = require 'gulp-plumber'
gulpConnect    = require 'gulp-connect'
gulpUglify     = require 'gulp-uglify'
licensify      = require 'licensify'

gulp.task 'js', ->
  gulp.src '../src/index.js'
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
