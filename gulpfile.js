"use strict";

var    gulp = require('gulp'),
     concat = require('gulp-concat'),
     uglify = require('gulp-uglify'),
       sass = require('gulp-sass'),
browserSync = require('browser-sync').create();

 gulp.task('compileSass', function() {
  return gulp.src("source/social-share.scss")
      .pipe(sass())
      .pipe(gulp.dest('./'))
      .pipe(browserSync.stream());
});

gulp.task('watchFiles', function() {

  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("*.html").on('change', browserSync.reload);
  gulp.watch('scss/**/*.scss', ['compileSass']);
});


gulp.task('serve', ['watchFiles']);
