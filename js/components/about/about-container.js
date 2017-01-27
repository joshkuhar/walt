var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;

var About = require('./about');

var AboutContainer = React.createClass({
	componentDidMount: function() {
		this.props.dispatch(actions.getAbout());
	},
	render: function() {
		return (
				<div className="about-container">
				<div className="about-background"></div>	
					<div className="about-box a-text">
					  <About about={this.props.about} />
					</div>
					<div className="about-box about-image">
					  <img src="../assets/man-smoking.jpg" alt="picture" className="a-image"/>
					</div>
				</div>
			)
	}
});

var mapStateToProps = function(state, props) {
    return {
    	about: state.about,
    	aboutId: state.aboutId
    };
};

var Container = connect(mapStateToProps)(AboutContainer);

module.exports = Container;