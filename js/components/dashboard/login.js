var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');

var Login = React.createClass({
	onState: function(event){
		console.log(store.getState());
	},
	onClick: function(event){
		event.preventDefault();
		console.log("I was clicked");
		console.log(this.refs.username.value, this.refs.password.value);
		//this.props.dispatch(actions.loginMessage());
	},
	render: function(){
		return(
			<div className="login-container">
				<button onClick={this.onState}>store</button>
				<h2>Login</h2>
				<div className="login">
					<input type="text" placeholder="username" ref="username"/>
					<input type="text" placeholder="password" ref="password"/>
					<button onClick={this.onClick}>submit</button>
					<div className="login-message">
						<div>{this.props.loginMessage}</div>
					</div>

				</div>
			</div>
			)
	}
});

var mapStateToProps = function(state, props){
	return {
		loginMessage: state.loginMessage
	}
};

var Container = connect(mapStateToProps)(Login);

module.exports = Container;