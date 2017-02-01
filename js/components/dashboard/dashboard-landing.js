var React = require('react');
var store = require('../../store');
var actions = require('../../actions/index');
var connect = require('react-redux').connect;

var DashboardLanding = React.createClass({
	componentDidMount: function(){
		this.props.dispatch(actions.getYawpCount());
	},
	render: function(){
		return (
			  <div className="dashboard-landing">
			    <div className="dashboard-greeting">
			      Welcome to Yawp
			      <div className="yawp-definition">
			        yawp: <span className="yawp-defined">a raucous complaint, often longwinded, sometimes humourous, sometimes self-indulgent, mostly harmless</span>
			      </div>
			      <div className="yawp-count">You have yawped <span className="yawp-number">{this.props.yawpCount}</span> times.</div>
			    </div>
			  </div>
			)
		}
});

var mapStateToProps = function(state, props) {
	return {
		yawpCount: state.yawpCount
	}
}

var Container = connect(mapStateToProps)(DashboardLanding);
module.exports= Container;