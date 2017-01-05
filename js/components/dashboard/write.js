var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;

// Object containing current month, date, time
var DateStamp = require('./write-date-stamp');
var date = DateStamp();

var BlogEntry = React.createClass ({
	componentDidMount: function() {
		this.props.dispatch(actions.setBlogEntryForm());
	},
	handleTitleChange: function(event) {
		this.props.dispatch(actions.updateTitle(event.target.value));
	},
	handleCategoryChange: function(event) {
		this.props.dispatch(actions.selectCategory(event.target.value));
	},
	handleBlogChange: function(event) {
    	this.props.dispatch(actions.updateBlog(event.target.value));
	},
	// handleCancel: function(event) {
	// 	event.preventDefault();
	// 	console.log("I was clicked");
	// },
  	handleSubmit: function(event) {
    	event.preventDefault();
	    this.props.dispatch(actions.postBlog(this.props.title, this.props.category, this.props.blog, 
	    										date.month, date.date, date.year
	    										));

	},
	render: function() {
		var categories = [];
		var categoryList = this.props.categories;
		for (var index in categoryList) {
			categories.push(
				<option key={index} value={categoryList[index]._id}>{categoryList[index].category}</option>	
				)
		}
	    return (
		    <div className="blog-entry-form">
		      <form onSubmit={this.handleSubmit}>
		        <div className="blog-entry-large-container">
		        	<h3>Write New Blog</h3>

			        <div className="blog-entry-form-title">Title</div>
			        <div className="blog-entry-container">
			        	<div className="title-input-container">
							<input className="blog-entry-title-input" value={this.props.title} placeholder="title" type="text" onChange={this.handleTitleChange} />
			        	</div>
			        </div>
			        <div className="selector-container"> Categories
				        <div className="category-selector">
				        	<select value={this.props.category} onChange={this.handleCategoryChange}>
									{categories}
					      	</select>
					    </div>
				    </div>
			        <div className="blog-entry-header">
			        	<div className="cancel-button-blog-entry">
			        		<Link to="/dashboard"><button>Cancel</button></Link>
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
        success: state.success
    };
};

var Container = connect(mapStateToProps)(BlogEntry);

module.exports = Container;

