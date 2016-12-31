var BlogPostRouter = require('express').Router();
var BlogPost = require('./blogPostModel');
var Category = require('../category/categoryModel');

BlogPostRouter.post('/dashboard/create/:categoryId', function(req, res){
	BlogPost.create({blogPost: {content: req.body.content, 
								title: req.body.title, 
								category: req.params.categoryId} }, 
		function(err, blog) {
			if (err) {
				console.log(err);
				return res.status(500).json({
					message: 'Internal Server Error'
				});
			} else {
				Category.findOneAndUpdate(	{_id: req.params.categoryId}, 
											{$addToSet: {blogPosts: blog._id} },
					function(err2, category){
						console.log("I'm an error");
						if(err2) {
							console.log(err);
							return res.status(500).json({message: 'Internal Server Error'});
						}
						res.json(category);
					}
				);
			}
		});   
    });

module.exports = BlogPostRouter;

