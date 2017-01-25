var React = require('react');
var connect = require('react-redux').connect;
var router = require('react-router');
var Link = router.Link;
var actions = require('../actions/index');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group')
var FontAwesome = require('react-fontawesome');

// var store = require('../store');
var App = React.createClass({
	// getStore: function(){
	// 	console.log(store.getState());
	// },
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
					<h1>aleks</h1>
					<div className="home-nav-bar">
						<div className="nav-bar-item-container"><Link to={"/"}><div className="nav-bar-item">Home</div></Link></div>
						<div className="nav-bar-item-container"><Link to={"/annals"}><div className="nav-bar-item">Ponderings</div></Link></div>
						<div className="nav-bar-item-container"><Link to={"/about"}><div className="nav-bar-item">About</div></Link></div>
						<button className="hg-top">Learn More</button>
					</div>
				 </div>
				</div>
				<div>
					{this.props.children}
				</div>
				<div className="footer">
				 <ul className="footer-icons">
					<a href=""><li className="icon"><FontAwesome className="fa fa-facebook" id="facebook" name="facebook"aria-hidden="true" onMouseEnter={this.didEnter}onMouseLeave={this.didLeave}/></li></a>
					<a href=""><li className="icon"><FontAwesome className="fa fa-twitter" id="twitter"name="twitter"aria-hidden="true"onMouseEnter={this.didEnter}onMouseLeave={this.didLeave}/></li></a>
					<li className="icon"><FontAwesome className="fa fa-instagram" id="instagram"name="instagram"aria-hidden="true"onMouseEnter={this.didEnter}onMouseLeave={this.didLeave}/></li>
				 </ul>
				</div>
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

*/


	