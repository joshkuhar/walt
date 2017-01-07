var React = require('react');
var Post = require('./post');
var router = require('react-router');
var Link = router.Link;

var PostList = function(props){
	var posts = props.posts; //<-- array
	var postList = [];

	for (var index = 0; index < posts.length; index++) {
		var post = posts[index];
		postList.push(
			<div key={index}>
				<Post 
				link={props.link}
				postId={post._id}
				title={post.title}
				category={post.category}
				date={post.month+" "+post.date}
				content={post.content}
				
				/>
			</div>
		)
	}
	return (
		<div className="post-list-container">
			<div className="post-list">{postList}</div>
		</div>

		)
};

module.exports = PostList;