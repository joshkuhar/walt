var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Link = router.Link;

var PostToEdit = function(props){
	return (
		<div className="edit-list-item">
			<div className="item-box b-title">
			  <div className="edit-title">{props.postToEditTitle}</div>
			  <div className="edit-date">{props.postDate}</div>
			</div>
			<div className="item-box b-button">
			  <Link to={"/dashboard/edit/"+props.postId}><button className="edit-list-button">edit post</button></Link>
			</div>
		</div>
		)
};
module.exports = PostToEdit;

