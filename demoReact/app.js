var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
//var setupController = require('./controllers/setupController');
//var apiController = require('./controllers/apiController');

var initController = require('./controllers/initController');
var apiControllers = require('./controllers/apiControllers');

var port = process.env.Port || 3002;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
  });

app.use('/',express.static(__dirname + '/public'));


app.set('view engine','ejs');

mongoose.connect(config.getDbConnectionString());
initController(app);
apiControllers(app);
app.listen(port); 
