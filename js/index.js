require('babel-polyfill');
require('isomorphic-fetch');
var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;


var App = require('./components/app');
var MainPage = require('./components/main/main-page');
var AnnalsList = require('./components/annals/annals-list-container');
var Landing = require('./components/landing/landing-container');
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
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Landing} />
				<Route path="posh" component={AnnalsList} />
				
				<Route path="posts" component={MainPage} />
				<Route path="yarns/:blogId" component={MainPage} />
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

/*<Route path="posh/:postId" component={AnnalsList} />*/
