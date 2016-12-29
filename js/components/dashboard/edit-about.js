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
		    <div className="about-entry-form">
		    <Link to="/test">test</Link>
		     <button onClick={this.onClick}>store</button>
		      <form onSubmit={this.handleSubmit}>
		        <div className="blog-entry-large-container">
			        <div className="blog-entry-container">
			        	<div className="submit-button-container">
							<input type="submit" value="Submit" />
			        	</div>
				    </div>
			        <textarea className="blog-entry-body" value={this.props.blog} placeholder="type away..." onChange={this.handleBlogChange} />
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