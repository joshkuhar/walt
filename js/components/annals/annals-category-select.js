var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;

var AnnalsList = require('./annals-list-container');

var AnnalsSelect = React.createClass({
	componentDidMount: function(){
		if(this.props.categories.length == 1){
			this.props.dispatch(actions.getPosts())
		}
	},
	handleCategoryChange: function(event){
		event.preventDefault();
		this.props.dispatch(actions.selectCategory(event.target.value));
	},
	handleSubmit: function(event){
		event.preventDefault();
		if (this.props.category === "111") {
			this.props.dispatch(actions.getPostsAgain())
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
						<div className="annals-image-text">your writings</div>
						<div className="annals-image-lower-text"></div>
						<div className="selector-wrapper">
						 <select className="annals-selector" value={this.props.category} onChange={this.handleCategoryChange}>{categories}</select>
						 <button className="annals-selector-button" onClick={this.handleSubmit}>filter</button>
						</div>
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