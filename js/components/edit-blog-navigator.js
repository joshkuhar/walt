var React = require('react');
var router = require('react-router');
var Link = router.Link;
var store = require('../store');
var connect = require('react-redux').connect;

var EditPostNav  = React.createClass({
	render: function(){
		return (
			<div>
				<div className="edit-list-instructions">
					Click on the the title of the blog post you would like to edit.
				</div>
				<h3 className="edit-list-heading">Blog Posts</h3>
				<div>
					{this.props.children}
				</div>
			</div>
			)
	}
});	

var Container = connect()(EditPostNav);

module.exports= Container;