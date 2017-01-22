var React = require('react');
var ReactDOM = require('react-dom');

var About = function(props) {
	return (
		<div className="about-wrapper">
			<img src="" alt="picture" className="about-image"/>
			<div className="about">
				{props.about}
			</div>
		</div>
		)
};

module.exports = About;

