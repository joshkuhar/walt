var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;

var BlogToEdit = React.createClass ({
	componentDidMount: function(){
		console.log(this.props.params);
		this.props.dispatch(actions.getBlogToEdit());
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
  	handleSubmit: function(event) {
    	event.preventDefault();
    	console.log(this.props.category);
    	this.props.dispatch(actions.postBlog(this.props.title, this.props.category, this.props.blog));
	},
  	onClick: function(){
  		console.log(store.getState());
	},
	render: function() {
		var categories = [];
		var categoryList = this.props.categories;
		for (var index in categoryList) {
			categories.push(
				<option key={index} value={categoryList[index]}>{categoryList[index]}</option>	
				)
		}
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
			        <div className="selector-container"> Categories
				        <div className="category-selector">
				        	<select value={this.props.category} onChange={this.handleCategoryChange}>
									{categories}
					      	</select>
					    </div>
				    </div>
			        <div className="blog-body-header">Blog</div>
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
        categories: state.categories
    };
};

var Container = connect(mapStateToProps)(BlogToEdit);

module.exports = Container;