'use strict';
var gulp = require('gulp');
var jade = require('gulp-jade');
var debug = require('gulp-debug');
var pug = require('gulp-pug');
var clean = require('gulp-clean');


gulp.task('clean-dir', function () {
    return gulp.src('views/*', {read: false})
        .pipe(clean());
});

gulp.task('compile-pug', function build() {
    return gulp.src('jade/*.pug')
        .pipe(debug({title: 'src'}))
        .pipe(pug({pretty: true}))
        .pipe(debug({title: 'pug'}))
        .pipe(gulp.dest('views/'));
});

gulp.task('default', function () {
    var tasks = [
        'clean-dir',
        'compile-pug'
    ];
    tasks.forEach(function (val) {
        gulp.start(val);
    });
});