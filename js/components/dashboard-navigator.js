var React = require('react');
var router = require('react-router');
var Link = router.Link;
var store = require('../store');
var actions = require('../actions/index');
var connect = require('react-redux').connect;
var Button = require('../store-button');
var router = require('react-router');
var hashHistory = router.hashHistory;

var DashboardNavBar  = React.createClass({
	// componentDidMount: function(){
	// 	if(this.props.success === false){
	// 		hashHistory.push('/login');
	// 	}
	// },
	handleSignOut: function(event){
		event.preventDefault();
		// this.props.dispatch(actions.logOut());
		hashHistory.push('/login');
	},
	onStore: function(event){
		event.preventDefault();
		console.log(store.getState());
	},
	render: function(){
		return (
			<div>
				<Link to="/">Home Page</Link>
				<button onClick={this.onStore}>store</button>
				<div onClick={this.handleSignOut}className="sign-out">Sign Out</div>
				<h2 className="dashboard-header">Dashboard</h2>
				<div className="dashboard-nav-bar">
					<div className="dashboard-nav-bar-item-wrapper"><Link to="/dashboard/edit"><div className="dashboard-nav-bar-item">Blog List</div></Link></div>
					<div className="dashboard-nav-bar-item-wrapper"><Link to="/dashboard/create"><div className="dashboard-nav-bar-item">Write New Blog</div></Link></div>
					<div className="dashboard-nav-bar-item-wrapper"><Link to="/dashboard/about"><div className="dashboard-nav-bar-item">Edit About</div></Link></div>
					<div className="dashboard-nav-bar-item-wrapper"><Link to="/dashboard/category"><div className="dashboard-nav-bar-item">Categories</div></Link></div>
				</div>
				{this.props.children}
			</div>
			)
	}
});	

var mapStateToProps = function(state, props) {
	return {
		success: state.success
	}
}

var Container = connect(mapStateToProps)(DashboardNavBar);

module.exports= Container;
