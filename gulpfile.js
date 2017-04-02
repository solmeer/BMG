var gulp         = require('gulp'),
    del          = require('del');

gulp.task('js', function() {
    return gulp.src(['ui/js/*'])
        .pipe(gulp.dest('web/js'));
});

gulp.task('css', function() {
    return gulp.src(['ui/css/*'])
        .pipe(gulp.dest('web/css/'));
});

gulp.task('fonts', function () {
    return gulp.src(['ui/css/fonts/*'])
        .pipe(gulp.dest('web/fonts/'))
});

gulp.task('img', function () {
    return gulp.src(['ui/img/*'])
        .pipe(gulp.dest('web/img/'))
});

gulp.task('views', function() {
    return gulp.src(['ui/views/*'])
        .pipe(gulp.dest('web/views/'));
});

gulp.task('ico', function() {
    return gulp.src(['ui/img/ico/*'])
        .pipe(gulp.dest('web/img/ico/'));
});

gulp.task('clean', function () {
    del(['js', 'fonts', 'css', 'img', 'views','ico']);
});

gulp.task('default', function () {
    var tasks = [
        'clean',
        'views',
        'ico',
        'img',
        'fonts',
        'css',
        'js'
    ];

    tasks.forEach(function (val) {
        gulp.start(val);
    });
});

