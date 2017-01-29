var React = require('react');
var ReactDOM = require('react-dom');
var PostToEdit = require('./edit');

var PostList = function(props){
	var postsToEdit = props.postsToEdit;
	var postList = [];
	var numberOfPostsToDisplay = props.numberOfPostsToDisplay;
	for (var index = 0; index < numberOfPostsToDisplay; index++) {
		var post = postsToEdit[index];
		var date = post.month+" "+post.date+", "+post.year;
		console.log(post.month, post.title);
		postList.push(
			<li key={index}>
				<PostToEdit postId={post._id} postToEditTitle={post.title} postDate={date}/>
			</li>
			)
	}
	console.log(postList);
	return (

		<ul className="post-to-edit-list">
			{postList}
		</ul>
		)
};
module.exports = PostList;