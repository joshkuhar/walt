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
  	onClick: function(event){
  		event.preventDefault();
  		//console.log(store.getState());
  		// this.props.dispatch(actions.kindWords("success"));
		// setTimeout(function(){ store.dispatch({type: 'KIND_WORDS', word: ""}) }, 1000);
	},
	render: function() {
	    return (
		    <div className="about-form-outside-container">
		      <form onSubmit={this.handleSubmit}>
			        <div className="about-form-container">
			        	<div className="about-header-container">
			        		<div className="textarea-title">Edit About</div>
			        	</div>
					<textarea className="textarea" value={this.props.about} placeholder="tell the world about yourself..." onChange={this.handleAboutChange} />
						<div className="buttons-container"> 
		        			<Link to="/dashboard"><button className="cancel-button">Cancel</button></Link>
							<input className="submit-button"type="submit" value="Submit" />
						</div>
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

/**/