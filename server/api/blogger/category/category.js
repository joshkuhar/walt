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
	.populate('posts')
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

	