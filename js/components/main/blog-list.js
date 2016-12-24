var React = require('react');
var Blog = require('./blog');
var Data = require('../../mock-data');

var BlogList = function(props){
	var blogs = props.blogs;
	var numberOfBlogsToDisplay = 1;
	var blogsDisplayed = [];
	for (var blog = 0; blog < numberOfBlogsToDisplay; blog++){
		blogsDisplayed.push(
			<div key={blog}>
				<Blog blogTitle={blogs[blog].title} blogCategory={blogs[blog].category} 
					blogDate={blogs[blog].date} blogContent={blogs[blog].content} />
			</div>
			)
		}
	return (
		<div className="blog-list">
			{blogsDisplayed}
		</div>
		)
}

module.exports = BlogList;
