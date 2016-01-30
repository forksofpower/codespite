'use strict';

var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    babel   = require('gulp-babel'),
    path    = require('path');

gulp.task('babel', function() {
  gulp.src('./dist/js/**/*.js')
      .pipe(babel())
      .pipe(gulp.dest('./assets/js/'));
});

gulp.task('sass', function() {
  gulp.src('./dist/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./assets/css/'));
});

// Run by default
gulp.task('default', function() {
  gulp.run('sass', 'babel');
});
