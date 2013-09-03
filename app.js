var express = require('express');
//var moment = require('moment');
var fs = require('fs');

var env = process.env.NODE_ENV || 'development',
	config = require('./config/config')[env],
	mongoose = require('mongoose');

mongoose.connect(config.db);

var models_path = __dirname + '/app/models';
fs.readdirSync(models_path).forEach(function (file) {
	if (~file.indexOf('.js')) require(models_path + '/' + file)
});

var app = express();
//var ejs = require('ejs');

//ejs.filters.parse_category = function(obj){
//    switch(obj){
//	    case "index":
//	    	return "首页";
//        case "wendang":
//        	return "文档";
//        case "moniqi":
//        	return "案例";
//        case "history":
//        	return "历史变更";
//    }
//}

//ejs.filters.format_time = function(obj){
//	return moment(obj).format('YYYY-MM-DD');
//}

// express settings
require('./config/settings')(app, config)

// Bootstrap routes
require('./config/routes')(app);

// Start the app by listening on <port>
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Express app started on port '+port);

// expose app
exports = module.exports = app
