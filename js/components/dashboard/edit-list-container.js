var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Link = router.Link;
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var BlogToEditList = require('./edit-list');


var EditList = React.createClass({
	componentDidMount: function(){
		this.props.dispatch(actions.getBlogs());
	},
	render: function(){
	var amountToDisplay = this.props.blogs.length>10 ? 10 : this.props.blogs.length;
	return (
		<div className="blog-to-edit-list-container">
			<BlogToEditList blogsToEdit={this.props.blogs} numberOfBlogsToDisplay={amountToDisplay}/>
		</div>							
		
		)
	}
});

var mapStateToProps = function(state, props){
	return {
		blogs: state.blogs
	}
};

var Container = connect(mapStateToProps)(EditList);

module.exports = Container;