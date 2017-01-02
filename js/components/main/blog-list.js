var React = require('react');
var Blog = require('./blog');

var BlogList = function(props){
	var blogs = props.blogs;
	var blog = 0;
	if (props.selectedBlog){
		for (var index in blogs){
			if (blogs[index]._id === props.selectedBlog){
				blog = index;
			}
		}
	}
	return (
		<Blog blogTitle={blogs[blog].blogPost.title} blogDate={blogs[blog].blogPost.month + " " + blogs[blog].blogPost.date} blogContent={blogs[blog].blogPost.content} />
		)
}

module.exports = BlogList;

