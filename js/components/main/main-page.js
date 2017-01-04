var React = require('react');
var ReactDOM = require('react-dom');
var Data = require('../../mock-categories');
var Blogs = require('./blog-list-container');
var Sidebar = require('./sidebar-container');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');

var Main = React.createClass({
	componentDidMount: function(){
		this.props.dispatch(actions.getBlogs());
	},
	render: function(){
		var blogs = this.props.blogs;
		return (
			<div className="main-parent-container">
				<div className="child-sidebar">
					<Sidebar sidebarHeader="Category List" sidebarItems={blogs}/>
				</div>
				<div className="child-blog">
					<Blogs blogs={blogs} selectedBlog={this.props.params.blogId}/>
				</div>
			</div>
			)
	}
});

var mapStateToProps = function(state, props) {
    return {
		blogs: state.blogs
    };
};

var Container = connect(mapStateToProps)(Main);

module.exports = Container;

/*

blog: state.blogs[0].blogPost.title
{ 
	"_id" : ObjectId("5869b7bd25eaff533b583cd7"), 
	"blogPost" : 
	{ 
		"title" : "If I had a dollar for every", 
		"content" : "Lorem ipsum dolor sit amet.", 
		"month" : "July", 
		"date" : "26", 
		"year" : "2016", 
		"categoryId" : ObjectId("5869b745b85bc0532e4c92f8") 
	}, 
	"__v" : 0 
}
*/