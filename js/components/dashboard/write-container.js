var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Link = router.Link;

var WriteBlog = require('./write');

var Write = function(props){
	return (
			<WriteBlog />
		)
};

module.exports = Write;