var React = require('react');
var Post = require('./post');
var router = require('react-router');
var Link = router.Link;

var PostList = function(props){
	var posts = props.posts; //<-- array
	var postList = [];
	console.log(posts);
	for (var index = 0; index < posts.length; index++) {
		var post = posts[index];
		postList.push(
			<div key={index}>
				<Post 
					title={post.title}
					link={post.link} 
					date={"date"+post.date}
					postId={"Id"+post.id}
					content={post.content} 
					category={post.category}
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