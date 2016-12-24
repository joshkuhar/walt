var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;

var BlogEntry = React.createClass({
    handleSubmit: function(event) {
  		event.preventDefault();
      var category = "comedy";
  		var text = this.refs.textEntry.value;
      var title = this.refs.titleEntry.value;
  		console.log("I am the first", text, title);
    	this.props.dispatch(actions.postBlog(title, text));
    },
  	render: function() {
      console.log("Bang");
    	return (
    	<div className="blog-entry-form">
        <form >
        <div className="blog-entry-large-container">
          <div className="blog-entry-form-title">Title</div>
          <div className="blog-entry-container">
            <div className="title-input-container">
              <input className="blog-entry-title-input" placeholder="title" type="text" ref="titleEntry" />
            </div>
            <div className="submit-button-container">
              <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            </div>
          </div>
          <div className="blog-body-header">Blog</div>
          <textarea className="blog-entry-body" placeholder="just start typing away..." ref="textEntry" />
        </div>
      	</form>
     	</div>
    	);
  	}
});

var mapStateToProps = function(state, props) {
    return {
        text: state.text
    };
};

var Container = connect(mapStateToProps)(BlogEntry);

module.exports = Container;