var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;

var Post = require('./post');

var PostContainer = React.createClass({
	render: function(){
		return (
			<div className="post-wrapper">
				<Post posts={this.props.posts} categories={this.props.categories} postId={this.props.params.postId} link="annals" linkName="back"/>
			</div>
			)
	}
});

var mapStateToProps = function(state, props) {
    return {
		posts: state.posts,
		categories: state.categories,
    };
};

var Container = connect(mapStateToProps)(PostContainer);

module.exports = Container;
