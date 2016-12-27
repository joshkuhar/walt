var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('./actions/index');
var store = require('./store');
var router = require('react-router');
var Link = router.Link;

var Test = React.createClass({
	componentDidMount: function(){
		this.props.dispatch(actions.getBlog());
	},
	render: function(){
		return(
			<div>
				<Link to="/dashboard/create">dashboardcreate</Link>
				<div>I'm the test component</div>
				<div>{this.props.title}</div>
				<div className="output">{this.props.content}</div>
			</div>
			)
	}
});

var mapStateToProps = function(state, props) {
    return {
    	title: state.title,
        content: state.content,
    };
};

var Container = connect(mapStateToProps)(Test);

module.exports = Container;
