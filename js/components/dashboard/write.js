var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');

var BlogEntry = React.createClass({
    handleSubmit: function(event) {
  		event.preventDefault();
      var category = "Tatiana";
  		var text = this.refs.textEntry.value;
      var title = this.refs.titleEntry.value;
  		console.log("I am the first", text, title);
    	//this.props.dispatch(actions.saveText(text));
    },
  	render: function() {
    	return (
    	<div className="blog-entry-form">
        <form >
          <div>Title</div>
          <input className="blog-entry-title" placeholder="title" type="text" ref="titleEntry" />
          <div>Entry</div>
          <textarea className="blog-entry-body" ref="textEntry" />
        	<input type="submit" value="Submit" onClick={this.handleSubmit}/>
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