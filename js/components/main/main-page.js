var React = require('react');
var Data = require('../../mock-data');
var Blogs = require('./blog-list-container');
var Sidebar = require('./sidebar-container');

var Main = function(props){
	return (
		<div className="main-parent-container">
			<div className="child-sidebar">
				<Sidebar sidebarHeader="Hermia's List" sidebarItems={Data.items}/>
			</div>
			<div className="child-blog">
				<Blogs blogs={Data.items}/>
			</div>
		</div>
		)
};

module.exports = Main;