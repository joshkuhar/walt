var testRouter = require('express').Router();
var Test = require('./db-testModel');


testRouter.post('/r', function(req, res) {
	Test.create(req.body.categories, function(err, test) {
		if (err) {
			console.log(err);
			return res.status(500).json({
				message: 'Internal Server Error'
				});
			} 
			res.status(200).json(test);
		});   
});


testRouter.get('/r/:test', function(req, res){
	Test.findOne({
		test: req.params.test
	}, function(err, test){
		if(err) {
			console.log(err);
			return res.status(500).json({
				message: 'Internal Server Error'
			});
		}
		res.status(200).json(test);
	});
});


module.exports = testRouter;
/*
var categoryRouter = require('express').Router();
var Category = require('./categoryModel');


categoryRouter.post('/category', function(req, res) {
		console.log(req.body.name);
		Category.create({
			name: req.body.name
		}, function(err, items) {
			if (err) {
				console.log(err);
				return res.status(500).json({
					message: 'Internal Server Error'
					});
				} 
				res.status(200).json(items);
			});   
    });

categoryRouter.get('/category/:name', function(req, res){
	Category.findOne({
		name: req.params.name
	})
	.populate('items')
	.exec(function(err, cat){
		if (err) {
			console.log(err);
		}
		res.json(cat);
	});
});
*/