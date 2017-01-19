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
					<p>If you dropped(deleted) the database you have to load the categories by clicking the Load Categories button below. This will load the categoriesForLoading array into the database from the file mock-categories.</p> 
					<p>The file mock-categories is located in blog-app --> js --> mock-categories.</p>
					<p>If you want to change the mock-categories, you can do this from the mock-categories file</p>
					<p>After you load the categories, go to database and copy the category ids. Once you have the category ids, you need to add them to the categories array in the file mock-categories</p>
					<p>After you added the category ids to the category array, you have to add the category ids into the array of category ids in the mock-data-loader file. The mock-data-loader file is next to the mock-categories file.</p>
					<p>After you added the category ids, you must load the mock blogs by clicking the Load Blogs button. After you loaded the blogs, go to the home page to make sure they loaded. This should load 24 mock blogs spanning two years. One blog for each month in the year</p>
				</div>
			</div>
			<button className="add-categories-button" onClick={props.loadCategories}>Load Categories</button>
			<button className="add-categories-button" onClick={props.loadBlogs}>Load Blogs</button>
			<button className="add-categories-button" onClick={props.loadAbout}>Load About</button>
		</div>
		)
};

module.exports = CategoryManager; 