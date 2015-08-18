var path = require('path'),
rootPath = path.normalize(__dirname + '/../..');

module.exports = {
	app: {
		appName: 'appName',
		description: '',
		keywords: ''
	},
	root: rootPath,
	port: process.env.PORT || 3000
};
