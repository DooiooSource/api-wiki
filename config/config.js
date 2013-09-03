var path = require('path'),
	rootPath = path.normalize(__dirname + '/..');
	
module.exports = {
  development: {
    db: 'mongodb://192.168.0.133:27017/api_route',
    root: rootPath
  },
  test: {
	db: 'mongodb://192.168.0.133:27017/api_route',
    root: rootPath
  },
  production: {
	db: 'mongodb://192.168.0.133:27017/api_route',
  	root: rootPath
  }
}