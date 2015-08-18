'use strict';
var config = require('./config/config');
var app = require('./app')(config.db, config.port);

module.exports = app;

console.log('Express app started on port ' + config.port);