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
		 	<div className="banner-icon">walt</div>
			<div className="banner-header"><span className="shallow">text </span>content management</div>
		 </div>
		 <section className="explain">
		  <div className="explain-text">I sound my barbaric yawp over the rooftops of the world</div>
		  <div className="wit">Walt Whitman,<span className="whit"> yawper</span></div>
		 </section>
		  <section className="people">
		   <div className="person-a person">
		    <div className="image-wrapper">
		  	 <img src="../assets/old-text.jpg" alt="old-manuscript" className="person-pic a-pic"/>
		  	</div>
		  	  <div className="side-wrapper">
		  	    <div className="person-name">ink and pen</div>
		  	    <div className="person-text">personal, decorative, optimized for single viewer</div>
		  	  </div>
		   </div>
		   <div className="person-b person">
		   <div className="image-wrapper">
		  	<img src="../assets/typewriter.jpg" alt="typewriter" className="person-pic b-pic"/>
		   </div>
		     <div className="side-wrapper">
		  	  <div className="person-name">keys and ribbon</div>
		  	  <div className="person-text">reliable, efficient, can be used almost anywhere</div>
		     </div>
		   </div>
		   <div className="person-c person">
		   <div className="image-wrapper">
		  	<img src="../assets/laptop.jpg" alt="laptop-computer" className="person-pic c-pic"/>
		   </div>
		     <div className="side-wrapper">
		  	  <div className="person-name">bits and bytes</div>
		  	  <div className="person-text">versitile, portable, the world can hear you</div>
		     </div>
		   </div>
		  </section>
		  <article className="article-section">
		  <div className="section-a">
		   <h4 className="art-header">Be Heard</h4>
			<div className="section-inside">State your opinions, write a funny story, share your best recipes, complain about the weather, this app will let you reach the world.</div>
		  </div>
		  <div className="section-b">
		   <h4 className="art-header">Write Words</h4>
		 	<div className="section-inside"><span className="walt">walt</span> is a blogging platform that let's you write, publish, and manage your own blogs. It uses MongoDB, Express, React, and Node.js</div>
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