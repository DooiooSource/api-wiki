var async = require('async');
var auth = require('./authorization')

var users = require('../app/controllers/user');	
var index = require('../app/controllers/index');

/**
 * Expose routes
 */
module.exports = function (app) {

	//用户信息管理	
	app.get('/login', users.login);
	app.get('/logout', users.logout);
	app.post('/session', users.session);
	
	//首页
	app.get('/',index.index);
		
	/**
	var documents = require('../app/controllers/document');
	
	app.get('/documents',auth.requiresLogin,document.list);
	app.get('/document/new',auth.requiresLogin,document.new);
	app.post('/document/new',auth.requiresLogin,document.save);
	app.get('/document/:id',auth.requiresLogin,document.show);
	app.get('/document/:id/eidt',auth.requiresLogin,document.edit);
	app.post('/document/:id',auth.requiresLogin,document.update);
	app.del('/document/:id',auth.requiresLogin,document.del);
	
	var env = require('../app/controllers/apienv');
	app.get('/envs',auth.requiresLogin,env.list);
	app.get('/env/new',auth.requiresLogin,env.new);
	app.post('/env/new',auth.requiresLogin,env.save);
	app.
	**/
}