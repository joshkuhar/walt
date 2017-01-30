var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var Link = router.Link;

var Written = React.createClass({
	render: function(){
		return (
			<div className="confirmation-wrapper">
			    <div className="write-confirmation">
			      Congratulations, {this.props.actionName} successfull.
			    </div>
			  <Link to="/dashboard"><div className="link-to-dashboard">Go To Dashboard</div></Link>
			</div>
		 )
	}
});

var mapStateToProps = function(state, props) {
    return {
    	actionName: state.actionName
    };
};

var Container = connect(mapStateToProps)(Written);

module.exports = Container;