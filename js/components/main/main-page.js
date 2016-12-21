var React = require('react');

var Posts = require('./blog-post-list');
var Sidebar = require('./sidebar-container');


var Main = function(props){
	return (
		<div>
			<Posts />
			<Sidebar />
		</div>
		)
};

module.exports = Main;