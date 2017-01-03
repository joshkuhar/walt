var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Link = router.Link;

var BlogToEdit = function(props){
	return (
		<div className="blog-to-edit">

			<Link to={"/dashboard/edit/"+props.blogId}>
				<div className="blog-to-edit-title">{props.blogToEditTitle}</div>
			</Link>
			<div className="blog-to-edit-date">{props.blogDate}</div>
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