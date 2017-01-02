var AboutRouter = require('express').Router();
var About = require('./aboutModel');


AboutRouter.post('/about', function(req, res) {
	console.log(req.body);
	About.create({about: req.body.about}, function(err, about) {
		if (err) {
			console.log(err);
			return res.status(500).json({
				message: 'Internal Server Error'
				});
			} 
			res.status(200).json(about);
		});   
    });

AboutRouter.get('/about', function(req, res){
	About.find(function(err, about) {
		if (err) {
			console.log(err);
			return res.status(500).json({
				message: 'Internal Server Error'
				});
			}
			res.status(200).json(about);
		});
	});

AboutRouter.delete('/about/:id', function(req, res){
	About.findByIdAndRemove(
		req.params.id, function(err){
			if(err){
				console.log(err);
			}
			res.status(202).end();
		});
});


module.exports = AboutRouter;