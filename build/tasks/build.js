var gulp = require('gulp');
var typescript = require('gulp-tsc');
var sass = require('gulp-sass');
var rimraf = require('gulp-rimraf');
var jshint = require('gulp-jshint');
var inject = require('gulp-inject');
var traceur = require('gulp-traceur');
var config = require('../../config/config');
var series = require('stream-series');
var runSequence = require('run-sequence');





gulp.task('ts_backend', ['tsd'], function(){
	return gulp.src(['app/**/*.ts'])
		.pipe(typescript({sourceMap: true}))
		.pipe(gulp.dest('dist/app'));
});

gulp.task('js_backend', function () {
	return gulp.src(['config*/**/*.js', 'server.js', 'app.js'])
		.pipe(gulp.dest('dist/'));
});


gulp.task('hint', function () {
	return gulp.src(['*.js', 'public/**/*.js', '!public/lib/**', 'app/models/**'])
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('default'));
});

gulp.task('clean', function () {
	return gulp.src('dist/', {read: false})
		.pipe(rimraf());
});

gulp.task('build', function(callback) {
	runSequence(
		['ts_backend', 'js_backend'],
		callback
	);
});