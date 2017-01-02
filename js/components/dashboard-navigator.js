var React = require('react');
var router = require('react-router');
var Link = router.Link;
var Button = require('../store-button');

var DashboardNavBar  = function(props){
	return (
		<div>
			<Button />
			<Link to="/login" ><div className="sign-out">Sign Out</div></Link>
			<h2 className="dashboard-header">Dashboard</h2>
			<div className="dashboard-nav-bar">
				<Link to="/dashboard/edit"><div className="dashboard-nav-bar-item">Blog List</div></Link>
				<Link to="/dashboard/create"><div className="dashboard-nav-bar-item">Write New Blog</div></Link>
				<Link to="/dashboard/about"><div className="dashboard-nav-bar-item">Edit About</div></Link>
				<Link to="/dashboard/category"><div className="dashboard-nav-bar-item">Categories</div></Link>
			</div>
			{props.children}
		</div>
		)
}	
module.exports = DashboardNavBar;