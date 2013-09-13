var async = require('async');
var auth = require('./authorization')

var controllers = require('../app/controllers');
var user = controllers.User;
var site = controllers.Site;

/**
 * Expose routes
 */
module.exports = function (app) {
    //首页
    app.get('/',site.index);

	//用户信息管理
	app.get('/login',  user.showLogin);
	app.get('/logout', user.logout);
	app.post('/login', user.login);
	

		
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