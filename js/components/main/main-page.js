var React = require('react');
var Data = require('../../mock-data');
var Blogs = require('./blog-list-container');
var Sidebar = require('./sidebar-container');

var Main = function(props){
	return (
		<div>
			<Blogs blogs={Data.items}/>
			<Sidebar sidebarHeader="Hermia's List" sidebarItems={Data.items}/>
		</div>
		)
};

module.exports = Main;