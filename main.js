var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mongoose = require('mongoose');
var config = require('./server/config');

var path = require('path');
var app = express();
app.use(jsonParser); 
app.use(bodyParser.urlencoded({extended: false}));

var BlogPost = require('./server/api/blogger/blogPost/blogPost');
var Category = require('./server/api/blogger/category/category');

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
app.use('/', BlogPost);
app.use('/', Category);


// test GET endpoint
// app.get('/r', function(req, res) {
// 	console.log("hit");
//     res.json(blogDataBase[0]);
// });
// app.post('/r', function(req, res){
// 	console.log(req.body);
// 	blogDataBase.push(req.body);
// 	res.json(blogDataBase[0]);
// });
// app.put('/r', function(req, res){
// 	swap(req.body.color);
// 	res.json(dataBase[0]);
// })
// app.delete('/r', function(req, res){
// 	if(req.body.color == dataBase[0].color){
// 		dataBase.splice(0,1);
// 	}
// 	res.json({yes: "yes"});
// });
app.get("*", function(req, res) {
	console.log('test');		
	res.sendFile(path.join(__dirname, './build/index.html'));
});

// app.listen(8080, function(){
// 	console.log("server listening on port 8080")
// });