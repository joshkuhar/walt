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
	},
	render: function(){
		var post = this.props.landingPost;
		var category = getCategory(this.props.categories, post)
		return (
			<div className="main-parent-container">
				<div className="landing-page-container">
					<Landing 
						title={post.title}
						category={category}
						date={post.month+" "+post.date}
						content={post.content}
					/>
				</div>
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