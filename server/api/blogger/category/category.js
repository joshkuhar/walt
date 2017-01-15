var CategoryRouter = require('express').Router();
var Category = require('./categoryModel');


CategoryRouter.post('/categories', function(req, res) {
	console.log('categories endpoint hit');
	Category.create(req.body.categories, function(err, categories) {
		if (err) {
			//console.log(err);
			return res.status(500).json({
				message: 'Internal Server Error'
				});
			} 
			res.status(200).json(categories);
		});   
    });

CategoryRouter.get('/categories', function(req, res){
	Category.find({}, '_id category', function(err, categories) {
		if (err) {
			console.log(err);
			return res.status(500).json({
				message: 'Internal Server Error'
				});
			}
			res.status(200).json(categories);
		});
	});
//'5871120d181e9c119ecdd2f8'
CategoryRouter.get('/cat/:categoryId', function(req, res){
	Category.findById(req.params.categoryId, function(err, categories) {
		if (err) {
			console.log(err);
			return res.status(500).json({
				message: 'Internal Server Error'
				});
			}
			res.status(200).json(categories);
		});
	});
//find({}, 'title date year month')
CategoryRouter.get('/categories/:categoryId', function(req, res){
	Category.findById(
		req.params.categoryId
	)
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

	