var gulp         = require('gulp'),
    del          = require('del');

gulp.task('js', function() {
    return gulp.src(['ui/js/*.js'])
        .pipe(gulp.dest('web/js'));
});

gulp.task('css', function() {
    return gulp.src(['ui/css/*.css'])
        .pipe(gulp.dest('web/css/'));
});

gulp.task('fonts', function () {
    return gulp.src(['ui/css/fonts/*.ttf'])
        .pipe(gulp.dest('web/fonts/'))
});

gulp.task('img', function () {
    return gulp.src(['ui/img/*'])
        .pipe(gulp.dest('web/img/'))
});

gulp.task('clean', function () {
    del(['js', 'fonts', 'css', 'img']);
});

gulp.task('default', function () {
    var tasks = [
        'clean',
        'img',
        'fonts',
        'css',
        'js'
    ];

    tasks.forEach(function (val) {
        gulp.start(val);
    });
});

