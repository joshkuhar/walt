var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;

var AnnalsList = require('./annals-list-container');

var AnnalsSelect = React.createClass({
	handleCategoryChange: function(event){
		event.preventDefault();
		this.props.dispatch(actions.selectCategory(event.target.value));
	},
	handleSubmit: function(event){
		event.preventDefault();
		if (this.props.category === "111") {
			this.props.dispatch(actions.getPosts())
			return
		}
		this.props.dispatch(actions.searchCategories(this.props.category));
	},
	render: function(){
		var categories = [];
		var categoryList = this.props.categories;
		for (var index in categoryList) {
			categories.push(
				<option key={index} value={categoryList[index]._id}>{categoryList[index].category}</option>	
				)
		}
		return (
			<div className="annals-container">
					<form className="annals-form">
						<select className="annals-selector" value={this.props.category} onChange={this.handleCategoryChange}>{categories}</select>
						<button className="annals-selector-button" onClick={this.handleSubmit}>search</button>
					</form>
					<AnnalsList />
			</div>
			)
	}
});

var mapStateToProps = function(state, props) {
    return {
		categories: state.categories,
		category: state.category,
    };
};

var Container = connect(mapStateToProps)(AnnalsSelect);

module.exports = Container;