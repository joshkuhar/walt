var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;
var CategoryManager = require('./category-manager');

var Category = React.createClass({
	loadAbout: function(){
		// console.log(this.props.about);
		this.props.dispatch(actions.loadAbout(this.props.about, this.props.token));
	},
	loadCategories: function(){
		//this.props.dispatch(actions.getCategories());
		// this.props.dispatch(actions.loadCategories(this.props.categories));
	},
	loadBlogs: function(){
		var categories = [];
		for (var index = 1; index<this.props.categories.length; index++){
			categories.push(this.props.categories[index]._id);
		}
		var blogArray = [];
		var p = this.props.mockPosts;
		for (var index = 0; index < p.months.length*2; index++) {
			var year = index < p.months.length ? 0 : 1;
			blogArray.push({
				title: p.titles[index%p.titles.length],
				content: p.content[index%p.content.length],
				month: p.months[index%p.months.length],
				date: p.dates[index%p.dates.length],
				year: p.years[year],
				categoryId: categories[index%categories.length]
			})
		}
		//this.props.dispatch(actions.loadBlogs(this.props.blogs));
	},
	render: function(){
		return (
			<CategoryManager loadCategories={this.loadCategories} loadBlogs={this.loadBlogs} loadAbout={this.loadAbout}/>
			)
	}
});

var mapStateToProps = function(state, props) {
    return {
    	categories: state.categories,
    	mockPosts: state.mockPosts,
    	token: state.token,
    	about: state.about

    };
};

var Container = connect(mapStateToProps)(Category);

module.exports = Container;

