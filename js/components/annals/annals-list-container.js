var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;

var AnnalsList = require('./annals-list');

var AnnalsListContainer = React.createClass({
	componentDidMount: function() {
		scroll(0,1);
	},
	componentDidUpdate: function(){
		//scroll(0, 810);
	},
	onClick: function(event) {
		event.preventDefault();
		if (this.props.category === "111"){
			this.props.dispatch(actions.getSection(this.props.posts.length));
			return
		}
		this.props.dispatch(actions.getCategorySection(this.props.category, this.props.posts.length));
	},
	render: function(){
		return (
				<div className="annals">
					<AnnalsList postList={this.props.posts} categories={this.props.categories}/>
					<div className="annals-next-navigator" onClick={this.onClick}>More</div>
				</div>

			)
	}
});
var mapStateToProps = function(state, props) {
    return {
		posts: state.posts,
		sectionNumber: state.sectionNumber,
		categories: state.categories,
		category: state.category
    };
};

var Container = connect(mapStateToProps)(AnnalsListContainer);

module.exports = Container;
