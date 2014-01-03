// load dependencies
var express = require('express');
var twig    = require("twig");
var http    = require('http');
var path    = require('path');
var config  = require('./config')();
var db      = require('./models')
var app     = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');
app.set("view options", { layout: false })
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
console.log(path.join(__dirname, 'less'));
app.use(require('less-middleware')({ src: path.join(__dirname, 'less'), dest: path.join(__dirname, 'public/css'), prefix: '/css' }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

// parse routes
var routes  = require('./routes')(app);

// launch server
http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + config.port + ' for '+config.label + ' environment');
})