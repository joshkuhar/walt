var React = require('react');
var ReactDOM = require('react-dom');
var BlogToEdit = require('./edit');

var BlogList = function(props){
	var blogsToEdit = props.blogsToEdit;
	var blogList = [];
	var numberOfBlogsToDisplay = props.numberOfBlogsToDisplay;
	for (var index = 0; index < numberOfBlogsToDisplay; index++) {
		var blog = blogsToEdit[index];
		blogList.push(
			<div key={index}>
				<BlogToEdit blogToEditTitle={blog.title}
							blogToEditCategory={blog.category}
							blogToEditDate={blog.date}
							blogToEditContent={blog.content}
							/>
			</div>
			)
	}
	return (
		<div className="blog-to-edit-list">
			{blogList}
		</div>
		)
};
module.exports = BlogList;