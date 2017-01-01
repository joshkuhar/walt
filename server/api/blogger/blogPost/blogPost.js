var BlogPostRouter = require('express').Router();
var BlogPost = require('./blogPostModel');
var Category = require('../category/categoryModel');

BlogPostRouter.post('/dashboard/create/:categoryId', function(req, res){
	BlogPost.create({blogPost: {title: req.body.title, 
								content: req.body.content, 
								month: req.body.month,
								date: req.body.date,
								year: req.body.year,
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
						if(err2) {
							console.log(err);
							return res.status(500).json({message: 'Internal Server Error'});
						}
						res.status(200).json(blog);
					}
				);
			}
		});   
    });

module.exports = BlogPostRouter;
