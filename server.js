var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var path = require('path');
var app = express();
app.use(jsonParser); 
var Data = require('./js/mock-data');

var dataBase = [];



// Serves static file from /.build
app.use(express.static(path.join(__dirname, './build')));

// test GET endpoint
app.get('/r', function(req, res) {
	console.log("hit");
    res.json({data: dataBase});
});
app.post('/r', function(req, res){
	dataBase.push(req.body.text)
	res.send("I worked");
})
app.get("*", function(req, res) {
	console.log('test');		
	res.sendFile(path.join(__dirname, './build/index.html'));
});

app.listen(8080, function(){
	console.log("server listening on port 8080")
});