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
			<div className="category-manager-instructions">If you dropped(deleted) the database you have to LOAD CATEGORIES before writing blog.</div>
			<div className="category-manager-instructions">After you load the categories, go to database and grab the category ids. Then you must LOAD BLOGS.</div>
			<div className="category-manager-instructions">After you have the ids, go to the mock-data-loader and manually enter the categories in the categories object.</div>
			<div className="category-manager-instructions">If you refreshed the browser you have to RELOAD CATEGORIES from the database</div>
			<button className="add-categories-button" onClick={props.addClick}>Load Categories</button>
			<button className="add-categories-button" onClick={props.loadBlogs}>Load Blogs</button>
			<button className="reload-categories-button" onClick={props.reloadClick}>Reload Categories</button>
		</div>
		)
};

module.exports = CategoryManager; 