var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;


var EssayForm = React.createClass ({
	handleTitleChange: function(event) {
		this.props.dispatch(actions.updateTitle(event.target.value));
	},
	handleBlogChange: function(event) {
    	this.props.dispatch(actions.updateBlog(event.target.value));
	},
  	handleSubmit: function(event) {
    	event.preventDefault();
    	this.props.dispatch(actions.postBlog(this.props.title, this.props.blog));
	},
  	onClick: function(){
  		console.log(store.getState());
	},
	render: function() {
    return (
	    <div className="blog-entry-form">
	    <Link to="/test">test</Link>
	     <button onClick={this.onClick}>store</button>
	      <form onSubmit={this.handleSubmit}>
	        <div className="blog-entry-large-container">
	        <div className="blog-entry-form-title">Title</div>
	        <div className="blog-entry-container">
	        	<div className="title-input-container">
					<input className="blog-entry-title-input" value={this.props.title} placeholder="title" type="text" onChange={this.handleTitleChange} />
	        	</div>
	        	<div className="submit-button-container">
					<input type="submit" value="Submit" />
	        	</div>
	        </div>
	        <div className="blog-body-header">Blog</div>
	        <textarea className="blog-entry-body" value={this.props.blog} placeholder="type away..." onChange={this.handleBlogChange} />
	        </div>
	      </form>
	      <div>Title: {this.props.words}</div>
	      <div className="output">Body: {this.props.line}</div>

	     </div>
    );
  }
});

// module.exports = EssayForm;

var mapStateToProps = function(state, props) {
    return {
    	title: state.title,
        blog: state.blog,
        words: state.words
    };
};

var Container = connect(mapStateToProps)(EssayForm);

module.exports = Container;