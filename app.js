'use strict';
var mongoose = require('mongoose');

var server;

module.exports = function(mongodbHost, port) {

	if (!mongodbHost) {
		return server;
	}

	process.on('MongooseError', function (err) {
		console.log(err);
	});

	var db = mongoose.connect(mongodbHost);
	var express = require('./config/express')(db);
	server = express.listen(port);
	return server;
};



