var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;


var EssayForm = React.createClass ({
  handleChange: function(event) {
    this.props.dispatch(actions.saveText(event.target.value));
  },
  handleSubmit: function(event) {
    event.preventDefault();
    var line = this.props.text;
    console.log("I was clicked");
    this.props.dispatch(actions.line(this.props.text));
  },
  onClick: function(){
  	console.log(store.getState());
  },

  render: function() {
    return (
	    <div>
	     <button onClick={this.onClick}>store</button>
	      <form onSubmit={this.handleSubmit}>
	        <label>
	          Name:
	          <textarea className="textareax"value={this.props.text} placeholder="type away..." onChange={this.handleChange} />

	        </label>
	        <input type="submit" value="Submit" />
	      </form>
	      <div className="output">{this.props.line}</div>
	     </div>
    );
  }
});

// module.exports = EssayForm;

var mapStateToProps = function(state, props) {
    return {
        text: state.text,
        line: state.line
    };
};

var Container = connect(mapStateToProps)(EssayForm);

module.exports = Container;