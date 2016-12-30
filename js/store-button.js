var React = require('react');
var store = require('./store');
var connect = require('react-redux').connect;
var router = require('react-router');
var Link = router.Link;

var Button = React.createClass({
	onClick: function(){
		console.log(store.getState());
	},
	render: function(){
		return(
			<button onClick={this.onClick}>store</button>
			)
	}
});

var Container = connect()(Button);

module.exports= Container;