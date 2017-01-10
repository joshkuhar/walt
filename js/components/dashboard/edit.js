var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Link = router.Link;

var PostToEdit = function(props){
	return (
		<div className="post-edit">

			<Link to={"/dashboard/edit/"+props.postId}>
				<div className="post-edit-title">{props.postToEditTitle}</div>
			</Link>
			<div className="post-edit-date">{props.postDate}</div>
		</div>
		)
};
module.exports = PostToEdit;

