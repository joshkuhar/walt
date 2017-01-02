var React = require('react');
var ReactDOM = require('react-dom');

var About = function(props) {
	return (
		<div className="about">
			{props.about}
		</div>
		)
};

module.exports = About;

