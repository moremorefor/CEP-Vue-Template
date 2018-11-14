gulp   = require 'gulp'
config = require '../config'
paths  = config.path

gulp.task 'watch', ->
  gulp.watch ["#{paths.watch.sass}", "#{paths.watch.scss}"], ['sassWatch']
  gulp.watch ["#{paths.watch.js}", "#{paths.watch.vue}"], ['webpackWatch']
  gulp.watch [
    "#{paths.watch.html}",
    "#{paths.watch.jsx}",
    "#{paths.watch.png}",
    "#{paths.watch.jpg}",
    "#{paths.watch.gif}",
    "#{paths.watch.shellscript}",
    "#{paths.watch.application}"
  ], ['copyWatch']
