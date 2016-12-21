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
var MainPage = require('./components/main/main-page');
var WriteBlog = require('./components/dashboard/write-container');
var EditList = require('./components/dashboard/edit-list-container');
var Login = require('./components/dashboard/login');

var Provider = require('react-redux').Provider;
var store = require('./store');

var Routes = (
	<Provider store={store} >
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={MainPage} />
				<Route path="test" component={Hello} />
				<Route path="dashboard" component={Login}/>
				<Route path="dashboard/write" component={WriteBlog} />
				<Route path="dashboard/update" component={EditList} />
			</Route>
		</Router>
	</Provider>
	);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(Routes, document.getElementById('app'));
});

