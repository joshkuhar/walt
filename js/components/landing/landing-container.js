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
		this.props.dispatch(actions.getPosts());
	},
	render: function(){
		var post = this.props.posts[0];
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
		posts: state.posts,
		categories: state.categories
    };
};

var Container = connect(mapStateToProps)(LandingContainer);

module.exports = Container;