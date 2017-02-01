var React = require('react');
var ReactDOM = require('react-dom');

var About = function(props) {
	return (
			<div className="about">
				<div className="about-name">you</div>
				<div className="about-line"></div>
				<div className="about-title">practiced yawper</div>
				<div className="about-text">{props.about}</div>
			</div>
	
		)
};

module.exports = About;

