var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;
var CategoryManager = require('./category-manager');

var Category = React.createClass({
	
	onClick: function(){
		console.log("I was clicked");
		this.props.dispatch(actions.loadCategories(this.props.categories));
	},
	render: function(){
		return (
			<CategoryManager onClick={this.onClick} />
			)
	}
});

var mapStateToProps = function(state, props) {
    return {
    	categories: state.categories

    };
};

var Container = connect(mapStateToProps)(Category);

module.exports = Container;

