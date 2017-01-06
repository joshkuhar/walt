var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;

var AboutEdit = React.createClass ({
	componentDidMount: function(){
		// This is the id for the about page. To prevent multiple abouts, 
		// only GET, PUT, and DELETE are utilized through this component.
		var id = "586e319000fc4212847818ab"; 
		this.props.dispatch(actions.getAbout(id));
	},
	handleAboutChange: function(event) {
    	this.props.dispatch(actions.changeAbout(event.target.value));
	},
  	handleSubmit: function(event) {
    	event.preventDefault();
		var id = "586e319000fc4212847818ab";
    	this.props.dispatch(actions.updateAbout(id, this.props.about));
	},
  	onClick: function(){
  		console.log(store.getState());
	},
	render: function() {
	    return (
		    <div className="about-form-outside-container">
		      <form onSubmit={this.handleSubmit}>
			        <div className="about-form-container">
			        	<div className="about-header-container">
			        		<h3 className="about-title">Edit About</h3>
			        		<div>{this.props.success}</div>
			        		<div className="about-button-wrapper"> 
			        			<Link to="/dashboard"><button>Cancel</button></Link>
								<input className="about-button"type="submit" value="Submit" />
							</div>
			        	</div>
					<textarea className="about-textarea" value={this.props.about} placeholder="tell the world about yourself..." onChange={this.handleAboutChange} />
				    </div>
		      </form>
		     </div>
    );
  }
});

var mapStateToProps = function(state, props) {
    return {
    	about: state.about,
    	success: state.success
    };
};

var Container = connect(mapStateToProps)(AboutEdit);

module.exports = Container;