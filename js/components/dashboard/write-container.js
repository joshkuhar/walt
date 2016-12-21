var React = require('react');
var ReactDOM = require('react-dom');

var NavBar = require('./dashboard-nav-bar');
var WriteBlog = require('./write');

var Write = function(props){
	return (
		<div>
			<NavBar />
			<WriteBlog />
		</div>
		)
}

module.exports = Write;