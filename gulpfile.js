'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
//var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    gulp.src('./stylesheet/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./stylesheet'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./stylesheet/*.sass', ['sass']);
});

gulp.task('default', function() {
    gulp.watch('./stylesheet/*.sass', ['sass']);
});

//gulp.task('default', function () {
//    return gulp.src('./stylesheet/*.css')
//        .pipe(autoprefixer({
//            browsers: ['last 2 versions'],
//            cascade: false
//        }))
//        .pipe(gulp.dest('dist'));
//});