"use strict";

var    gulp = require('gulp'),
     concat = require('gulp-concat'),
     uglify = require('gulp-uglify'),
       sass = require('gulp-sass'),
browserSync = require('browser-sync').create(),
    cssnano = require('gulp-cssnano');

 gulp.task('compileSass', function() {
  return gulp.src("source/social-media-buttons.scss")
      .pipe(sass())
      .pipe(gulp.dest('./source/'))
      .pipe(browserSync.stream());
});

gulp.task('minifyCss', function() {
  return gulp.src('source/social-media-buttons.css')
      .pipe(cssnano())
      .pipe(concat('social-media-buttons.min.css'))
      .pipe(gulp.dest('./source/'))
});

gulp.task('watchFiles', function() {

  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("*.html").on('change', browserSync.reload);
  gulp.watch('source/**/*.scss', ['compileSass']);
});

gulp.task("build", ['compileSass', 'minifyCss'], function() {
  return gulp.src(["css/application.css"], { base: './' })
});


gulp.task('serve', ['watchFiles']);
