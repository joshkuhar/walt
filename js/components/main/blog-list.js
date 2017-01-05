var React = require('react');
var Blog = require('./blog');

var BlogList = function(props){
	var blogs = props.blogs;
	var categories = props.categories;
	var blog = 0;
	var category = "";
	if (props.selectedBlog){
		for (var index in blogs){
			if (blogs[index]._id === props.selectedBlog){
				blog = index;
			}
		}
	}
	for (var index in categories){
		if (blogs[blog].blogPost.categoryId === categories[index]._id) {
			category = categories[index].category;
		}
	}

	return (
		<Blog blogTitle={blogs[blog].blogPost.title} blogDate={blogs[blog].blogPost.month + " " + blogs[blog].blogPost.date} blogContent={blogs[blog].blogPost.content} blogCategory={category} />
		)
}

module.exports = BlogList;

