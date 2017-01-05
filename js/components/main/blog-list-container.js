var React = require('react');
var BlogList = require('./blog-list');

var Blogs = function(props){
	return (
			<BlogList blogs={props.blogs} selectedBlog={props.selectedBlog} categories={props.categories}/>
		)
};

module.exports = Blogs;