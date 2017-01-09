var CategoryRouter = require('express').Router();
var Category = require('./categoryModel');


CategoryRouter.post('/categories', function(req, res) {
	console.log('categories endpoint hit');
	Category.create(req.body.categories, function(err, categories) {
		if (err) {
			console.log(err);
			return res.status(500).json({
				message: 'Internal Server Error'
				});
			} 
			res.status(200).json(categories);
		});   
    });

CategoryRouter.get('/categories', function(req, res){
	Category.find(function(err, categories) {
		console.log(categories);
		if (err) {
			console.log(err);
			return res.status(500).json({
				message: 'Internal Server Error'
				});
			}
			res.status(200).json(categories);
		});
	});

CategoryRouter.get('/categories/:categoryId', function(req, res){
	Category.findOne({
		_id: req.params.categoryId
	})
	.populate({
		path: 'posts',
		options: {
			limit: 3,
			sort: {
				_id: -1
			}
		},
	})
	.exec(function(err, posts){
		if (err) {
			console.log(err);
			return res.status(500).json({
				message: 'Internal Server Error'
			});
		}
		res.status(200).json(posts);
	});
});

CategoryRouter.get('/categories/:categoryId/:number', function(req, res){
	var number = parseInt(req.params.number)
	Category.findOne({
		_id: req.params.categoryId
	})
	.populate({
		path: 'posts',
		options: {
			limit: 1,
			skip: number,
			sort: {
				_id: -1
			}
		},
	})
	.exec(function(err, category){
		if (err) {
			console.log(err);
			return res.status(500).json({
				message: 'Internal Server Error'
			});
		}
		res.status(200).json(category);
	});
});

module.exports = CategoryRouter;

	