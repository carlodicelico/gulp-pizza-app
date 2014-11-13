var gulp = require('gulp');

gulp.task('watch', function() {
    gulp.watch('src/html/**/*.html', ['html']);
    gulp.watch('src/styles/**/*.scss', ['styles']);
    gulp.watch('src/scripts/**/*.js', ['scripts']);
});
