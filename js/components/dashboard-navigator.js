var React = require('react');
var router = require('react-router');
var Link = router.Link;
var store = require('../store');
var actions = require('../actions/index');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var connect = require('react-redux').connect;
var Button = require('../store-button');
var Footer = require('./footer');
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
	// onStore: function(event){
	// 	event.preventDefault();
	// 	console.log(store.getState());
	// },
	componentDidLeave: function() {
		//this.props.dispatch(actions.kindWords(""));
	},
	render: function(){
		return (
			<div>
				<div className="dashboard">
				<div className="dashboard-wrapper">
					<div onClick={this.handleSignOut}className="sign-out">Sign Out</div>
					<div className="dashboard-top-navigator">
						<Link to="/dashboard"><h2 className="dashboard-header">Dashboard</h2></Link>
						<div className="dashboard-nav-bar">
							<div className="dashboard-nav-bar-item-wrapper"><Link to="/dashboard/edit"><div className="dashboard-nav-bar-item">Blogs</div></Link></div>
							<div className="dashboard-nav-bar-item-wrapper"><Link to="/dashboard/create"><div className="dashboard-nav-bar-item">Write New</div></Link></div>
							<div className="dashboard-nav-bar-item-wrapper"><Link to="/dashboard/about"><div className="dashboard-nav-bar-item">About</div></Link></div>
							<div className="dashboard-nav-bar-item-wrapper"><Link to="/dashboard/category"><div className="dashboard-nav-bar-item">Categories</div></Link></div>
						</div>
					</div>
				</div>
				<div className="edit-container">
				  <div className="dashboard-main">
				   {this.props.children}
				  </div>
				</div>
				<Footer />
				</div>
			</div>
			)
	}
});	

var mapStateToProps = function(state, props) {
	return {
		success: state.success,
		kindWords: state.kindWords,
		key: state.key
	}
}

var Container = connect(mapStateToProps)(DashboardNavBar);

module.exports= Container;


/*


<Link to="/">Home Page</Link>
<button onClick={this.onStore}>store</button>

<div className="dashboard-display-bar">
<ReactCSSTransitionGroup transitionName="kindWords" transitionEnterTimeout={500} transitionLeaveTimeout={500}><div key={this.props.kindWords} className="kind-words">{this.props.kindWords}</div></ReactCSSTransitionGroup>
</div>

				<div className="dashboard-main">
				{this.props.children}
				</div>

*/