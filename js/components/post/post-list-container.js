var React = require('react');
var PostList = require('./post-list');
var router = require('react-router');
var Link = router.Link;
var getCategory = require('../helpers').getCategory;


var PostListContainer = function(props){
	var categories = props.categories;
	var list = props.postList;
	console.log(list);
	var postList = [];
	for(var index in list){
		var post = list[index];
		postList.push(Object.assign({}, post, {category: getCategory(categories, post)})
			);
	}
	return (
		<PostList link={props.link} posts={postList}/>
		)
}

module.exports = PostListContainer;