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
		this.props.dispatch(actions.deletePost(this.props.params.postId));
		hashHistory.push('/dashboard/edit');
	},
	render: function(){
		return(
			<div className="delete-post-container">
				<div className="delete-post-wrapper">
				  <div>To delete this post, click the delete button.</div>
				  <button onClick={this.handleDeleteClick}>Delete Post</button>
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
        posts: state.blogs
    };
};

var Container = connect(mapStateToProps)(DeletePost);

module.exports = Container;