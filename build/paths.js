var path = require('path');

var frontendRoot = 'public/';
var backendRoot = 'app/';
var outputRoot = 'dist/';

module.exports = {
	frontendRoot: frontendRoot,
	backendRoot: backendRoot,
	frontendSource: frontendRoot + '**/*.js',
	backendSource: backendRoot + '**/*.js',
	backendSourceTS: backendRoot + '**/*.ts',
	frontendhtml: frontendRoot + '**/*.html',
	backendhtml: backendRoot + '**/*.html',
	style: frontendRoot + '**/*.scss',
	output: outputRoot,
	doc:'./doc',
	e2eSpecsSrc: 'test/e2e/src/*.js',
	e2eSpecsDist: 'test/e2e/dist/'
};
