'use strict';
var gulp = require('gulp');
var jade = require('gulp-jade');
var debug = require('gulp-debug');
var pug = require('gulp-pug');
var clean = require('gulp-clean');
var concat = require('gulp-concat');

gulp.task('clean-dir', function () {
    return gulp.src('views/*', {read: false})
        .pipe(clean());
});

gulp.task('clean-dir-app', function () {
    return gulp.src('js/app/*', {read: false})
        .pipe(clean());
});

gulp.task('compile-pug', function build() {
    return gulp.src('jade/*.pug')
        .pipe(debug({title: 'src'}))
        .pipe(pug({pretty: true}))
        .pipe(debug({title: 'pug'}))
        .pipe(gulp.dest('views/'));
});

gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('js/app/'));
});

gulp.task('portfolioScript', function() {
    return gulp.src('js/portfolio/*.js')
        .pipe(concat('portfolio.js'))
        .pipe(gulp.dest('js/portfolio'));
});

gulp.task('collectCss', function() {
    return gulp.src(['css/*.css', 'css/portfolio/*.css'])
        .pipe(concat('layout.css'))
        .pipe(gulp.dest('css'));
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

