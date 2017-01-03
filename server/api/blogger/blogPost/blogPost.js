var BlogPostRouter = require('express').Router();
var BlogPost = require('./blogPostModel');
var Category = require('../category/categoryModel');

BlogPostRouter.post('/blogs/:categoryId', function(req, res){
	console.log(req.body, req.params.categoryId);

	BlogPost.create({blogPost: {title: req.body.title, 
								content: req.body.content, 
								month: req.body.month,
								date: req.body.date,
								year: req.body.year,
								categoryId: req.params.categoryId} }, 
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

// loads test data into mongo
BlogPostRouter.post('/dashboard/blogs', function(req, res){
	for (var index in req.body.blogs){
		BlogPost.create({blogPost: {title: req.body.blogs[index].title, 
									content: req.body.blogs[index].content, 
									month: req.body.blogs[index].month,
									date: req.body.blogs[index].date,
									year: req.body.blogs[index].year,
									categoryId: req.body.blogs[index].categoryId} }, 
			function(err, blog) {
				if (err) {
					console.log(err);
					return res.status(500).json({
						message: 'Internal Server Error'
					});
				} else {
					console.log(blog.blogPost.categoryId);
					Category.findOneAndUpdate(	{_id: blog.blogPost.categoryId}, 
												{$addToSet: {blogPosts: blog._id} },
						function(err2, category){
							if(err2) {
								console.log(err);
								return res.status(500).json({message: 'Internal Server Error'});
							}
							
						}
					);
				}
			});
		}
		res.status(200).json({response: "check database to confirm all loaded"});
    });

module.exports = BlogPostRouter;

BlogPostRouter.get('/blogs', function(req, res){
	BlogPost.find(function(err, blogs) {
			if (err) {
				console.log(err);
				return res.status(500).json({
					message: 'Internal Server Error'
				});
			}
			res.status(200).json(blogs);
		});   
});