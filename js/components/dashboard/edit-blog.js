var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;

var PostToEdit = React.createClass ({
	componentDidMount: function(){
		this.props.dispatch(actions.getDashboardPost(this.props.params.postId, this.props.token));
	},
	handleTitleChange: function(event) {
		event.preventDefault();
		this.props.dispatch(actions.changeTitle(event.target.value));
	},
	handlePostChange: function(event) {
		event.preventDefault();
    	this.props.dispatch(actions.changeContent(event.target.value));
	},
  	handleSubmit: function(event) {
    	event.preventDefault();
		this.props.dispatch(actions.updatePost(this.props.title, this.props.content, this.props.params.postId, this.props.token));
    },
    handleDeleteClick: function(event) {
    	event.preventDefault();
		console.log("delete clicked");
    },
	render: function() {
		return (
		    <div className="post-edit-container">
		      <form className="post-edit-form" onSubmit={this.handleSubmit}>
		        <div className="post-edit-inner-container">
			        <div className="post-edit-title-header">Title</div>
			        <div className="post-edit-title-container">
			        	<div className="post-edit-title-input-container">
							<input className="post-edit-title-input" value={this.props.title} placeholder="title" type="text" onChange={this.handleTitleChange} />
			        	</div>
			        </div>

			        <div className="post-edit-textarea-container">
			        	<textarea className="post-edit-textarea" value={this.props.content} placeholder="type away..." onChange={this.handlePostChange} />
			        </div>
		        </div>
		        	<div className="post-edit-buttons-container">
			       		<div className="post-edit-cancel-button-container">
			        		<Link to="/dashboard/edit"><button className="post-edit-cancel-button">Cancel</button></Link>
			        	</div>
			        	<div className="post-edit-submit-button-container">
							<button className="post-edit-submit-button" type="submit" value="Submit">Submit</button>
			        	</div>
			        	<div className="post-edit-delete-button-container">
							<Link to={"/dashboard/remove/post/"+this.props.params.postId}>
							  <button className="post-edit-delete-button">Delete</button>
							</Link>
			        	</div>
			        </div>
		      </form>
		     </div>
    );

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

var Container = connect(mapStateToProps)(PostToEdit);

module.exports = Container;

/*


<Link to="/dashboard/edit"></Link>
*/