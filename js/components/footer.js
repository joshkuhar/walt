var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group')
var FontAwesome = require('react-fontawesome');

var Footer = function(props){

	return (
			<footer className="footer">
			  <div className="footer-brand">walt</div>
			  <div className="footer-brand-message">yawping platform</div>
				 <ul className="footer-icons footer-section">
				  <a href=""><li className="icon"><FontAwesome className="fa fa-facebook" id="facebook" name="facebook"aria-hidden="true" onMouseEnter={props.didEnter}onMouseLeave={props.didLeave}/></li></a>
				  <a href=""><li className="icon"><FontAwesome className="fa fa-twitter" id="twitter"name="twitter"aria-hidden="true"onMouseEnter={props.didEnter}onMouseLeave={props.didLeave}/></li></a>
				  <li className="icon"><FontAwesome className="fa fa-instagram" id="instagram"name="instagram"aria-hidden="true"onMouseEnter={props.didEnter}onMouseLeave={props.didLeave}/></li>
				 </ul>
				<div className="footer-attributes footer-section">
				  <div className="footer-content">Images via Unsplash</div>
				</div>
				<div className="contact-info footer-section">
				  <div className="footer-content">Phone 555-867-5309</div>
				</div>
			  <div className="legal">Disclaimer: Lorem ipsum dolor sit amet, consectetur adipisicing elit animi voluptas amet, similique soluta iure illo fugit omnis dicta nam non.</div>
			</footer>
		)
}
module.exports = Footer;
