var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;
var hashHistory = router.hashHistory;

var Login = React.createClass({
	onState: function(event){
		console.log(store.getState());
	},
	// componentDidMount(){
	// 	if(this.props.success === true){
	// 		hashHistory.push('/dashboard');
	// 	}
	// },
	onClick: function(event){
		event.preventDefault();
		var username = this.refs.username.value;
		var password = this.refs.password.value;
		this.props.dispatch(actions.getUser(username, password));
	},
	componentDidUpdate: function(){
		if(this.props.success === true){
			hashHistory.push('/dashboard');
		}
	},
	// componentWillUnmount: function(){
	// 	this.props.dispatch(actions.resetSuccess());
	// },
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
						{this.props.username}
					</div>

				</div>
			</div>
			)
	}
});

var mapStateToProps = function(state, props){
	return {
		token: state.token,
		username: state.username,
		success: state.success
	}
};

var Container = connect(mapStateToProps)(Login);

module.exports = Container;