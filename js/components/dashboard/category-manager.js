var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;


var CategoryManager = function(props){
	return (
		<div className="category-manager">
			<h3>Add Categories</h3>
			<div className="category-manager-instructions-container">
				<div className="category-manager-instructions">
					<p>***ADMIN INSTRUCTIONS****</p> 
					<p>1. Click Load Categories</p>
					<p>2. Click Load Blogs.</p>
					<p>3. Click Load About</p>
					<p>If something went wrong and you had to log back in after before Load Blogs, click load Categories.</p>
					<p>When the blog is set up for the user, make sure that you clear the blogs and manually load the first first post.</p>
				</div>
			</div>
			<button className="add-categories-button" onClick={props.loadCategories}>1. Load Categories</button>
			<button className="add-categories-button" onClick={props.loadBlogs}>2. Load Blogs</button>
			<button className="add-categories-button" onClick={props.loadAbout}>3. Load About</button>
			<button className="add-categories-button" onClick={props.getCategories}>Get Categories</button>
		</div>
		)
};

module.exports = CategoryManager; 