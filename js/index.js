require('babel-polyfill');
require('isomorphic-fetch');
var React = require('react');
var ReactDOM = require('react-dom');

var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

var Hello = require('./components/hello');
var App = require('./components/app');

var Provider = require('react-redux').Provider;
var store = require('./store');

var Routes = (
	<Provider store={store} >
		<App/>
	</Provider>
	);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(Routes, document.getElementById('app'));
});