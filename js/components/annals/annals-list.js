var React = require('react');
var Annals = require('./annals');
var router = require('react-router');
var Link = router.Link;
var getCategory = require('../helpers').getCategory;

var AnnalsList = function(props){
	var posts = props.postList; //<-- array
	var categories = props.categories;
	var postList = [];
	for (var index = 0; index < posts.length; index++) {
		var post = posts[index];
		var category = getCategory(categories, post);
		var snippet = post.content.substring(0, 350);
		postList.push(
			<div key={index}>
				<Annals postId={post._id} title={post.title} category={category} date={post.month+" "+post.date+", "+post.year} content={snippet} 
				/>
			</div>
		)
	}
	return (
		<div >
			<div>{postList}</div>
		</div>

		)
};

module.exports = AnnalsList;