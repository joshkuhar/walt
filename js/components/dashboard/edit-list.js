var React = require('react');
var ReactDOM = require('react-dom');
var BlogToEdit = require('./edit');

var BlogList = function(props){
	var blogsToEdit = props.blogsToEdit;
	var blogList = [];
	var numberOfBlogsToDisplay = props.numberOfBlogsToDisplay;
	for (var index = 0; index < numberOfBlogsToDisplay; index++) {
		var blog = blogsToEdit[index];
		var date = blog.blogPost.month+" "+blog.blogPost.date+", "+blog.blogPost.year;
		blogList.push(
			<li key={index}>
				<BlogToEdit blogId={blog._id}blogToEditTitle={blog.blogPost.title} blogDate={date}/>
			</li>
			)
	}
	return (
		<ul className="blog-to-edit-list">
			{blogList}
		</ul>
		)
};
module.exports = BlogList;