/// <reference path="../../../typings/tsd.d.ts" />

import CoreController = require('./core.controller');

module.exports = function(app) {
	app.get('/', CoreController.default);
	app.post('/test', CoreController.default);
};