var gulp = require('gulp')
    , browserify = require('browserify')
    , source = require('vinyl-source-stream')
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

gulp.task('scripts', function() {
    return browserify('./src/scripts/main.js', { debug: !config.minify })
    .bundle().on('error', handleError)
    .pipe(source('bundle.js'))
    .pipe(config.minify ? plugins.buffer().on('error', handleError) : plugins.util.noop())
    .pipe(config.minify ? plugins.uglify().on('error', handleError) : plugins.util.noop())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(reload());
});

