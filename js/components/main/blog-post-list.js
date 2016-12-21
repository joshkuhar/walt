var React = require('react');
var BlogPost = require('./blog-post');
var Data = require('../../mock-data');

var BlogPosts = function(props){
	var post = Data.items[0];
	return (
		<div>
			<BlogPost blogTitle={post.title} blogCategory={post.category}
				blogPostDate={post.date} blogContent={post.content} />
		</div>
		)
}

module.exports = BlogPosts;
