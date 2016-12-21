var React = require('react');

var BlogPost = function(props){
	return (
		<div className="blog-post">
			<div className="blog-post-title">Title: {props.blogTitle}</div>
			<div className="blog-post-category">Category: {props.blogCategory}</div>
			<div className="blog-post-date">Date: {props.blogPostDate}</div>
			<div className="blog-post-body">{props.blogContent}</div>
		</div>
		)
};

module.exports = BlogPost;