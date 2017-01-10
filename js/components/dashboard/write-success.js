var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var Link = router.Link;

var Written = React.createClass({
	render: function(){
		return (<div>{this.props.content}</div>)
	}
});

var mapStateToProps = function(state, props) {
    return {
    	content: state.content,
    };
};

var Container = connect(mapStateToProps)(Written);

module.exports = Container;