var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mongoose = require('mongoose');
var config = require('./server/config/config');
var passport = require('passport');

var path = require('path');
var app = express();

app.use(jsonParser); 
app.use(bodyParser.urlencoded({extended: false}));

var BlogPost = require('./server/api/blogger/blogPost/blogPost');
var Category = require('./server/api/blogger/category/category');
var About = require('./server/api/blogger/about/about');
var User = require('./server/api/user/user');

var runServer = function(callback) {
	mongoose.connect(config.DATABASE_URL, function(err) {
		if (err && callback) {
			return callback(err);
		}
		app.listen(config.PORT, function() {
			console.log('listening on localhost:' + config.PORT);
			if (callback) {
				callback();
			}
		});
	});
};
if (require.main === module) {
	runServer(function(err){
		if(err) {
			console.error(err);
		}
	});
};

exports.app = app;
exports.runServer = runServer;

// Serves static file from /.build
app.use(express.static(path.join(__dirname, './build')));

app.get('/r', function (req, res) {
	res.status(200).json({
		welcome: 'Welcome Home!'
	});
});
// Endpoints
app.use('/', BlogPost);
app.use('/', Category);
app.use('/', About);
app.use('/', User);

app.get("*", function(req, res) {	
	res.sendFile(path.join(__dirname, './build/index.html'));
});

