var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

// outputs changes to files to the console
function reportChange(event){
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['serve'], function() {

	gulp.watch(paths.frontendSource, ['build', browserSync.reload]).on('change', reportChange);
	gulp.watch(paths.backendSource, ['build', browserSync.reload]).on('change', reportChange);
	gulp.watch(paths.backendSourceTS, ['build', browserSync.reload]).on('change', reportChange);
	gulp.watch(paths.frontendhtml, ['build', browserSync.reload]).on('change', reportChange);
	gulp.watch(paths.backendhtml, ['build', browserSync.reload]).on('change', reportChange);
	gulp.watch(paths.style, browserSync.reload).on('change', reportChange);
});
