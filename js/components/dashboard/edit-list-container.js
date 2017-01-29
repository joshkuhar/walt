var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Link = router.Link;
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var PostToEditList = require('./edit-list');


var EditList = React.createClass({
	componentDidMount: function(){
		this.props.dispatch(actions.getDashboardPosts(this.props.token));
	},
	render: function(){
	var amountToDisplay =  this.props.posts.length > 10 ? 20 : this.props.posts.length;
	return (
		<div>
			<div className="post-edit-list-container">
				<PostToEditList postsToEdit={this.props.posts} numberOfPostsToDisplay={amountToDisplay}/>
			</div>
		</div>							
		)
	}
});

var mapStateToProps = function(state, props){
	return {
		posts: state.dashboardPosts,
		token: state.token
	}
};

var Container = connect(mapStateToProps)(EditList);

module.exports = Container;