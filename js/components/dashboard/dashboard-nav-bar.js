var React = require('react');
var Data = require('../../mock-data');
var router = require('react-router');
var Link = router.Link;

var EditNavBar  = function(props){
	return (
		<div className="dashboard-nav-bar">
			<Link to="/dashboard/write"><div className="dashboard-nav-bar-item">Write New Blog</div></Link>
			<Link to="/dashboard/update"><div className="dashboard-nav-bar-item">Blog List</div></Link>
		</div>
		)
}
module.exports = EditNavBar;

