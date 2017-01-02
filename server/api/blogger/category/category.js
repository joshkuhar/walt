var CategoryRouter = require('express').Router();
var Category = require('./categoryModel');


CategoryRouter.post('/categories', function(req, res) {
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
// categoryRouter.put('/category/:id', function(req, res){
// 	Category.update({_id: req.params.id}, {$set: {name: req.body.name}}, 
// 		function(err){
// 			if(err){
// 				console.log(err);
// 				return;
// 			}
// 			res.status(201).end();
// 		});
// });

// categoryRouter.delete('/category/:id', function(req, res){
// 	Category.findByIdAndRemove(
// 		req.params.id, function(err){
// 			if(err){
// 				console.log(err);
// 			}
// 			res.status(202).end();
// 		});
// });

module.exports = CategoryRouter;

	