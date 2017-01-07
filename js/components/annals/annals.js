var React = require('react');
var router = require('react-router');
var Link = router.Link;

var Annal = function(props){
	return (
		<div className="post">
			<Link to={"/posh/" + props.postId}><div className="post-title">{props.title}</div></Link>
			<div className="post-date">{props.date}</div>
			<div className="post-category">{props.category}</div>
			<div className="post-body">{props.content}...</div>
		</div>
		)
};

module.exports = Annal;