var React = require('react');
var ReactDOM = require('react-dom');

var AnnalsList = require('./annals-list');

var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;

var AnnalsListContainer = React.createClass({
	componentDidMount: function(){
		console.log("I mounted", this.props.posts);
		//this.props.dispatch(actions.getPosts());
	},
	render: function(){
		return (
			<div className="annals-container">
				<div className="annals">
					<div>I'm a controller</div>
					<AnnalsList postList={this.props.posts} categories={this.props.categories}/>
				</div>
			</div>
			)
	}
});

var mapStateToProps = function(state, props) {
    return {
		posts: state.posts,
		categories: state.categories
    };
};

var Container = connect(mapStateToProps)(AnnalsListContainer);

module.exports = Container;