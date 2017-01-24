var React = require('react');
var router = require('react-router');
var Link = router.Link;
var store = require('../store');
var connect = require('react-redux').connect;

var EditPostNav  = React.createClass({
	render: function(){
		return (
			<div>
				<div className="edit-blog-heading">Edit Blog Posts</div>
				<div>
					{this.props.children}
				</div>
			</div>
			)
	}
});	

var Container = connect()(EditPostNav);

module.exports= Container;