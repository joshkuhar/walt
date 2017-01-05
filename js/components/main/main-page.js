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
	handleCategoryChange: function(event){
		event.preventDefault();
		console.log(event.target.value);
		this.props.dispatch(actions.selectCategory(event.target.value));
	},
	handleSubmit: function(event){
		event.preventDefault();
		console.log(this.props.category, "I was handled");
		this.props.dispatch(actions.searchCategories(this.props.category));
	},
	render: function(){
		var blogs = this.props.blogs;
		var categories = [];
		var categoryList = this.props.categories;
		for (var index in categoryList) {
			categories.push(
				<option key={index} value={categoryList[index]._id}>{categoryList[index].category}</option>	
				)
		}
		return (
			<div className="main-parent-container">
				<div className="child-sidebar">
					<div className="sidebar-selector-container"><div className="search-selector-header">Categories</div>
					<form >
						<select value={this.props.category} onChange={this.handleCategoryChange}>{categories}</select>
						<button className="sidebar-button" onClick={this.handleSubmit}>submit</button>
					</form>
					</div>
					<Sidebar sidebarHeader="Recent Posts" sidebarItems={blogs} categories={this.props.categories}/>
				</div>
				<div className="child-blog">
					<Blogs blogs={blogs} selectedBlog={this.props.params.blogId} categories={this.props.categories}/>
				</div>
			</div>
			)
	}
});

var mapStateToProps = function(state, props) {
    return {
		blogs: state.blogs,
		category: state.category,
		categories: state.categories
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