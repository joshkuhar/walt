var React = require('react');
var Post = require('../post/post');
var router = require('react-router');
var Link = router.Link;

var Landing = function(props){
	return(
		<div className="landing-page">
			<Post title={props.title}
				  date={props.date}
				  category={props.category}
				  content={props.content}
			/>
		</div>
		)
}

module.exports = Landing;

