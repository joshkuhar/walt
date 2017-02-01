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
		scroll(0,1);
	},
	onClick: function(event){
		this.props.dispatch(actions.getMoreDashboardPosts(this.props.posts.length));
	},
	render: function(){
	var amountToDisplay = this.props.posts.length > 20 ? 20 : this.props.posts.length;
	return (
		<div >
			<div className="edit-instructions">To edit or delete a yawp, click on the EDIT YAWP button.</div>
			<div className="post-edit-list-container">
			  <PostToEditList postsToEdit={this.props.posts} numberOfPostsToDisplay={amountToDisplay}/>
			</div>
			<div className="annals-next-navigator edit-list-navigator" onClick={this.onClick}>more</div>
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