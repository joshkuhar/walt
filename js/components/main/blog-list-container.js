var React = require('react');
var BlogList = require('./blog-list');

var Blogs = function(props){
	return (
			<BlogList blogs={props.blogs} selectedBlog={props.selectedBlog} />
		)
};

module.exports = Blogs;