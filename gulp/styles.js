var gulp = require('gulp')
    , plugins = require('gulp-load-plugins')();

var buildEnv = plugins.util.env.environment || 'development'
    , config = require('../config/' + buildEnv + '.json');

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

function reload() {
    if(plugins.webserver.reload) return plugins.webserver.reload();
    return plugins.util.noop();
}

gulp.task('styles', function() {
    return gulp.src('src/styles/**/*.scss')
    .pipe(plugins.sass({ sourceComments: config.minify ? 'map' : false })).on('error', handleError)
    .pipe(config.minify ? plugins.cssmin().on('error', handleError) : plugins.util.noop())
    .pipe(gulp.dest('dist/styles'))
    .pipe(reload());
});

