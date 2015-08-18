'use strict';

/**
 * Module dependencies.
 */
var express = require('express'),
	compress = require('compression'),
	config = require('./config'),
	consolidate = require('consolidate'),
	path = require('path'),
	bodyParser = require('body-parser'),
	glob = require('glob'),
	expressJwt = require('express-jwt');

var SECRET = 'mysecret';

module.exports = function(db) {
	// Initialize express app
	var app = express();

	app.set('secret', SECRET);
	app.use(bodyParser.json({limit: '10mb'}));

	// Setting the environment locals
	app.locals.appName = config.app.appName;
	app.locals.description = config.app.description;
	app.locals.keywords = config.app.keywords;


	// Should be placed before express.static
	app.use(compress({
		filter: function(req, res) {
			return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
		},
		level: 9
	}));

	// Showing stack errors
	app.set('showStackError', true);


	glob('./dist/app/modules/**/*.entity.js', null, function(err,files){
		if(err) throw err;
		files.forEach(function(routePath){
			require(path.resolve(routePath));
		});
	});

	glob('./dist/app/modules/**/*.route.js', null, function(err,files){
		if(err) throw err;
		files.forEach(function(routePath){
			require(path.resolve(routePath))(app);
		});
	});


	return app;
};
