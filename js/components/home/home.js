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
			<div className="banner-header">content management</div>
		 </div>
		 <section className="explain">
		  <div className="explain-text">mongodb mongoose express react react-router redux nodejs passport-jwt</div>
		  <div className="explain-footer"></div>
		 </section>
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
		  <section className="people">
		   <div className="person-a person">
		    <div className="image-wrapper">
		  	 <img src="../assets/man-white-beard.jpg" alt="bearded-man" className="person-pic a-pic"/>
		  	</div>
		  	<div className="person-name">Lorem</div>
		  	<div className="person-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque odit nemo quisquam voluptatem ullam repellat totam impedit aut autem necessitatibus.</div>	
		   </div>
		   <div className="person-b person">
		   <div className="image-wrapper">
		  	<img src="../assets/woman-smiling.jpg" alt="woman-smiling" className="person-pic b-pic"/>
		   </div>
		  	<div className="person-name">Lorm</div>
		  	<div className="person-text">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae corporis consequuntur ea dolore numquam esse natus nisi suscipit architecto perspiciatis? Incidunt voluptatibus ab suscipit fuga laborum quas magni eveniet minus.
		  	</div>
		   </div>
		   <div className="person-c person">
		   <div className="image-wrapper">
		  	<img src="../assets/man-confetti.jpg" alt="man-confetti" className="person-pic c-pic"/>
		   </div>
		  	<div className="person-name">Ipsum</div>
		  	<div className="person-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore obcaecati natus cumque tenetur placeat sapiente in voluptate molestias soluta maiores. Perferendis laudantium unde deleniti expedita illum aliquid, ea quia officiis.
		  		Reprehenderit explicabo quis id voluptatum quisquam, incidunt numquam deleniti? Libero doloremque aliquid.</div>
		   </div>
		  </section>
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