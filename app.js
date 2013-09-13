var express = require('express');
//var fs = require('fs');

var env = process.env.NODE_ENV || 'development',
	config = require('./config/config');
//	mongoose = require('mongoose');
//mongoose.connect(config.db);

var app = express();

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
