var React = require('react');
var ReactDOM = require('react-dom');

var AnnalsList = require('./annals-list');

var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;

var AnnalsListContainer = React.createClass({
	componentDidUpdate: function(){
		scroll(0, 810);
	},
	onClick: function(event) {
		event.preventDefault();
		this.props.dispatch(actions.getSection(this.props.posts.length));
	},
	render: function(){
		return (
			<div className="annals-container">
				<div className="annals">
					<AnnalsList postList={this.props.posts} categories={this.props.categories}/>
					<div className="annals-next-navigator" onClick={this.onClick}>Next</div>
				</div>
			</div>
			)
	}
});
var mapStateToProps = function(state, props) {
    return {
		posts: state.posts,
		categories: state.categories,
		category: state.category,
		sectionNumber: state.sectionNumber
    };
};

var Container = connect(mapStateToProps)(AnnalsListContainer);

module.exports = Container;