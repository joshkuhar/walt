var React = require('react');
var router = require('react-router');
var Link = router.Link;
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;

var Home = function(props){
	return (
		<div className="home">
		 <div className="picture-a">
		 	<div className="banner-icon">aleks</div>
			<div className="banner-header">ipsum dolor sit</div>
			<div className="banner-text"></div>
		 </div>
		 
		  <article className="article-section">
		  <div className="section-a">
		   <h4 className="art-header">Lysander</h4>
			<div className="section-inside">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos temporibus veniam eveniet, optio, reprehenderit magnam incidunt consequuntur iste at assumenda est neque, accusantium aliquam animi unde ex deleniti magni repudiandae.</div>
			<button className="section-button">button</button>
		  </div>
		  <div className="section-b">
		   <h4 className="art-header">Cleopatra</h4>
		 	<div className="section-inside">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ullam dolorem voluptate accusamus enim voluptatibus! Possimus ipsum vero, qui, illo hic, praesentium distinctio quam voluptas aliquam facere sequi, magni voluptate!</div>
		 	<button className="section-button">button</button>
		  </div>
		  </article>	
		</div>
		)
}

module.exports = Home;










/*

var mapStateToProps = function(state, props) {
    return {
    	landingPost: state.landingPost,
		posts: state.posts,
		categories: state.categories

    };
};

var Container = connect(mapStateToProps)(LandingContainer);

module.exports = Container;



*/