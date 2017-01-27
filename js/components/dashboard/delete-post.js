var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;
var hashHistory = router.hashHistory;


var DeletePost = React.createClass({
	handleDeleteClick: function(event){
		event.preventDefault();
		this.props.dispatch(actions.deletePost(this.props.params.postId, this.props.token));
		hashHistory.push('/dashboard/edit');
	},
	handleCancelClick: function(event){
		event.preventDefault();
		hashHistory.push('/dashboard/edit/'+this.props.params.postId);
	},
	render: function(){
		return(
			<div className="delete-post-container">
				<div className="delete-post-wrapper">
				  <div className="confirm-delete">To delete this post, click the delete button.</div>
				  <button className="cancel-button" onClick={this.handleCancelClick}>Cancel</button>
				  <button className="delete-button-confirm" onClick={this.handleDeleteClick}>Delete</button>
				</div>
			</div>
			)
	}
});

var mapStateToProps = function(state, props) {
    return {
    	content: state.content,
    	title: state.title,
        post: state.post,
        category: state.category,
        categories: state.categories,
        posts: state.blogs,
        token: state.token
    };
};

var Container = connect(mapStateToProps)(DeletePost);

module.exports = Container;