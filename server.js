var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var path = require('path');
var app = express();
app.use(jsonParser); 
var Data = require('./js/mock-data');

var dataBase = [{color: "red"}];
var swap = function(color){
	dataBase[0].color = color;
};



// Serves static file from /.build
app.use(express.static(path.join(__dirname, './build')));

// test GET endpoint
app.get('/r', function(req, res) {
	console.log("hit");
    res.json({data: dataBase});
});
app.post('/r', function(req, res){
	dataBase.push(req.body.text)
	res.json({bang: "I worked"});
});
app.put('/r', function(req, res){
	swap(req.body.color);
	res.json(dataBase[0]);
})
app.delete('/r', function(req, res){
	if(req.body.color == dataBase[0].color){
		dataBase.splice(0,1);
	}
	res.json({yes: "yes"});
});
app.get("*", function(req, res) {
	console.log('test');		
	res.sendFile(path.join(__dirname, './build/index.html'));
});

app.listen(8080, function(){
	console.log("server listening on port 8080")
});