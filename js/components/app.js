var React = require('react');
var connect = require('react-redux').connect;
var router = require('react-router');
var Link = router.Link;
var actions = require('../actions/index');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group')
var FontAwesome = require('react-fontawesome');
var Footer = require('./footer');

// var store = require('../store');
var App = React.createClass({
	// getStore: function(){
	// 	console.log(store.getState());
	// },
	componentDidMount: function() {
		scroll(0, 1);
	},
	didEnter: function(event) {
		event.preventDefault();
		this.props.dispatch(actions.displayFa(event.target.id));
	},
	didLeave: function() {
		this.props.dispatch(actions.displayFa(""));
	},
	render: function(){
		return(
			<div className="app">
				<div className="top-navigation">
				 <div className="top-navigation-wrapper">
					<h1>walt</h1>
					<div className="home-nav-bar">
						<div className="nav-bar-item-container"><Link to={"/"}><div className="nav-bar-item">Home</div></Link></div>
						<div className="nav-bar-item-container"><Link to={"/today"}><div className="nav-bar-item">Recent</div></Link></div>
						<div className="nav-bar-item-container"><Link to={"/annals"}><div className="nav-bar-item">Writings</div></Link></div>
						<div className="nav-bar-item-container"><Link to={"/about"}><div className="nav-bar-item">About</div></Link></div>
					</div>
				 </div>
				</div>
				<div className="app-children">
					{this.props.children}
				</div>
				<Footer />
			</div>
			)
	}
});
var mapStateToProps = function(state, props) {
    return {
    	fa: state.fa
    };
};
var Container = connect(mapStateToProps)(App);

module.exports= Container;



/*

<img src="../abc/xyz/img/myimage.png" />
 
<div className="nav-bar-item-container"><div className="nav-bar-item">Contact Me</div></div>
<button onClick={this.getStore}>store</button>
<img src="../assets/on-phone.jpg" alt="on-phone" className="top-navigation-picture"/>


		<div className="icon-bar-wrapper">
		 <div className="icon-bar">
			<ul className="icon-list">
				<ReactCSSTransitionGroup transitionName="display" transitionEnterTimeout={500} transitionLeaveTimeout={10}><li key={this.props.fa} className="icon-name">{this.props.fa}</li></ReactCSSTransitionGroup>
				<a href=""><li className="icon"><FontAwesome className="fa fa-facebook" id="facebook" name="facebook"aria-hidden="true" onMouseEnter={this.didEnter}onMouseLeave={this.didLeave}/></li></a>
				<a href=""><li className="icon"><FontAwesome className="fa fa-twitter" id="twitter"name="twitter"aria-hidden="true"onMouseEnter={this.didEnter}onMouseLeave={this.didLeave}/></li></a>
				<li className="icon"><FontAwesome className="fa fa-instagram" id="instagram"name="instagram"aria-hidden="true"onMouseEnter={this.didEnter}onMouseLeave={this.didLeave}/></li>
			</ul>
		 </div>
		</div>



	<footer className="footer">
		<div className="footer-brand">walt</div>
		<div className="footer-brand-message">content management</div>
		 <ul className="footer-icons footer-section">
			<a href=""><li className="icon"><FontAwesome className="fa fa-facebook" id="facebook" name="facebook"aria-hidden="true" onMouseEnter={this.didEnter}onMouseLeave={this.didLeave}/></li></a>
			<a href=""><li className="icon"><FontAwesome className="fa fa-twitter" id="twitter"name="twitter"aria-hidden="true"onMouseEnter={this.didEnter}onMouseLeave={this.didLeave}/></li></a>
			<li className="icon"><FontAwesome className="fa fa-instagram" id="instagram"name="instagram"aria-hidden="true"onMouseEnter={this.didEnter}onMouseLeave={this.didLeave}/></li>
		 </ul>
		<div className="footer-attributes footer-section">
			<div className="footer-content">Images via Unsplash</div>
		</div>
		<div className="contact-info footer-section">
			<div className="footer-content">Phone 555-867-5309</div>
		</div>
		<div className="legal">Disclaimer: Lorem ipsum dolor sit amet, consectetur adipisicing elit animi voluptas amet, similique soluta iure illo fugit omnis dicta nam non.</div>
	
	</footer>

*/


	