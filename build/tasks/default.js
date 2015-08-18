var gulp = require('gulp');
var tsd = require('gulp-tsd');

gulp.task('default', ['clean', 'hint'], function () {
	gulp.run('development');
});

gulp.task('production', ['build'], function () {
});

gulp.task('development', ['build'], function () {
	gulp.run('browser-sync');
});


gulp.task('tsd', function () {
    return gulp.src('./gulp_tsd.json').pipe(tsd());
});
