var express = require('express');
var http = require('http');
var path = require('path');


var app = express();

app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  app.use(express.favicon());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(app.router);
});

app.configure('development', function() {
  app.use(express.errorHandler());
});

// routes
var routes = require('./routes');
app.get('/', routes.index);

// server
http.createServer(app).listen(app.get('port'), function() {
  console.log("App running on port " + app.get('port'));
});
