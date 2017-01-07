var React = require('react');
var Post = require('../post/post');
var router = require('react-router');
var Link = router.Link;

var Landing = function(props){
	return(
		<div className="landing-page">
			<div className="landing-post">
				<div className="landing-title">{props.title}</div>
				<div className="landing-date">{props.date}</div>
				<div className="landing-category">{props.category}</div>
				<div className="landing-body">{props.content}</div>
			</div>
		</div>
		)
}

module.exports = Landing;

