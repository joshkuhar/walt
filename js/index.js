require('babel-polyfill');
require('isomorphic-fetch');
var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var IndexRoute = router.IndexRoute;
var browserHistory = router.browserHistory;

var Login = require('./components/dashboard/login');
var App = require('./components/app');
var MainPage = require('./components/main/main-page');
var About = require('./components/about/about-container');

var DashboardNavigator = require('./components/dashboard-navigator');
var EditList = require('./components/dashboard/edit-list-container');
var WriteBlog = require('./components/dashboard/write-container');
var Category = require('./components/dashboard/category-manager-container');
var EditAbout = require('./components/dashboard/edit-about');

var Test = require('./test');
var TestChild = require('./test-child');
var EditBlog = require('./components/dashboard/edit-blog');


var Provider = require('react-redux').Provider;
var store = require('./store');

var Routes = (
	<Provider store={store} >
		<Router history={browserHistory}>
			<Route path="/home/:wild" component={Test} >
				<IndexRoute component={TestChild} />
			</Route>
			<Route path="/abode" component={App}>
				<IndexRoute component={MainPage} />
				<Route path="yarn/:blogId" component={MainPage} />
				<Route path="about" component={About} />
			</Route>
			<Route path="/login" component={Login} />
			<Route path="/dashboard" component={DashboardNavigator}>
				<Route path="about" component={EditAbout}/>
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

