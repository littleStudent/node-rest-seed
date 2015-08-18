var gulp = require('gulp');
var mocha = require('gulp-mocha');
var runSequence = require('run-sequence');

var protractor      = require('gulp-protractor').protractor;
var webdriver       = require('gulp-protractor').webdriver;
var webdriverUpdate = require('gulp-protractor').webdriver_update;
var seleniumJar = require('selenium-server-standalone-jar');

gulp.task('webdriver-update', webdriverUpdate);
gulp.task('webdriver', webdriver);


gulp.task('copy_tests', function () {
	return gulp.src('test/**/*.js')		
		.pipe(gulp.dest('dist/test/'));
});

gulp.task('unit-tests', [
	'ts_backend', 'js_backend', 'cpy_server_testData', 'copy_tests'], function () {
	return gulp.src(['dist/**/*.entity.test.js'], {read: false})
		.pipe(mocha({reporter: 'spec', timeout: 5000}))
		.once('end', function () {
			process.exit();
		});
});

gulp.task('api-tests', ['build', 'copy_tests'], function () {
	return gulp.src(['dist/**/*.api.test.js'], {read: false})
		.pipe(mocha({reporter: 'spec', timeout: 15000}));
});

gulp.task('test-setup', function () {
	process.env.ARCO_LOG_LEVEL = 'error';
	return true;
});

gulp.task('web-tests', ['test-setup', 'build', 'webdriver-update', 'webdriver', 'serve'], function () {
	return gulp.src(["tests/*/*.js"])
		.pipe(protractor({
			configFile: "protractor.config.js"
			//seleniumServerJar: seleniumJar.path,
			//args: ['--baseUrl', 'http://127.0.0.1:8000'],
			//capabilities: {
			//	'browserName': 'firefox'
			//}
		}))
		.on('end', function () {

		})
		.on('error', function (e) {
			console.log(e);
			throw e
		})
});

gulp.task('test', function (callback) {
	return runSequence(
		'api-tests',
		'unit-tests',
		callback
	);
});

