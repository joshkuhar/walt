var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var store = require('../store');

var EssayForm = React.createClass({
    handleSubmit: function(event) {
  		event.preventDefault();
  		var text = this.refs.textEntry.value;
  		console.log("I am the first", text);
    	this.props.dispatch(actions.saveText(text));
    },
  	render: function() {
    	return (
    	<div>
      		<form >
        		<label>
          			Name:
          			<textarea className="essay-field" ref="textEntry" />
        		</label>
        		<input  type="submit" value="Submit" onClick={this.handleSubmit}/>
      		</form>
      		<div>
      		{this.props.text}
      		</div>
     	</div>
    	);
  	}
});

var mapStateToProps = function(state, props) {
    return {
        text: state.text
    };
};

var Container = connect(mapStateToProps)(EssayForm);

module.exports = Container;
/*

*/