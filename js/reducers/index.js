var actions = require('../actions/index');
var Categories = require('../mock-categories');
var DummyBlogs = require('../mock-data-loader');

var initialState = {
	about: "",
	title: "",
	post: "",
	content: "",
	sectionNumber: 3,
	category: "111",
	categoriesForLoading: Categories.categoriesForLoading,
	categories: Categories.categories,
	dummyBlogs: DummyBlogs,
	landingPost: {_id: "111", title: "foo", month: "Jan", date: "1", year: "2016", categoryId: "z"},
	dashboardPosts: [{_id: "111", title: "foo", month: "Jan", date: "1", year: "2016"}],
	posts: [{_id: "111", title: "foo", month: "Jan", date: "1", year: "2016", categoryId: "z"}],
	token: "",
	username: ""
};

var blogReducer = function(state, action) {
	state = state || initialState;
	if (action.type === actions.CHANGE_CONTENT) {
		return 	Object.assign({}, state, {
			content: action.content
		})
	}
	else if (action.type === actions.LOAD_SUCCESS) {
		return Object.assign({}, state, {	
			categories: action.categories
		})
	}
	else if (action.type === actions.BLOG_LOAD_SUCCESS) {
		return Object.assign({}, state, {
			blogs: action.blogs
		})
	}
	else if (action.type === actions.GET_CATEGORIES_SUCCESS){
		return Object.assign({}, state, {
			categories: action.categories
		})
	}
	else if (action.type === actions.SEARCH_CATEGORIES_SUCCESS) {
		return Object.assign({}, state, {
			posts: action.posts.posts
		})
	}
	else if (action.type === actions.CHANGE_TITLE) {
		return Object.assign({}, state, {
			title: action.title
		})
	}
	else if (action.type === actions.SELECT_CATEGORY) {
		return Object.assign({}, state, {
			category: action.category
		})
	}
	else if (action.type === actions.GET_CATEGORY_SECTION_SUCCESS){
		var categoryAdded = [];
		for (var post in state.posts){
			categoryAdded.push(state.posts[post])
		}
		for (var post in action.section.posts){
			categoryAdded.push(action.section.posts[post])
		}
		return Object.assign({}, state, {
			sectionNumber: action.sectionNumber + 1,
			posts: categoryAdded
		})
	}
	else if (action.type === actions.CATEGORY_SECTION_END) {
		return state
	}
	else if (action.type === actions.SET_POST_FORM) {
		return Object.assign({}, state, {
			title: action.title,
			content: action.content
		})
	}
	else if (action.type === actions.POST_CONTENT_SUCCESS) {
		return Object.assign({}, state, {
			post: action.data
		})
	}
	else if (action.type === actions.GET_DASHBOARD_POSTS_SUCCESS) {
		return Object.assign({}, state, {
			dashboardPosts: action.posts
		})
	}
	else if (action.type === actions.GET_DASHBOARD_post_SUCCESS) {
		return Object.assign({}, state, {
			post: action.post,
			content: action.post.content,
			title: action.post.title
		})
	}
	else if(action.type === actions.GET_BLOG_TO_EDIT) {
		return Object.assign({}, state, {
			title: action.blog.blogPost.title,
			blog: action.blog.blogPost.content
		})
	}
	else if(action.type === actions.UPDATE_POST_SUCCESS) {
		return state
	}
	else if(action.type === actions.DELETE_POST_SUCCESS) {
		console.log("Delete Success");
		return Object.assign({}, state, {
			content: "",
	    	title: "",
	        post: "",
	        category: ""
		})
	}
	else if(action.type === actions.GET_POSTS_SUCCESS) {
		return Object.assign({}, state, {
			landingPost: action.posts[0],
			posts: action.posts
		})
	}
	else if(action.type === actions.GET_SECTION_SUCCESS) {
		var categoryAdded = [];
		for (var post in state.posts){
			categoryAdded.push(state.posts[post])
		}
		for (var post in action.section){
			categoryAdded.push(action.section[post])
		}
		return Object.assign({}, state, {
			sectionNumber: action.sectionNumber + 1,
			posts: categoryAdded
		})
	}
	else if(action.type === actions.GET_ABOUT_SUCCESS) {
		return Object.assign({}, state, {
			about: action.about
		})
	}
	else if(action.type === actions.CHANGE_ABOUT) {
		return Object.assign({}, state, {
			about: action.about
		})
	}
	else if(action.type === actions.UPDATE_ABOUT_SUCCESS) {
		return state
	}
	else if(action.type === actions.LOGIN_SUCCESS) {
		return Object.assign({}, state, {
			username: action.username,
			token: action.token
		})
	}
	else if(action.type === actions.CREATE_USER_SUCCESS) {
		return Object.assign({}, state, {
			username: action.username
		})
	}

	return state;
};

exports.blogReducer = blogReducer;