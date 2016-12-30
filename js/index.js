require('babel-polyfill');
require('isomorphic-fetch');
var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;

var Login = require('./components/dashboard/login');
var App = require('./components/app');
var MainPage = require('./components/main/main-page');
var DashboardNavigator = require('./components/dashboard-navigator');
var EditList = require('./components/dashboard/edit-list-container');
var WriteBlog = require('./components/dashboard/write-container');
var Category = require('./components/dashboard/category-manager-container');

var Test = require('./test');
var EditBlog = require('./components/dashboard/edit-blog');


var Provider = require('react-redux').Provider;
var store = require('./store');

var Routes = (
	<Provider store={store} >
		<Router history={hashHistory}>
			<Route path="/test" component={Test} />
			<Route path="/dashboard/edit/:blog" component={EditBlog}/>
			<Route path="/" component={App}>
				<IndexRoute component={MainPage} />
			</Route>
			<Route path="/login" component={Login} />
			<Route path="/dashboard" component={DashboardNavigator}>
				<Route path="edit" component={EditList} />
				<Route path="create" component={WriteBlog} />
				<Route path="category" component={Category} />
			</Route>
		</Router>
	</Provider>
	);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(Routes, document.getElementById('app'));
});

