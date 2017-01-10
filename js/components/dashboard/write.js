var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;
var hashHistory = router.hashHistory;
var WriteSuccess = require('./write-success');

// Object containing current month, date, time
var DateStamp = require('./write-date-stamp');
var date = DateStamp();

var PostContent = React.createClass ({
	componentDidMount: function() {
		this.props.dispatch(actions.setPostForm());
	},
	handleTitleChange: function(event) {
		event.preventDefault();
		this.props.dispatch(actions.changeTitle(event.target.value));
	},
	handleCategoryChange: function(event) {
		event.preventDefault();
		this.props.dispatch(actions.selectCategory(event.target.value));
		console.log(this.props.category);
	},
	handleContentChange: function(event) {
		event.preventDefault();
    	this.props.dispatch(actions.changeContent(event.target.value));
	},
  	handleSubmit: function(event) {
  		event.preventDefault();
  			if (this.props.category === "111"){
  				alert("Please select a category. Currently, the selector bar is set to 'All'");
  				return
  			}
  			hashHistory.push('/dashboard/create/success');
  			
  			
	    // this.props.dispatch(actions.postContent(this.props.title, this.props.category, this.props.content, date.month, date.date, date.year));

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
				<div className="post-write-container">
					<form className="post-write-form"onSubmit={this.handleSubmit}>
						<div className="post-write-header-container">
						  <h4>Write New Post</h4>
						</div>
						<div className="post-write-inside-container">
						  <div className="post-write-selector-container"> Category
						    <div className="post-write-category-selector">
							  <select value={this.props.category} onChange={this.handleCategoryChange}>
									{categories}
						  	  </select>
						    </div>
						  </div>
						    <div className="post-write-title-header">Title</div>
						  <div className="post-write-title-container">
						    <div className="post-write-title-input-container">
							  <input className="post-write-title-input" value={this.props.title} placeholder="title" type="text" onChange={this.handleTitleChange} />
						    </div>
						  </div>
						  <div className="post-write-textarea-container">
						    <textarea className="post-write-textarea" value={this.props.content} placeholder="type away..." onChange={this.handleContentChange} />
						  </div>
						</div>
						<div className="post-write-buttons-container">
						  <div className="post-write-cancel-button-container">
						     <Link to="/dashboard"><button className="post-write-cancel-button">Cancel</button></Link>
						  </div>
						  <div className="post-write-submit-button-container">
						    <button className="post-write-submit-button"type="submit">Submit</button>
						  </div>
						</div>
					</form>
				</div>
    );
  }
});

var mapStateToProps = function(state, props) {
    return {
    	title: state.title,
        content: state.content,
        category: state.category,
        categories: state.categories
    };
};

var Container = connect(mapStateToProps)(PostContent);

module.exports = Container;

