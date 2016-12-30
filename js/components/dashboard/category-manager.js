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
			<div className="category-manager-instructions">If you don't see any categories in the drop down menue on write blog. You must add categories before writing blog.</div>
			<button className="add-categories-button" onClick={props.onClick}>Add Categories</button>
		</div>
		)
};

module.exports = CategoryManager; 