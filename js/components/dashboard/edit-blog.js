var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var hashHistory = router.hashHistory;
var Link = router.Link;

var PostToEdit = React.createClass ({
	componentDidMount: function(){
		this.props.dispatch(actions.getDashboardPost(this.props.params.postId, this.props.token));
		scroll(0, 1);
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
  			if (this.props.title === "") {
  				alert("Please enter a title for your yawp. It's currently empty");
  				return
  			}
  			if (this.props.content === "") {
  				alert("Please enter something into the yawp field. It's currently empty");
  				return
  			}
    	var actionName = "yawp update";
		this.props.dispatch(actions.updatePost(this.props.title, this.props.content, this.props.params.postId, this.props.token, actionName));	
		hashHistory.push('/dashboard/action/success');
    },
    handleDeleteClick: function(event) {
    	event.preventDefault();
		console.log("delete clicked");
    },
	render: function() {
		return (
		    <div className="post-edit-container">
		      <form className="post-edit-form" onSubmit={this.handleSubmit}>
			    <div className="title-header">Title</div> 
				  <input className="title-input" value={this.props.title} placeholder="title" type="text" onChange={this.handleTitleChange} />
			      <div className="textarea-title">Yawp</div>
			      <textarea className="textarea" value={this.props.content} placeholder="type away..." onChange={this.handlePostChange} />
		          <div className="buttons-container">
		          <Link to="/dashboard/edit">
		        	<button className="cancel-button">Cancel</button>
		          </Link>
					<button className="submit-button" type="submit" value="Submit">Submit</button>
				  <Link to={"/dashboard/remove/post/"+this.props.params.postId}>
					<button className="delete-button">Delete</button>
				  </Link>
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