var React = require('react');
var router = require('react-router');
var Link = router.Link;
var store = require('../store');
var connect = require('react-redux').connect;

var EditBlogNav  = React.createClass({
	render: function(){
		return (
			<div>
				<div className="blog-to-edit-navigator">
					<h3>Blog List To Edit</h3>
					<div className="blog-to-edit-instruction">Click on the blog title to edit</div>
				</div>
				<div>
					{this.props.children}
				</div>
			</div>
			)
	}
});	

var Container = connect()(EditBlogNav);

module.exports= Container;