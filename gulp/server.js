var gulp = require('gulp')
    , plugins = require('gulp-load-plugins')();

gulp.task('server', function() {
    return gulp.src('dist')
    .pipe(plugins.webserver({ livereload: true }));
});


