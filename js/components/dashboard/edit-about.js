var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;

var AboutEdit = React.createClass ({
	componentDidMount: function(){
		console.log(this.props.params);
		this.props.dispatch(actions.getBlogToEdit());
	},
	handleBlogChange: function(event) {
    	this.props.dispatch(actions.updateBlog(event.target.value));
	},
  	handleSubmit: function(event) {
    	event.preventDefault();
    	console.log(this.props.category);
    	this.props.dispatch(actions.postBlog(this.props.title, this.props.category, this.props.blog));
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
								<input className="about-button"type="submit" value="Submit" />
							</div>
			        	</div>

					<textarea className="about-textarea" value={this.props.blog} placeholder="tell the world about yourself..." onChange={this.handleBlogChange} />
				    </div>
		      </form>
		     </div>
    );
  }
});

var mapStateToProps = function(state, props) {
    return {
    	about: state.title,

    };
};

var Container = connect(mapStateToProps)(AboutEdit);

module.exports = Container;