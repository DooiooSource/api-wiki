/**
 * Module dependencies.
 */
 var express = require('express')
   , mongoStore = require('connect-mongo')(express)
   , flash = require('connect-flash')
   , pkg = require('../package.json')
   , ejs = require('ejs')
   , path = require('path');
var partials = require('express-partials');

 module.exports = function (app, config) {
    app.set('showStackError', true);
   
    // should be placed before express.static
    app.use(express.compress({
        filter: function (req, res) {
          return /json|text|javascript|css/.test(res.getHeader('Content-Type'))
        },
        level: 9
    }));

    app.use(express.favicon());
    app.use(express.static(config.root + '/public'));
//    app.use(express.static(config.root + '/uploads'));

    // don't use logger for test env
    if (process.env.NODE_ENV === 'test') {
        app.use(express.logger('dev'));
    }

    // set views path, template engine and default layout
    app.set('views', path.join(config.root ,"/app",'/views'));
    app.engine('.html', ejs.__express);
    app.set('view engine', 'html');
    app.use(partials());

    app.configure("all",function () {
        // expose package.json to views
        app.use(function (req, res, next) {
            res.locals.pkg = pkg;
            next()
        });

        // cookieParser should be above session
        app.use(express.cookieParser());

        // bodyParser should be above methodOverride
        // app.use(express.bodyParser());
        app.use(express.bodyParser({uploadDir: config.root +'/upload'}));
        app.use(express.methodOverride());

        // express/mongo session storage
        app.use(express.session({
            secret: 'Zsjuygffhjs12321',
            store: new mongoStore({
                url: config.db,
                collection : 'sessions'
            })
        }));

        app.use(function(req, res, next){
          res.locals.empNo = req.session.empNo;
          res.locals.username = req.session.username;
          next();
        });

        // connect flash for flash messages - should be declared after sessions
        app.use(flash());

        // routes should be at the last
        app.use(app.router);

    }); //~end app.configure


    // development env config
    app.configure('development', function () {
        app.locals.pretty = true;
    });
}