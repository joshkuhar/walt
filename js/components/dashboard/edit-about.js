var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;

var AboutEdit = React.createClass ({
	componentDidMount: function(){
		this.props.dispatch(actions.getAbout());
	},
	handleAboutChange: function(event) {
    	this.props.dispatch(actions.changeAbout(event.target.value));
	},
  	handleSubmit: function(event) {
    	event.preventDefault();
    	this.props.dispatch(actions.updateAbout(this.props.aboutId, this.props.about, this.props.token));
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
    	aboutId: state.aboutId,
    	token: state.token
    };
};

var Container = connect(mapStateToProps)(AboutEdit);

module.exports = Container;