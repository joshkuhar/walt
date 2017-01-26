var React = require('react');
var router = require('react-router');
var Link = router.Link;

var Annal = function(props){
	return (
		<div className="annals-post">
			<div><Link to={"/annals/" + props.postId}><div className="annals-post-title">{props.title}</div></Link></div>
			<div className="annals-post-date">{props.date}</div>
			<div className="annals-post-category"><span className="title-rider"></span>{props.category}</div>
			<div className="annals-post-body">{props.content}...</div>
		</div>
		)
};

module.exports = Annal;