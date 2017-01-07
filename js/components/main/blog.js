var React = require('react');
var router = require('react-router');
var Link = router.Link;

var Post = function(props){
	return (
		<div className="post">
			<Link to={props.link}><div className="post-title">{props.title}</div></Link>
			<div className="post-date">{props.date}</div>
			<div className="post-category">{props.category}</div>
			<div className="post-body">{props.body}</div>
		</div>
		)
};

module.exports = Post;

/*






*/

