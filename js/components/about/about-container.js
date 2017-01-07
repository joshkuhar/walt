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
		var id = "58711570ac7bfb11c9da3659";
		this.props.dispatch(actions.getAbout(id));
	},
	render: function() {
		return (
			<div className="about-container">	
				<h3>About Me</h3>
				<About about={this.props.about} />
			</div>
			)
	}
});

var mapStateToProps = function(state, props) {
    return {
    	about: state.about,
    	success: state.sucess
    };
};

var Container = connect(mapStateToProps)(AboutContainer);

module.exports = Container;