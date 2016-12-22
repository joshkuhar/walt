var React = require('react');
var ReactDOM = require('react-dom');

var BlogToEdit = function(props){
	return (
		<div className="blog-to-edit">
			<div className="blog-to-edit-title">Title: {props.blogToEditTitle}</div>
			<div className="blog-to-edit-category">Category: {props.blogToEditCategory}</div>
			<div className="blog-to-edit-date">Date: {props.blogToEditDate}</div>
			<div className="blog-to-edit-body">{props.blogToEditContent}</div>
		</div>
		)
};
module.exports = BlogToEdit;

/*
props 
blogToEditTitle
blogToEditCategory
blogToEditDate
blogToEditContent
*/