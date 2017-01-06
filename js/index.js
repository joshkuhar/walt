require('babel-polyfill');
require('isomorphic-fetch');
var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var IndexRoute = router.IndexRoute;
var browserHistory = router.browserHistory;


var App = require('./components/app');
var MainPage = require('./components/main/main-page');
var About = require('./components/about/about-container');

var Login = require('./components/dashboard/login');
var DashboardNavigator = require('./components/dashboard-navigator');
var WriteBlog = require('./components/dashboard/write-container');
var Category = require('./components/dashboard/category-manager-container');
var EditAbout = require('./components/dashboard/edit-about');
var EditBlogNav = require('./components/edit-blog-navigator');
var EditList = require('./components/dashboard/edit-list-container');
var EditBlog = require('./components/dashboard/edit-blog');


var Provider = require('react-redux').Provider;
var store = require('./store');

var Routes = (
	<Provider store={store} >
		<Router history={browserHistory}>
			<Route path="/abode" component={App}>
				<IndexRoute component={MainPage} />
				<Route path="yarn/:blogId" component={MainPage} />
				<Route path="next/:page" component={MainPage} />
				<Route path="about" component={About} />
			</Route>
			<Route path="/login" component={Login} />
			<Route path="/dashboard" component={DashboardNavigator}>
				<Route path="about" component={EditAbout}/>
				<Route path="edit" component={EditBlogNav} >
					<IndexRoute component={EditList} />
					<Route path=":blogId" component={EditBlog} />
				</Route>
				<Route path="create" component={WriteBlog} />
				<Route path="category" component={Category} />
			</Route>
		</Router>
	</Provider>
	);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(Routes, document.getElementById('app'));
});

