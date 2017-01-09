var React = require('react');
var router = require('react-router');
var Link = router.Link;

var Annal = function(props){
	return (
		<div className="annals-post">
			<Link to={"/annals/" + props.postId}><div className="annals-post-title">{props.title}</div></Link>
			<div className="annals-post-date">{props.date}</div>
			<div className="annals-post-category">{props.category}</div>
			<div className="annals-post-body">{props.content}...</div>
		</div>
		)
};

module.exports = Annal;