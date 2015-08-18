'use strict';

module.exports = {
	db: process.env.MONGO_URL || process.env.MONGOLAB_URI || 'localhost:27017/appName',
	testdb: process.env.MONGO_URL || process.env.MONGOLAB_URI_TEST || 'localhost:27017/appName_test',
	apitestdb: process.env.MONGO_URL || process.env.MONGOLAB_URI_API_TEST || 'localhost:27017/appNameApiTest',

	redisdb: process.env.REDIS || 'localhost',
	redistestdb: process.env.REDIS_TEST || 'localhost',
	redisapitestdb: process.env.REDIS_API_TEST|| 'localhost'
};