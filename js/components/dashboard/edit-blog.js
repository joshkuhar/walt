var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;

var BlogToEdit = React.createClass ({
	componentDidMount: function(){
		var blog = {};
		for (var index in this.props.blogs){
			if(this.props.params.blogId == this.props.blogs[index]._id){
				blog = this.props.blogs[index]
			}
		}
		this.props.dispatch(actions.getBlogToEdit(blog));
	},
	handleTitleChange: function(event) {
		this.props.dispatch(actions.updateTitle(event.target.value));
	},
	handleBlogChange: function(event) {
    	this.props.dispatch(actions.updateBlog(event.target.value));
	},
  	handleSubmit: function(event) {
    	event.preventDefault();
    	console.log("handleSubmit was called");
		this.props.dispatch(actions.putBlog(this.props.title, this.props.blog, this.props.params.blogId));
    },
    handleDelete: function(event) {
		event.preventDefault();
		this.props.dispatch(actions.deleteBlog(this.props.params.blogId));
    },
	render: function() {
		return (
		    <div className="blog-entry-form">
		      <form onSubmit={this.handleSubmit}>
		        <div className="blog-entry-large-container">
			        <div className="blog-entry-form-title">Title</div>
			        <div className="blog-entry-container">
			        	<div className="title-input-container">
							<input className="blog-entry-title-input" value={this.props.title} placeholder="title" type="text" onChange={this.handleTitleChange} />
			        	</div>
			        </div>
			        <div className="blog-entry-header">
			        	<div className="delete-button-blog">
			        		<button onClick={this.handleDelete}>Delete Blog</button>
			        	</div>
			       		<div className="cancel-button-blog-entry">
			        		<Link to="/dashboard/edit"><button>Cancel</button></Link>
			        	</div>
			        	<div className="submit-button-container">
							<input type="submit" value="Submit" />
			        	</div>
			        </div>
			        <textarea className="blog-entry-body" value={this.props.blog} placeholder="type away..." onChange={this.handleBlogChange} />
		        </div>
		      </form>
		     </div>
    );

  }
});

var mapStateToProps = function(state, props) {
    return {
    	title: state.title,
        blog: state.blog,
        category: state.category,
        categories: state.categories,
        blogs: state.blogs
    };
};

var Container = connect(mapStateToProps)(BlogToEdit);

module.exports = Container;

/*


<Link to="/dashboard/edit"></Link>
*/