var gulp = require('gulp')
    , plugins = require('gulp-load-plugins')();

function reload() {
    if(plugins.webserver.reload) return plugins.webserver.reload();
    return plugins.util.noop();
}

gulp.task('html', function() {
    return gulp.src('src/html/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(reload());
});
