var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');

var Login = React.createClass({
	onClick: function(){
		console.log("I was clicked");
	},
	render: function(){
		return(
			<div className="login">
				<input type="text" placeholder="username" />
				<input type="text" placeholder="password" />
				<button onClick={this.onClick}>submit</button>
			</div>
			)
	}
});

module.exports = Login;