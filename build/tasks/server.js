var gulp = require('gulp');

var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

gulp.task('browser-sync', ['serve'], function () {
	browserSync.init(null, {
		proxy: 'http://localhost:3000',
		port: 5000,
		notify: true
	});
});

gulp.task('serve', function (cb) {
	var called = false;
	return nodemon({
		verbose: true,
		script: 'dist/server.js',
		ext: 'js ts html scss',
		tasks: ['reload-browser'],
		execMap: {
        	js: "node --debug"
    	},
		ignore: ['build/*', 'dist/*', 'bower_components/*', 'node_modules/*', '.sass-cache/*',
			'.idea/*', '.git', 'newrelic_agent.log', 'app/.gulp*', 'gulp-tsc*', 'typings/*']
	}).on('start', function () {
		if (!called) {
			called = true;
			cb();
		}
	});
});

gulp.task('reload-browser', ['server_restart'], function () {
	reload({stream: false});	
});

gulp.task('server_restart', ['hint'], function () {
	return gulp.run('build');
});
