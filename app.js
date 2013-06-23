var express = require('express');
var http = require('http');


var app = express();
app.set('port', process.env.PORT || 3000);

app.configure('development', function() {
  app.use(express.errorHandler());
});

http.createServer(app).listen(app.get('port'), function() {
  console.log("App running on port " + app.get('port'));
});
