var React = require('react');
var Landing = require('./landing');
var router = require('react-router');
var Link = router.Link;
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;
var getCategory = require('../helpers').getCategory;

var LandingContainer= React.createClass({
	componentDidMount: function(){
		if(this.props.posts[0]._id == "111"){
			this.props.dispatch(actions.getPosts())
		}
		scroll(0,1);
	},
	render: function(){
		var post = this.props.landingPost;
		if (post._id !== "111") {
			var category = getCategory(this.props.categories, post)
		}
		return (
			<div className="main-parent-container">
					<Landing 
						title={post.title}
						category={category}
						date={post.month+" "+post.date+", "+post.year}
						content={post.content}
					/>
			</div>
			)
	}
});

var mapStateToProps = function(state, props) {
    return {
    	landingPost: state.landingPost,
		posts: state.posts,
		categories: state.categories

    };
};

var Container = connect(mapStateToProps)(LandingContainer);

module.exports = Container;