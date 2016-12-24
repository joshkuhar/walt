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
  		var text = this.refs.textEntry.value 
      console.log(this.refs);
      var x = <div>foo<br/>bar</div>
      var newText = text.split("/r").map(function(item){return (  <span>  {item} <br/>  </span> )});
      //var title = this.refs.titleEntry.value; 
      this.props.dispatch(actions.saveText(x));
  		console.log(this.props);
    //   console.log(this.refs, this.refs.textEntry.value);
     
    	//this.props.dispatch(actions.postBlog(title, text));    
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
              <button type="submit" value="Submit" onClick={this.handleSubmit} >submit</button>
            </div>
          </div>
          <div className="blog-body-header">Blog</div>
          <textarea id="t1" className="textareax" placeholder="just start typing away..." ref="textEntry" ></textarea>
        </div>
      	</form>
        <div>Place Holder</div>
        <div>{this.props.text}</div>
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
/*

{this.props.text.split(“\n”).map(function(item) {
  return (
    <span>
      {item}
      <br/>
    </span>
  )
})}
{this.props.text.split("/n").map(function(item){return (  <span>  {item} <br/>  </span> )})}
*/