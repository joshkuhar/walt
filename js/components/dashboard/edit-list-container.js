var React = require('react');
var ReactDOM = require('react-dom');

var NavBar = require('./dashboard-nav-bar');

var EditList = function(props){
	return (
		<div>
			<NavBar />
			<div>
				I'm the list for editing, blah, blah, blah
			</div>
		</div>
		)
};

module.exports = EditList;