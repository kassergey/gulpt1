'use strict';

const gulp = require('gulp');
var concat = require('gulp-concat');
var addsrc = require('gulp-add-src');
var replace = require('gulp-replace');


gulp.task('concatJSFiles', function() {
  return gulp.src('src/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dest'));
});

gulp.task('concatCSSFiles', function() {
  return gulp.src('src/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('dest'));
});

gulp.task('indexReplace', function() {
  return gulp.src(['index.html'])
    .pipe(replace('src/', 'dest/'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['concatJSFiles', 'concatCSSFiles', 'indexReplace']);